// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Company.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

// chainlink automation
import {AutomationRegistryInterface, State, Config} from "@chainlink/contracts/src/v0.8/interfaces/AutomationRegistryInterface1_2.sol";
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";

error NoEtherSent();

interface KeeperRegistrarInterface {
    function register(
        string memory name,
        bytes calldata encryptedEmail,
        address upkeepContract,
        uint32 gasLimit,
        address adminAddress,
        bytes calldata checkData,
        uint96 amount,
        uint8 source,
        address sender
    ) external;
}

/**
 * @title CompanyFactory
 * @dev This contract is used to deploy new Company contracts
 */
contract CompanyFactory {
    address public immutable companyTemplate;
    address[] public companies;
    uint256 public companyCount;

    // chainlink automation registry
    LinkTokenInterface public immutable i_link;
    address public immutable registrar;
    AutomationRegistryInterface public immutable i_registry;
    bytes4 registerSig = KeeperRegistrarInterface.register.selector;

    event CompanyCreated(address indexed company);

    /**
     * @dev Constructor to create a company template which will be used to deploy new companies
     */
    constructor(
        LinkTokenInterface _link,
        address _registrar,
        AutomationRegistryInterface _registry
    ) {
        companyTemplate = address(new Company());

        // polygon mumbai
        // link - 0x326C977E6efc84E512bB9C30f76E30c160eD06FB 
        // registrar - 	0xDb8e8e2ccb5C033938736aa89Fe4fa1eDfD15a1d
        // registry - 0x02777053d6764996e594c3E88AF1D58D5363a2e6
    
        i_link = _link; 
        registrar = _registrar;
        i_registry = _registry;
    }

    /*
        * @dev This function is used to register a new chainlink keeper and predict the upkeepID
        https://docs.chain.link/chainlink-automation/register-upkeep/#register-an-upkeep-using-your-own-deployed-contract
    */
    function registerAndPredictID(
        string memory name,
        bytes memory encryptedEmail,
        address upkeepContract,
        uint32 gasLimit,
        address adminAddress,
        bytes memory checkData,
        uint96 amount,
        uint8 source
    ) public returns(uint256) {
        (State memory state, Config memory _c, address[] memory _k) = i_registry
            .getState();
        uint256 oldNonce = state.nonce;
        bytes memory payload = abi.encode(
            name,
            encryptedEmail,
            upkeepContract,
            gasLimit,
            adminAddress,
            checkData,
            amount,
            source,
            address(this)
        );

        i_link.transferAndCall(
            registrar,
            amount,
            bytes.concat(registerSig, payload)
        );
        (state, _c, _k) = i_registry.getState();
        uint256 newNonce = state.nonce;
        if (newNonce == oldNonce + 1) {
            uint256 upkeepID = uint256(
                keccak256(
                    abi.encodePacked(
                        blockhash(block.number - 1),
                        address(i_registry),
                        uint32(oldNonce)
                    )
                )
            );
            
            // storing the upkeepID in the company contract
            return upkeepID;
        } else {
            revert("auto-approve disabled");
        }
    }

    /**
     * @dev This function is used to deploy new Company contracts
     * @param _name The name of the company
     */
    function createCompany(string memory _name)
        public
        payable
        returns (address)
    {
        if (msg.value <= 0) revert NoEtherSent();
        
        address clone = Clones.clone(companyTemplate);
        
        // register the company with chainlink automation
        uint256 _upkeepID = registerAndPredictID(
            _name,
            "0x",
            clone,
            100000,
            msg.sender,
            "0x",
            5000000000000000000,
            0
        );

        Company(clone).initialize{value: msg.value}(msg.sender, _name, _upkeepID);

        companies.push(clone);
        companyCount++;
        emit CompanyCreated(clone);

        return clone;
    }
}
