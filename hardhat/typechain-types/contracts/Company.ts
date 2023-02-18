/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace Company {
  export type EmployeeStruct = {
    pensionStartDate: PromiseOrValue<BigNumberish>;
    pensionDuration: PromiseOrValue<BigNumberish>;
    monthyAmount: PromiseOrValue<BigNumberish>;
    employeeJoiningDate: PromiseOrValue<BigNumberish>;
    employeeLeavingDate: PromiseOrValue<BigNumberish>;
    minimumServiceRequired: PromiseOrValue<BigNumberish>;
  };

  export type EmployeeStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    pensionStartDate: BigNumber;
    pensionDuration: BigNumber;
    monthyAmount: BigNumber;
    employeeJoiningDate: BigNumber;
    employeeLeavingDate: BigNumber;
    minimumServiceRequired: BigNumber;
  };
}

export interface CompanyInterface extends utils.Interface {
  functions: {
    "addEmployee(address,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "addEmployees(address[],uint256[],uint256[],uint256[],uint256[],uint256[],uint256[])": FunctionFragment;
    "castVote(uint256,uint8)": FunctionFragment;
    "changeName(string)": FunctionFragment;
    "companyDAO()": FunctionFragment;
    "companyName()": FunctionFragment;
    "employeeAddresses(uint256)": FunctionFragment;
    "employees(address)": FunctionFragment;
    "executeProposal(uint256,uint256[],bytes[],bytes32)": FunctionFragment;
    "getEmployee(address)": FunctionFragment;
    "getEmployees()": FunctionFragment;
    "getState(uint256)": FunctionFragment;
    "initialize(address,string)": FunctionFragment;
    "owner()": FunctionFragment;
    "pensionCounter()": FunctionFragment;
    "propose(uint256[],bytes[],string)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferFundsToEmployees()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateEmployee(address,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addEmployee"
      | "addEmployees"
      | "castVote"
      | "changeName"
      | "companyDAO"
      | "companyName"
      | "employeeAddresses"
      | "employees"
      | "executeProposal"
      | "getEmployee"
      | "getEmployees"
      | "getState"
      | "initialize"
      | "owner"
      | "pensionCounter"
      | "propose"
      | "renounceOwnership"
      | "transferFundsToEmployees"
      | "transferOwnership"
      | "updateEmployee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addEmployee",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addEmployees",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeName",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "companyDAO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "companyName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "employeeAddresses",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "employees",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getEmployee",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getEmployees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getState",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pensionCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFundsToEmployees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEmployee",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addEmployee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addEmployees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "changeName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "companyDAO", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "companyName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "employeeAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "employees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEmployee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEmployees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getState", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pensionCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFundsToEmployees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEmployee",
    data: BytesLike
  ): Result;

  events: {
    "CompanyPensionTransferFailed(address)": EventFragment;
    "CompanyPensionTransferSucceeded(address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "CompanyPensionTransferFailed"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "CompanyPensionTransferSucceeded"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface CompanyPensionTransferFailedEventObject {
  company: string;
}
export type CompanyPensionTransferFailedEvent = TypedEvent<
  [string],
  CompanyPensionTransferFailedEventObject
>;

export type CompanyPensionTransferFailedEventFilter =
  TypedEventFilter<CompanyPensionTransferFailedEvent>;

export interface CompanyPensionTransferSucceededEventObject {
  company: string;
  amount: BigNumber;
}
export type CompanyPensionTransferSucceededEvent = TypedEvent<
  [string, BigNumber],
  CompanyPensionTransferSucceededEventObject
>;

export type CompanyPensionTransferSucceededEventFilter =
  TypedEventFilter<CompanyPensionTransferSucceededEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Company extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CompanyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addEmployee(
      _employeeAddress: PromiseOrValue<string>,
      _pensionStartDate: PromiseOrValue<BigNumberish>,
      _pensionDuration: PromiseOrValue<BigNumberish>,
      _monthyAmount: PromiseOrValue<BigNumberish>,
      _employeeJoiningDate: PromiseOrValue<BigNumberish>,
      _employeeLeavingDate: PromiseOrValue<BigNumberish>,
      _minimumServiceRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addEmployees(
      _employeeAddresses: PromiseOrValue<string>[],
      _pensionStartDates: PromiseOrValue<BigNumberish>[],
      _pensionDurations: PromiseOrValue<BigNumberish>[],
      _monthyAmounts: PromiseOrValue<BigNumberish>[],
      _employeeJoiningDates: PromiseOrValue<BigNumberish>[],
      _employeeLeavingDates: PromiseOrValue<BigNumberish>[],
      _minimumServiceRequireds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    castVote(
      _proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeName(
      _companyName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    companyDAO(overrides?: CallOverrides): Promise<[string]>;

    companyName(overrides?: CallOverrides): Promise<[string]>;

    employeeAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    employees(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        pensionStartDate: BigNumber;
        pensionDuration: BigNumber;
        monthyAmount: BigNumber;
        employeeJoiningDate: BigNumber;
        employeeLeavingDate: BigNumber;
        minimumServiceRequired: BigNumber;
      }
    >;

    executeProposal(
      _proposalId: PromiseOrValue<BigNumberish>,
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getEmployee(
      _employeeAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Company.EmployeeStructOutput]>;

    getEmployees(
      overrides?: CallOverrides
    ): Promise<[Company.EmployeeStructOutput[]]>;

    getState(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    initialize(
      _owner: PromiseOrValue<string>,
      _companyName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pensionCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    propose(
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferFundsToEmployees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateEmployee(
      _employeeAddress: PromiseOrValue<string>,
      _pensionStartDate: PromiseOrValue<BigNumberish>,
      _pensionDuration: PromiseOrValue<BigNumberish>,
      _monthyAmount: PromiseOrValue<BigNumberish>,
      _employeeJoiningDate: PromiseOrValue<BigNumberish>,
      _employeeLeavingDate: PromiseOrValue<BigNumberish>,
      _minimumServiceRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addEmployee(
    _employeeAddress: PromiseOrValue<string>,
    _pensionStartDate: PromiseOrValue<BigNumberish>,
    _pensionDuration: PromiseOrValue<BigNumberish>,
    _monthyAmount: PromiseOrValue<BigNumberish>,
    _employeeJoiningDate: PromiseOrValue<BigNumberish>,
    _employeeLeavingDate: PromiseOrValue<BigNumberish>,
    _minimumServiceRequired: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addEmployees(
    _employeeAddresses: PromiseOrValue<string>[],
    _pensionStartDates: PromiseOrValue<BigNumberish>[],
    _pensionDurations: PromiseOrValue<BigNumberish>[],
    _monthyAmounts: PromiseOrValue<BigNumberish>[],
    _employeeJoiningDates: PromiseOrValue<BigNumberish>[],
    _employeeLeavingDates: PromiseOrValue<BigNumberish>[],
    _minimumServiceRequireds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  castVote(
    _proposalId: PromiseOrValue<BigNumberish>,
    support: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeName(
    _companyName: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  companyDAO(overrides?: CallOverrides): Promise<string>;

  companyName(overrides?: CallOverrides): Promise<string>;

  employeeAddresses(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  employees(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      pensionStartDate: BigNumber;
      pensionDuration: BigNumber;
      monthyAmount: BigNumber;
      employeeJoiningDate: BigNumber;
      employeeLeavingDate: BigNumber;
      minimumServiceRequired: BigNumber;
    }
  >;

  executeProposal(
    _proposalId: PromiseOrValue<BigNumberish>,
    values: PromiseOrValue<BigNumberish>[],
    calldatas: PromiseOrValue<BytesLike>[],
    descriptionHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getEmployee(
    _employeeAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Company.EmployeeStructOutput>;

  getEmployees(
    overrides?: CallOverrides
  ): Promise<Company.EmployeeStructOutput[]>;

  getState(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  initialize(
    _owner: PromiseOrValue<string>,
    _companyName: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pensionCounter(overrides?: CallOverrides): Promise<BigNumber>;

  propose(
    values: PromiseOrValue<BigNumberish>[],
    calldatas: PromiseOrValue<BytesLike>[],
    description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferFundsToEmployees(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateEmployee(
    _employeeAddress: PromiseOrValue<string>,
    _pensionStartDate: PromiseOrValue<BigNumberish>,
    _pensionDuration: PromiseOrValue<BigNumberish>,
    _monthyAmount: PromiseOrValue<BigNumberish>,
    _employeeJoiningDate: PromiseOrValue<BigNumberish>,
    _employeeLeavingDate: PromiseOrValue<BigNumberish>,
    _minimumServiceRequired: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addEmployee(
      _employeeAddress: PromiseOrValue<string>,
      _pensionStartDate: PromiseOrValue<BigNumberish>,
      _pensionDuration: PromiseOrValue<BigNumberish>,
      _monthyAmount: PromiseOrValue<BigNumberish>,
      _employeeJoiningDate: PromiseOrValue<BigNumberish>,
      _employeeLeavingDate: PromiseOrValue<BigNumberish>,
      _minimumServiceRequired: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addEmployees(
      _employeeAddresses: PromiseOrValue<string>[],
      _pensionStartDates: PromiseOrValue<BigNumberish>[],
      _pensionDurations: PromiseOrValue<BigNumberish>[],
      _monthyAmounts: PromiseOrValue<BigNumberish>[],
      _employeeJoiningDates: PromiseOrValue<BigNumberish>[],
      _employeeLeavingDates: PromiseOrValue<BigNumberish>[],
      _minimumServiceRequireds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    castVote(
      _proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeName(
      _companyName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    companyDAO(overrides?: CallOverrides): Promise<string>;

    companyName(overrides?: CallOverrides): Promise<string>;

    employeeAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    employees(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        pensionStartDate: BigNumber;
        pensionDuration: BigNumber;
        monthyAmount: BigNumber;
        employeeJoiningDate: BigNumber;
        employeeLeavingDate: BigNumber;
        minimumServiceRequired: BigNumber;
      }
    >;

    executeProposal(
      _proposalId: PromiseOrValue<BigNumberish>,
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getEmployee(
      _employeeAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Company.EmployeeStructOutput>;

    getEmployees(
      overrides?: CallOverrides
    ): Promise<Company.EmployeeStructOutput[]>;

    getState(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    initialize(
      _owner: PromiseOrValue<string>,
      _companyName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pensionCounter(overrides?: CallOverrides): Promise<BigNumber>;

    propose(
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      description: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferFundsToEmployees(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEmployee(
      _employeeAddress: PromiseOrValue<string>,
      _pensionStartDate: PromiseOrValue<BigNumberish>,
      _pensionDuration: PromiseOrValue<BigNumberish>,
      _monthyAmount: PromiseOrValue<BigNumberish>,
      _employeeJoiningDate: PromiseOrValue<BigNumberish>,
      _employeeLeavingDate: PromiseOrValue<BigNumberish>,
      _minimumServiceRequired: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CompanyPensionTransferFailed(address)"(
      company?: PromiseOrValue<string> | null
    ): CompanyPensionTransferFailedEventFilter;
    CompanyPensionTransferFailed(
      company?: PromiseOrValue<string> | null
    ): CompanyPensionTransferFailedEventFilter;

    "CompanyPensionTransferSucceeded(address,uint256)"(
      company?: PromiseOrValue<string> | null,
      amount?: null
    ): CompanyPensionTransferSucceededEventFilter;
    CompanyPensionTransferSucceeded(
      company?: PromiseOrValue<string> | null,
      amount?: null
    ): CompanyPensionTransferSucceededEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addEmployee(
      _employeeAddress: PromiseOrValue<string>,
      _pensionStartDate: PromiseOrValue<BigNumberish>,
      _pensionDuration: PromiseOrValue<BigNumberish>,
      _monthyAmount: PromiseOrValue<BigNumberish>,
      _employeeJoiningDate: PromiseOrValue<BigNumberish>,
      _employeeLeavingDate: PromiseOrValue<BigNumberish>,
      _minimumServiceRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addEmployees(
      _employeeAddresses: PromiseOrValue<string>[],
      _pensionStartDates: PromiseOrValue<BigNumberish>[],
      _pensionDurations: PromiseOrValue<BigNumberish>[],
      _monthyAmounts: PromiseOrValue<BigNumberish>[],
      _employeeJoiningDates: PromiseOrValue<BigNumberish>[],
      _employeeLeavingDates: PromiseOrValue<BigNumberish>[],
      _minimumServiceRequireds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    castVote(
      _proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeName(
      _companyName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    companyDAO(overrides?: CallOverrides): Promise<BigNumber>;

    companyName(overrides?: CallOverrides): Promise<BigNumber>;

    employeeAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    employees(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeProposal(
      _proposalId: PromiseOrValue<BigNumberish>,
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getEmployee(
      _employeeAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEmployees(overrides?: CallOverrides): Promise<BigNumber>;

    getState(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _owner: PromiseOrValue<string>,
      _companyName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pensionCounter(overrides?: CallOverrides): Promise<BigNumber>;

    propose(
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferFundsToEmployees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateEmployee(
      _employeeAddress: PromiseOrValue<string>,
      _pensionStartDate: PromiseOrValue<BigNumberish>,
      _pensionDuration: PromiseOrValue<BigNumberish>,
      _monthyAmount: PromiseOrValue<BigNumberish>,
      _employeeJoiningDate: PromiseOrValue<BigNumberish>,
      _employeeLeavingDate: PromiseOrValue<BigNumberish>,
      _minimumServiceRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addEmployee(
      _employeeAddress: PromiseOrValue<string>,
      _pensionStartDate: PromiseOrValue<BigNumberish>,
      _pensionDuration: PromiseOrValue<BigNumberish>,
      _monthyAmount: PromiseOrValue<BigNumberish>,
      _employeeJoiningDate: PromiseOrValue<BigNumberish>,
      _employeeLeavingDate: PromiseOrValue<BigNumberish>,
      _minimumServiceRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addEmployees(
      _employeeAddresses: PromiseOrValue<string>[],
      _pensionStartDates: PromiseOrValue<BigNumberish>[],
      _pensionDurations: PromiseOrValue<BigNumberish>[],
      _monthyAmounts: PromiseOrValue<BigNumberish>[],
      _employeeJoiningDates: PromiseOrValue<BigNumberish>[],
      _employeeLeavingDates: PromiseOrValue<BigNumberish>[],
      _minimumServiceRequireds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    castVote(
      _proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeName(
      _companyName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    companyDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    companyName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    employeeAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    employees(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeProposal(
      _proposalId: PromiseOrValue<BigNumberish>,
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      descriptionHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getEmployee(
      _employeeAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEmployees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getState(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _owner: PromiseOrValue<string>,
      _companyName: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pensionCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    propose(
      values: PromiseOrValue<BigNumberish>[],
      calldatas: PromiseOrValue<BytesLike>[],
      description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferFundsToEmployees(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateEmployee(
      _employeeAddress: PromiseOrValue<string>,
      _pensionStartDate: PromiseOrValue<BigNumberish>,
      _pensionDuration: PromiseOrValue<BigNumberish>,
      _monthyAmount: PromiseOrValue<BigNumberish>,
      _employeeJoiningDate: PromiseOrValue<BigNumberish>,
      _employeeLeavingDate: PromiseOrValue<BigNumberish>,
      _minimumServiceRequired: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
