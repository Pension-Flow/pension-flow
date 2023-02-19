// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

error EmployeeAlreadyExists();
error InsufficientFunds();

struct Employee {
    uint256 pensionStartDate;
    uint256 pensionDuration;
    uint256 monthyAmount;
    uint256 employeeJoiningDate;
    uint256 employeeLeavingDate;
    uint256 minimumServiceRequired;
}

// creating the Request struct definition
struct Proposal {
    string description;
    uint256 value;
    string currency;
    bool complete;
    uint256 approvalCount; // number of yes
    mapping(address => bool) votes; // mapping for the people who have voted
}

/**
 * @title Company
 * @dev This contract is used to store the details of a company and the pension details of its employees
 */
contract Company is Initializable, OwnableUpgradeable {
    // basic details of the company
    string public name;
    mapping(address => Employee) public employees;
    address payable[] public employeeAddresses;

    // DAO related details
    uint256 noOfProposals;
    mapping(uint256 => Proposal) proposals;

    // Pension automtation related details
    uint256 internal lastDistributionTime;
    uint256 public pensionCounter;

    // pension tranfer events
    event CompanyPensionTransferSucceeded(
        address indexed company,
        uint256 amount
    );
    event CompanyPensionTransferFailed(address indexed company);

    // UTILITY FUNCTIONS

    /**
     * @dev This function is used to check if an address is an employee or not
     * @param addressToFind The address to be checked
     */
    function isAddressInEmployee(address addressToFind)
        public
        view
        returns (bool)
    {
        for (uint256 i = 0; i < employeeAddresses.length; i++) {
            if (employeeAddresses[i] == addressToFind) {
                return true;
            }
        }
        return false;
    }

    /**
     * @dev This function is used to initialize the contract
     * @param _owner The owner of the contract
     * @param _name The name of the company
     */
    function initialize(address _owner, string memory _name)
        public
        payable
        initializer
    {
        __Ownable_init();
        transferOwnership(_owner);
        name = _name;

        lastDistributionTime = block.timestamp;
        pensionCounter = 0;
    }

    // DAO RELATED FUNCTIONS

    /**
     * @dev This function is used to create a new proposal
     * @param _description The description of the proposal
     * @param _value The value of the proposal
     * @param _currency The currency of the proposal
     */
    function createProposal(
        string memory _description,
        uint256 _value,
        string memory _currency
    ) public onlyOwner {
        Proposal storage newRequest = proposals[noOfProposals++];
        newRequest.description = _description;
        newRequest.value = _value;
        newRequest.currency = _currency;
        newRequest.complete = false;
        newRequest.approvalCount = 0;
    }

    /**
     * @dev This function is used to approve a proposal
     * @param proposalIndex The index of the proposal
     */
    function approveProposal(uint256 proposalIndex) public {
        // checking if the caller of the function is an approver or not
        require(isAddressInEmployee(msg.sender));

        Proposal storage currProposal = proposals[proposalIndex];

        // checking if the current approver hasnt voted before or not
        require(!currProposal.votes[msg.sender]);

        currProposal.votes[msg.sender] = true;
        currProposal.approvalCount++;
    }

    function finalizeProposal(uint proposalIndex) public onlyOwner{
        Proposal storage currProposal = proposals[proposalIndex];

        require(currProposal.approvalCount > (employeeAddresses.length/2));

        require(!currProposal.complete);       

        // TODO - buy amount in that currency

        currProposal.complete = true;
    }

    // PENSION RELATED FUNCTIONS

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
                    employeeAddresses[i].transfer(
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
     * @param _name The new name of the company
     */
    function changeName(string memory _name) public onlyOwner {
        name = _name;
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
    )
        public
        // bool _employeeActive
        onlyOwner
    {
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
     * @param _employeeActives Whether the employees are active or not
     */
    function addEmployees(
        address[] memory _employeeAddresses,
        uint256[] memory _pensionStartDates,
        uint256[] memory _pensionDurations,
        uint256[] memory _monthyAmounts,
        uint256[] memory _employeeJoiningDates,
        uint256[] memory _employeeLeavingDates,
        uint256[] memory _minimumServiceRequireds,
        bool[] memory _employeeActives
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
     *
     */
    function updateEmployee(
        address _employeeAddress,
        uint256 _pensionStartDate,
        uint256 _pensionDuration,
        uint256 _monthyAmount,
        uint256 _employeeJoiningDate,
        uint256 _employeeLeavingDate,
        uint256 _minimumServiceRequired
    )
        public
        // bool _employeeActive
        onlyOwner
    {
        employees[_employeeAddress] = Employee(
            _pensionStartDate,
            _pensionDuration,
            _monthyAmount,
            _employeeJoiningDate,
            _employeeLeavingDate,
            _minimumServiceRequired
        );
    }
}
