/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface IArbTokenInterface extends ethers.utils.Interface {
  functions: {
    'bridgeMint(address,uint256)': FunctionFragment
    'initialize(address,address,uint8)': FunctionFragment
    'updateInfo(string,string)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'bridgeMint',
    values: [string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'updateInfo',
    values: [string, string]
  ): string

  decodeFunctionResult(functionFragment: 'bridgeMint', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'updateInfo', data: BytesLike): Result

  events: {}
}

export class IArbToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IArbTokenInterface

  functions: {
    bridgeMint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'bridgeMint(address,uint256)'(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    initialize(
      _bridge: string,
      _l1Address: string,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'initialize(address,address,uint8)'(
      _bridge: string,
      _l1Address: string,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    updateInfo(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'updateInfo(string,string)'(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  bridgeMint(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'bridgeMint(address,uint256)'(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  initialize(
    _bridge: string,
    _l1Address: string,
    _decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'initialize(address,address,uint8)'(
    _bridge: string,
    _l1Address: string,
    _decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  updateInfo(
    newName: string,
    newSymbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'updateInfo(string,string)'(
    newName: string,
    newSymbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    bridgeMint(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'bridgeMint(address,uint256)'(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    initialize(
      _bridge: string,
      _l1Address: string,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'initialize(address,address,uint8)'(
      _bridge: string,
      _l1Address: string,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    updateInfo(
      newName: string,
      newSymbol: string,
      overrides?: CallOverrides
    ): Promise<void>

    'updateInfo(string,string)'(
      newName: string,
      newSymbol: string,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    bridgeMint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'bridgeMint(address,uint256)'(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    initialize(
      _bridge: string,
      _l1Address: string,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'initialize(address,address,uint8)'(
      _bridge: string,
      _l1Address: string,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    updateInfo(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'updateInfo(string,string)'(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    bridgeMint(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'bridgeMint(address,uint256)'(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    initialize(
      _bridge: string,
      _l1Address: string,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'initialize(address,address,uint8)'(
      _bridge: string,
      _l1Address: string,
      _decimals: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    updateInfo(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'updateInfo(string,string)'(
      newName: string,
      newSymbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
