/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L2Called } from '../L2Called'

export class L2Called__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L2Called> {
    return super.deploy(overrides || {}) as Promise<L2Called>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2Called {
    return super.attach(address) as L2Called
  }
  connect(signer: Signer): L2Called__factory {
    return super.connect(signer) as L2Called__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2Called {
    return new Contract(address, _abi, signerOrProvider) as L2Called
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'num',
        type: 'uint256',
      },
    ],
    name: 'Called',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'onTransferReceived',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'num',
        type: 'uint256',
      },
    ],
    name: 'postDepositHook',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506101e1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632cf07f821461003b57806388a7ca5c1461005a575b600080fd5b6100586004803603602081101561005157600080fd5b5035610107565b005b6100ea6004803603608081101561007057600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156100ab57600080fd5b8201836020820111156100bd57600080fd5b803590602001918460018302840111640100000000831117156100df57600080fd5b50909250905061013d565b604080516001600160e01b03199092168252519081900360200190f35b6040805182815290517ffea238a9794376fb3707dbbabe56f0fad5e4110a7839485387c458f2d1aa5d509181900360200190a150565b6000808383602081101561015057600080fd5b5035905060058114156101765761016681610107565b50632229f29760e21b90506101a2565b806007141561018457600080fd5b806009141561019c575b60005a11156101665761018e565b50600090505b9594505050505056fea264697066735822122026b64c0dfcdfb782365b7a3fc86ea5bd52d86864a69d1e224681743342591c6b64736f6c634300060b0033'
