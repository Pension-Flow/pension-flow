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

export interface CompanyFactoryInterface extends utils.Interface {
  functions: {
    "companies(uint256)": FunctionFragment;
    "companyCount()": FunctionFragment;
    "companyTemplate()": FunctionFragment;
    "createCompany(string)": FunctionFragment;
    "transferFundsToEmployeesForAllCompanies()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "companies"
      | "companyCount"
      | "companyTemplate"
      | "createCompany"
      | "transferFundsToEmployeesForAllCompanies"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "companies",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "companyCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "companyTemplate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createCompany",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFundsToEmployeesForAllCompanies",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "companies", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "companyCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "companyTemplate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCompany",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFundsToEmployeesForAllCompanies",
    data: BytesLike
  ): Result;

  events: {
    "CompanyCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CompanyCreated"): EventFragment;
}

export interface CompanyCreatedEventObject {
  company: string;
}
export type CompanyCreatedEvent = TypedEvent<
  [string],
  CompanyCreatedEventObject
>;

export type CompanyCreatedEventFilter = TypedEventFilter<CompanyCreatedEvent>;

export interface CompanyFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CompanyFactoryInterface;

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
    companies(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    companyCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    companyTemplate(overrides?: CallOverrides): Promise<[string]>;

    createCompany(
      _name: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferFundsToEmployeesForAllCompanies(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  companies(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  companyCount(overrides?: CallOverrides): Promise<BigNumber>;

  companyTemplate(overrides?: CallOverrides): Promise<string>;

  createCompany(
    _name: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferFundsToEmployeesForAllCompanies(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    companies(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    companyCount(overrides?: CallOverrides): Promise<BigNumber>;

    companyTemplate(overrides?: CallOverrides): Promise<string>;

    createCompany(
      _name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    transferFundsToEmployeesForAllCompanies(
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CompanyCreated(address)"(
      company?: PromiseOrValue<string> | null
    ): CompanyCreatedEventFilter;
    CompanyCreated(
      company?: PromiseOrValue<string> | null
    ): CompanyCreatedEventFilter;
  };

  estimateGas: {
    companies(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    companyCount(overrides?: CallOverrides): Promise<BigNumber>;

    companyTemplate(overrides?: CallOverrides): Promise<BigNumber>;

    createCompany(
      _name: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferFundsToEmployeesForAllCompanies(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    companies(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    companyCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    companyTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createCompany(
      _name: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferFundsToEmployeesForAllCompanies(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
