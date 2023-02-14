// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";

error EmployeeAlreadyExists();
error InsufficientFunds();
/**
 * @title Company
 * @dev This contract is used to store the details of a company and the pension details of its employees
 */
contract Company is Initializable, OwnableUpgradeable, AutomationCompatibleInterface {
    string public name;
    mapping(address => Employee) public employees;
    address payable[] public employeeAddresses;

    uint public lastPensionTimeStamp;

    struct Employee {
        uint256 pensionStartDate;
        uint256 pensionDuration;
        uint256 monthyAmount;
        uint256 employeeJoiningDate;
        uint256 employeeLeavingDate;
        uint256 minimumServiceRequired;
        // bool employeeActive;
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
    }

    /**
     * @dev This function is used to check if the upkeep chainlink automation is needed
     * @param checkData The data used to check if the upkeep is needed
     */
    function checkUpkeep(
        bytes calldata checkData
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory /* performData */)
    {
        upkeepNeeded = (block.timestamp - lastPensionTimeStamp) > 2592000;
    }

    /**
     * @dev This function is used to perform the upkeep chainlink automation
     * @param performData The data used to perform the upkeep
     */
    function performUpkeep(bytes calldata performData) external override {
        if ((block.timestamp - lastPensionTimeStamp) > 2592000) {
            lastPensionTimeStamp = block.timestamp;
        }
        // AKHILESH - THE MONTHLY PENSION PAYMENT CODE COMES HERE
        transferFundsToEmployees();
    }

    /**
     * @dev This function is used to transfer funds to employess, its called automatically by performUpKeep
     */

    function transferFundsToEmployees() internal{
        uint256 amountToDistribute = 0;
        for(uint i = 0; i < employeeAddresses.length; i++) {
            //distribute pension to employees who have retired only
            if(employees[employeeAddresses[i]].employeeLeavingDate - employees[employeeAddresses[i]].employeeJoiningDate >= employees[employeeAddresses[i]].minimumServiceRequired)
                amountToDistribute += employees[employeeAddresses[i]].monthyAmount;
        }
        if(address(this).balance <= amountToDistribute){
            revert InsufficientFunds();
        }
        //Transfer funds
        for(uint i = 0; i < employeeAddresses.length; i++){
            if(employees[employeeAddresses[i]].employeeLeavingDate - employees[employeeAddresses[i]].employeeJoiningDate >= employees[employeeAddresses[i]].minimumServiceRequired)
                employeeAddresses[i].transfer(employees[employeeAddresses[i]].monthyAmount);
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
        // bool _employeeActive
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
        // bool _employeeActive
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
}
