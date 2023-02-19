// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/governance/Governor.sol";

import "./CompanyDAO.sol";
import "./GovernanceToken.sol";
import "./TimeLock.sol";

error EmployeeAlreadyExists();
error InsufficientFunds();

/**
 * @title Company
 * @dev This contract is used to store the details of a company and the pension details of its employees
 */
contract Company is Initializable, OwnableUpgradeable {
    string public companyName;
    mapping(address => Employee) public employees;
    address[] public employeeAddresses;
    CompanyDAO public companyDAO;

    uint256 internal lastDistributionTime;
    uint256 public pensionCounter;

    event CompanyPensionTransferSucceeded(
        address indexed company,
        uint256 amount
    );
    event CompanyPensionTransferFailed(address indexed company);

    struct Employee {
        uint256 pensionStartDate;
        uint256 pensionDuration;
        uint256 monthyAmount;
        uint256 employeeJoiningDate;
        uint256 employeeLeavingDate;
        uint256 minimumServiceRequired;
    }

    /**
     * @dev This function is used to initialize the contract
     * @param _owner The owner of the contract
     * @param _companyName The name of the company
     */
    function initialize(address _owner, string memory _companyName)
        public
        payable
        initializer
    {
        __Ownable_init();
        transferOwnership(_owner);
        companyName = _companyName;

        lastDistributionTime = block.timestamp;
        pensionCounter = 0;

        companyDAO = new CompanyDAO(
            new GovernanceToken(),
            new TimeLock(1, new address[](0), new address[](0), address(this))
        );
    }

    /**
     * @dev This function is used to transfer funds to employess, its called automatically by performUpKeep
     */
    function transferFundsToEmployees() external {
        uint256 amountToDistribute = 0;

        uint256 interval = 2629056; // 1 month in seconds
        // uint256 interval = 60; // for dev

        // Check if it is time to distribute funds
        if (block.timestamp >= lastDistributionTime + interval) {
            for (uint256 i = 0; i < employeeAddresses.length; i++) {
                // distribute pension to employees who have retired only
                if (
                    employees[employeeAddresses[i]].employeeLeavingDate -
                        employees[employeeAddresses[i]].employeeJoiningDate >=
                    employees[employeeAddresses[i]].minimumServiceRequired
                )
                    amountToDistribute += employees[employeeAddresses[i]]
                        .monthyAmount;
            }

            if (address(this).balance < amountToDistribute) {
                emit CompanyPensionTransferFailed(address(this));
                revert InsufficientFunds();
            }

            // Transfer funds
            for (uint256 i = 0; i < employeeAddresses.length; i++) {
                if (
                    employees[employeeAddresses[i]].employeeLeavingDate -
                        employees[employeeAddresses[i]].employeeJoiningDate >=
                    employees[employeeAddresses[i]].minimumServiceRequired
                )
                    payable(employeeAddresses[i]).transfer(
                        employees[employeeAddresses[i]].monthyAmount
                    );
            }

            emit CompanyPensionTransferSucceeded(
                address(this),
                amountToDistribute
            );

            // Update the last distribution time
            pensionCounter = pensionCounter + 1;
            lastDistributionTime = block.timestamp;
        }
    }

    /**
     * @dev This function is used to change the name of the company
     * @param _companyName The new name of the company
     */
    function changeName(string memory _companyName) public onlyOwner {
        companyName = _companyName;
    }

    /**
     * @dev This function is used to add a new employee to the company
     * @param _employeeAddress The address of the employee
     * @param _pensionStartDate The date from which the pension will start
     * @param _pensionDuration The duration of the pension
     * @param _monthyAmount The amount of pension to be paid monthly
     * @param _employeeJoiningDate The date on which the employee joined the company
     * @param _employeeLeavingDate The date on which the employee left the company
     * @param _minimumServiceRequired The minimum service required by the employee to be eligible for pension
     *
     */
    function addEmployee(
        address _employeeAddress,
        uint256 _pensionStartDate,
        uint256 _pensionDuration,
        uint256 _monthyAmount,
        uint256 _employeeJoiningDate,
        uint256 _employeeLeavingDate,
        uint256 _minimumServiceRequired
    ) public onlyOwner {
        if (employees[_employeeAddress].employeeJoiningDate > 0)
            revert EmployeeAlreadyExists();

        employees[_employeeAddress] = Employee(
            _pensionStartDate,
            _pensionDuration,
            _monthyAmount,
            _employeeJoiningDate,
            _employeeLeavingDate,
            _minimumServiceRequired
        );
        employeeAddresses.push(payable(_employeeAddress));
    }

    /**
     * @dev This function is used to add multiple employees to the company
     * @param _employeeAddresses The addresses of the employees
     * @param _pensionStartDates The dates from which the pension will start
     * @param _pensionDurations The durations of the pension
     * @param _monthyAmounts The amounts of pension to be paid monthly
     * @param _employeeJoiningDates The dates on which the employees joined the company
     * @param _employeeLeavingDates The dates on which the employees left the company
     * @param _minimumServiceRequireds The minimum service required by the employees to be eligible for pension
     */
    function addEmployees(
        address[] memory _employeeAddresses,
        uint256[] memory _pensionStartDates,
        uint256[] memory _pensionDurations,
        uint256[] memory _monthyAmounts,
        uint256[] memory _employeeJoiningDates,
        uint256[] memory _employeeLeavingDates,
        uint256[] memory _minimumServiceRequireds
    ) public onlyOwner {
        for (uint256 i = 0; i < _employeeAddresses.length; i++) {
            if (employees[_employeeAddresses[i]].employeeJoiningDate > 0)
                revert EmployeeAlreadyExists();
        }
        for (uint256 i = 0; i < _employeeAddresses.length; i++) {
            employeeAddresses.push(payable(_employeeAddresses[i]));
            employees[_employeeAddresses[i]] = Employee(
                _pensionStartDates[i],
                _pensionDurations[i],
                _monthyAmounts[i],
                _employeeJoiningDates[i],
                _employeeLeavingDates[i],
                _minimumServiceRequireds[i]
            );
        }
    }

    /**
     * @dev This function is used to get the details of all the employees of the company
     */
    function getEmployees()
        external
        view
        onlyOwner
        returns (Employee[] memory)
    {
        Employee[] memory _employees = new Employee[](employeeAddresses.length);
        for (uint256 i = 0; i < employeeAddresses.length; i++) {
            _employees[i] = employees[employeeAddresses[i]];
        }
        return _employees;
    }

    /**
     * @dev This function is used to get the details of a particular employee of the company
     * @param _employeeAddress The address of the employee
     */
    function getEmployee(address _employeeAddress)
        external
        view
        onlyOwner
        returns (Employee memory)
    {
        return employees[_employeeAddress];
    }

    /**
     * @dev This function is used to update the details of a particular employee of the company
     * @param _employeeAddress The address of the employee
     * @param _pensionStartDate The date from which the pension will start
     * @param _pensionDuration The duration of the pension
     * @param _monthyAmount The amount of pension to be paid monthly
     * @param _employeeJoiningDate The date on which the employee joined the company
     * @param _employeeLeavingDate The date on which the employee left the company
     * @param _minimumServiceRequired The minimum service required by the employee to be eligible for pension
     */
    function updateEmployee(
        address _employeeAddress,
        uint256 _pensionStartDate,
        uint256 _pensionDuration,
        uint256 _monthyAmount,
        uint256 _employeeJoiningDate,
        uint256 _employeeLeavingDate,
        uint256 _minimumServiceRequired
    ) public onlyOwner {
        employees[_employeeAddress] = Employee(
            _pensionStartDate,
            _pensionDuration,
            _monthyAmount,
            _employeeJoiningDate,
            _employeeLeavingDate,
            _minimumServiceRequired
        );
    }

    /**
     * @dev This function is used to cast a vote for a proposal
     * @param _proposalId The id of the proposal
     * @param support The support for the proposal
     * @return balance
     */
    function castVote(uint256 _proposalId, uint8 support)
        public
        returns (uint256)
    {
        return companyDAO.castVote(_proposalId, support);
    }

    /**
     * @dev This function is used to execute a proposal
     * @param _proposalId The id of the proposal
     * @param values The values of the proposal
     * @param calldatas The calldatas of the proposal
     * @param descriptionHash The descriptionHash of the proposal
     */
    function executeProposal(
        uint256 _proposalId,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) public onlyOwner {
        companyDAO.executeProposal(
            _proposalId,
            employeeAddresses,
            values,
            calldatas,
            descriptionHash
        );
    }

    /**
     * @dev This function is used to propose a new proposal
     * @param values The values of the proposal
     * @param calldatas The calldatas of the proposal
     * @param description The description of the proposal
     */
    function propose(
        uint256[] memory values,
        bytes[] memory calldatas,
        string memory description
    ) public onlyOwner returns (uint256) {
        return
            companyDAO.propose(
                employeeAddresses,
                values,
                calldatas,
                description
            );
    }

    /**
     * @dev This function is used to get the state of a proposal
     * @param proposalId The id of the proposal
     */
    function getState(uint256 proposalId)
        public
        view
        returns (IGovernor.ProposalState)
    {
        return companyDAO.state(proposalId);
    }
}
