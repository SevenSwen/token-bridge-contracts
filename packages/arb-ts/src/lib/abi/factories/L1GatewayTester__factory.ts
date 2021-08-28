/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L1GatewayTester,
  L1GatewayTesterInterface,
} from '../L1GatewayTester'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_sequenceNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'WhitelistSourceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'newData',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'madeExternalCall',
        type: 'bool',
      },
    ],
    name: 'WithdrawRedirected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalFinalized',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cloneableProxyHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
    ],
    name: 'encodeWithdrawal',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasReserveIfCallRevert',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_initialData',
        type: 'bytes',
      },
    ],
    name: 'getExternalCall',
    outputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'inboundEscrowAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_cloneableProxyHash',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_l2BeaconProxyFactory',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2BeaconProxyFactory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'redirectedExits',
    outputs: [
      {
        internalType: 'bool',
        name: 'isExit',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: '_newTo',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_shouldUseInbox',
        type: 'bool',
      },
    ],
    name: 'setInboxUse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferExitAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'updateWhitelistSource',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelist',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506129dc806100206000396000f3fe60806040526004361061011e5760003560e01c806397881f8d116100a0578063bd5f3e7d11610064578063bd5f3e7d14610670578063d2ce7d651461075b578063f68a9082146107f5578063f887ea401461094c578063fb0e722b146109615761011e565b806397881f8d14610436578063a01893bf1461044b578063a0c76a961461049e578063a7e28d4814610577578063bcf2e6eb146105aa5761011e565b806347466f98116100e757806347466f981461039857806369ec2bed146103cb57806370fc045f146103f757806393e59dc11461040c57806395fcea78146104215761011e565b8062aa3a9b14610123578063020a6058146101fc5780630f09eb51146102475780632db09c1c1461025c5780632e567b361461028d575b600080fd5b34801561012f57600080fd5b506101fa600480360360a081101561014657600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561018657600080fd5b82018360208201111561019857600080fd5b803590602001918460018302840111600160201b831117156101b957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610976945050505050565b005b34801561020857600080fd5b506102356004803603604081101561021f57600080fd5b50803590602001356001600160a01b0316610b70565b60408051918252519081900360200190f35b34801561025357600080fd5b50610235610ba5565b34801561026857600080fd5b50610271610bac565b604080516001600160a01b039092168252519081900360200190f35b610323600480360360a08110156102a357600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156102e557600080fd5b8201836020820111156102f757600080fd5b803590602001918460018302840111600160201b8311171561031857600080fd5b509092509050610bc0565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561035d578181015183820152602001610345565b50505050905090810190601f16801561038a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103a457600080fd5b506101fa600480360360208110156103bb57600080fd5b50356001600160a01b0316610f43565b3480156103d757600080fd5b506101fa600480360360208110156103ee57600080fd5b50351515610fe6565b34801561040357600080fd5b50610271610ff9565b34801561041857600080fd5b50610271611008565b34801561042d57600080fd5b506101fa611017565b34801561044257600080fd5b50610235611074565b34801561045757600080fd5b506101fa600480360360a081101561046e57600080fd5b506001600160a01b038135811691602081013582169160408201358116916060810135916080909101351661107a565b3480156104aa57600080fd5b50610323600480360360a08110156104c157600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561050357600080fd5b82018360208201111561051557600080fd5b803590602001918460018302840111600160201b8311171561053657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611149945050505050565b34801561058357600080fd5b506102716004803603602081101561059a57600080fd5b50356001600160a01b03166113c3565b3480156105b657600080fd5b506105d4600480360360208110156105cd57600080fd5b50356113f6565b6040518084151515158152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561063357818101518382015260200161061b565b50505050905090810190601f1680156106605780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561067c57600080fd5b506101fa600480360360a081101561069357600080fd5b8135916001600160a01b03602082013581169260408301359091169190810190608081016060820135600160201b8111156106cd57600080fd5b8201836020820111156106df57600080fd5b803590602001918460018302840111600160201b8311171561070057600080fd5b919390929091602081019035600160201b81111561071d57600080fd5b82018360208201111561072f57600080fd5b803590602001918460018302840111600160201b8311171561075057600080fd5b5090925090506114ad565b610323600480360360c081101561077157600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156107b757600080fd5b8201836020820111156107c957600080fd5b803590602001918460018302840111600160201b831117156107ea57600080fd5b509092509050611786565b34801561080157600080fd5b506108bb6004803603606081101561081857600080fd5b8135916001600160a01b0360208201351691810190606081016040820135600160201b81111561084757600080fd5b82018360208201111561085957600080fd5b803590602001918460018302840111600160201b8311171561087a57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061186f945050505050565b60405180836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156109105781810151838201526020016108f8565b50505050905090810190601f16801561093d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561095857600080fd5b5061027161195a565b34801561096d57600080fd5b50610271611969565b3330146109ca576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b6109dc826001600160a01b0316611978565b610a2d576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b610a3885838661197e565b6000610a42610ba5565b5a039050805a11610a845760405162461bcd60e51b815260040180806020018281038252602b815260200180612952602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b01578181015183820152602001610ae9565b50505050905090810190601f168015610b2e5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b158015610b4f57600080fd5b5087f1158015610b63573d6000803e3d6000fd5b5050505050505050505050565b604080516020808201949094526001600160a01b03929092168282015280518083038201815260609092019052805191012090565b6175305b90565b60005461010090046001600160a01b031681565b6002546060906001600160a01b03166000610bda8261199d565b9050336001600160a01b03821614610c2b576040805162461bcd60e51b815260206004820152600f60248201526e4e4f545f46524f4d5f42524944474560881b604482015290519081900360640190fd5b6000610c36836119b7565b6000549091506001600160a01b038083166101009092041614610c9b576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60006060610ca988886119d3565b91509150610cb8828b8361186f565b8051919b50915015610eb3576000306001600160a01b031662aa3a9b8e8c8f8f876040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610d73578181015183820152602001610d5b565b50505050905090810190601f168015610da05780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610dc357600080fd5b505af1925050508015610dd4575060015b610de857610de38d8d8c61197e565b610dec565b5060015b8a6001600160a01b03168c6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838d86604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e71578181015183820152602001610e59565b50505050905090810190601f168015610e9e5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610ebe565b610ebe8c8b8b61197e565b818a6001600160a01b03168c6001600160a01b03167f891afe029c75c4f8c5855fc3480598bc5a53739344f6ae575bdb7ea2a79f56b38f8d60405180836001600160a01b03166001600160a01b031681526020018281526020019250505060405180910390a450506040805160208101909152600081529a9950505050505050505050565b6006546001600160a01b03163314610f92576040805162461bcd60e51b815260206004820152600d60248201526c1393d517d19493d357d31254d5609a1b604482015290519081900360640190fd5b600680546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f37389c47920d5cc3229678a0205d0455002c07541a4139ebdce91ac2274657779181900360200190a150565b6000805460ff1916911515919091179055565b6005546001600160a01b031681565b6006546001600160a01b031681565b6000611021611a80565b9050336001600160a01b03821614611071576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b60045481565b611085858585611aa5565b816110cb576040805162461bcd60e51b81526020600482015260116024820152700929cac82989288bea0a49eb0b29082a69607b1b604482015290519081900360640190fd5b6001600160a01b038116611117576040805162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa122a0a1a7a760911b604482015290519081900360640190fd5b600491909155600580546001600160a01b039092166001600160a01b0319928316179055600680549091169055505050565b60608061115d876306fdde0360e01b611ab0565b61116e886395d89b4160e01b611ab0565b61117f8963313ce56760e01b611ab0565b60405160200180806020018060200180602001848103845287818151815260200191508051906020019080838360005b838110156111c75781810151838201526020016111af565b50505050905090810190601f1680156111f45780820380516001836020036101000a031916815260200191505b50848103835286518152865160209182019188019080838360005b8381101561122757818101518382015260200161120f565b50505050905090810190601f1680156112545780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b8381101561128757818101518382015260200161126f565b50505050905090810190601f1680156112b45780820380516001836020036101000a031916815260200191505b5096505050505050506040516020818303038152906040529050632e567b3660e01b878787876112e48689611b8c565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b8381101561134f578181015183820152602001611337565b50505050905090810190601f16801561137c5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a1699909917909852509597505050505050505095945050505050565b6000806113cf83611c7e565b6004546005549192506113ed918391906001600160a01b0316611cdb565b9150505b919050565b600360209081526000918252604091829020805460018083018054865160026101009483161585026000190190921691909104601f810187900487028201870190975286815260ff841696929093046001600160a01b0316949091908301828280156114a35780601f10611478576101008083540402835291602001916114a3565b820191906000526020600020905b81548152906001019060200180831161148657829003601f168201915b5050505050905083565b60006114c988886040518060200160405280600081525061186f565b509050336001600160a01b0382161461151f576040805162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b604482015290519081900360640190fd5b61156188888888888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611d3892505050565b81156116c957611579866001600160a01b0316611978565b6115bc576040805162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000866001600160a01b031663592e2070838b87876040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050602060405180830381600087803b15801561165257600080fd5b505af1158015611666573d6000803e3d6000fd5b505050506040513d602081101561167c57600080fd5b50519050806116c7576040805162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b604482015290519081900360640190fd5b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051808060200180602001841515151581526020018381038352888882818152602001925080828437600083820152601f01601f191690910184810383528681526020019050868680828437600083820152604051601f909101601f1916909201829003995090975050505050505050a45050505050505050565b6006546060906001600160a01b031615611854576006546040805163babcc53960e01b815233600482015290516001600160a01b039092169163babcc53991602480820192602092909190829003018186803b1580156117e557600080fd5b505afa1580156117f9573d6000803e3d6000fd5b505050506040513d602081101561180f57600080fd5b5051611854576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d5d2125511531254d51151608a1b604482015290519081900360640190fd5b61186388888888888888611dc9565b98975050505050505050565b60006060600061187f8686610b70565b600081815260036020526040902080549192509060ff16156119495780546001808301805460408051602060026101009685161587026000190190941693909304601f8101849004840282018401909252818152939094046001600160a01b03169391929183918301828280156119375780601f1061190c57610100808354040283529160200191611937565b820191906000526020600020905b81548152906001019060200180831161191a57829003601f168201915b50505050509050935093505050611952565b85859350935050505b935093915050565b6001546001600160a01b031681565b6002546001600160a01b031681565b3b151590565b6119986001600160a01b038416838363ffffffff61206c16565b505050565b6000805460ff16156119b05750806113f1565b50336113f1565b6000805460ff16156119b0576119cc826120be565b90506113f1565b60006060838360408110156119e757600080fd5b81359190810190604081016020820135600160201b811115611a0857600080fd5b820183602082011115611a1a57600080fd5b803590602001918460018302840111600160201b83111715611a3b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6119988383836121e9565b60408051600481526024810182526020810180516001600160e01b03166001600160e01b031985161781529151815160609360009385936001600160a01b03891693919290918291908083835b60208310611b1c5780518252601f199092019160209182019101611afd565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114611b7c576040519150601f19603f3d011682016040523d82523d6000602084013e611b81565b606091505b509695505050505050565b60608282604051602001808060200180602001838103835285818151815260200191508051906020019080838360005b83811015611bd4578181015183820152602001611bbc565b50505050905090810190601f168015611c015780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611c34578181015183820152602001611c1c565b50505050905090810190601f168015611c615780820380516001836020036101000a031916815260200191505b5060408051601f1981840301815291905298975050505050505050565b600054604080516001600160a01b03938416602080830191909152825180830382018152828401845280519082012061010090940490941660608201526080808201939093528151808203909301835260a0019052805191012090565b604080516001600160f81b03196020808301919091526bffffffffffffffffffffffff19606085901b16602183015260358201869052605580830186905283518084039091018152607590920190925280519101205b9392505050565b6000611d448585610b70565b6040805160608101825260018082526001600160a01b0387811660208085019182528486018981526000888152600383529690962085518154935160ff1990941690151517610100600160a81b0319166101009390941692909202929092178155935180519596509294611dbf939285019290910190612893565b5050505050505050565b606060008060606000611ddb336122a6565b15611df457611dea87876122ba565b9094509150611e31565b33935086868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294505050505b818060200190516040811015611e4657600080fd5b815160208301805160405192949293830192919084600160201b821115611e6c57600080fd5b908301906020820185811115611e8157600080fd5b8251600160201b811182820188101715611e9a57600080fd5b82525081516020918201929091019080838360005b83811015611ec7578181015183820152602001611eaf565b50505050905090810190601f168015611ef45780820380516001836020036101000a031916815260200191505b5060405250919450919250611f149150506001600160a01b038d16611978565b611f57576040805162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000611f628d6113c3565b90506001600160a01b038116611fb1576040805162461bcd60e51b815260206004820152600f60248201526e1393d7d30c97d513d2d15397d4d155608a1b604482015290519081900360640190fd5b611fbc8d868d6122f8565b611fc98d868e8e87611149565b9550611fd9858c8c8c868b612313565b93505050818a6001600160a01b0316846001600160a01b03167fb8910b9960c443aac3240b98585384e3a6f109fbf6969e264c3f183d69aba7e18e8d60405180836001600160a01b03166001600160a01b031681526020018281526020019250505060405180910390a4506040805160208082019390935281518082039093018352810190529998505050505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611998908490612374565b6000806120ca83612425565b6001600160a01b031663ab5d89436040518163ffffffff1660e01b815260040160206040518083038186803b15801561210257600080fd5b505afa158015612116573d6000803e3d6000fd5b505050506040513d602081101561212c57600080fd5b505160408051634032458160e11b815290519192506000916001600160a01b038416916380648b02916004808301926020929190829003018186803b15801561217457600080fd5b505afa158015612188573d6000803e3d6000fd5b505050506040513d602081101561219e57600080fd5b505190506001600160a01b0381166113ed576040805162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b604482015290519081900360640190fd5b6121f38383612436565b6001600160a01b03821661223b576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b6001600160a01b038116612282576040805162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b6001546001600160a01b0390811691161490565b60006060838360408110156122ce57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115611a0857600080fd5b6119986001600160a01b03841683308463ffffffff61251116565b6000612369600260009054906101000a90046001600160a01b0316600060019054906101000a90046001600160a01b03168934600060405180606001604052808a81526020018c81526020018b81525088612571565b979650505050505050565b60606123c9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166125909092919063ffffffff16565b805190915015611998578080602001905160208110156123e857600080fd5b50516119985760405162461bcd60e51b815260040180806020018281038252602a81526020018061297d602a913960400191505060405180910390fd5b60006124308261199d565b92915050565b6001600160a01b038216612487576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b60005461010090046001600160a01b0316156124d9576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b60008054610100600160a81b0319166101006001600160a01b0394851602179055600180546001600160a01b03191691909216179055565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261256b908590612374565b50505050565b60006118638888888888886000015189602001518a604001518a6125a7565b606061259f84846000856125c8565b949350505050565b60006125ba8a8a8a8a8a8a8a8a8a612719565b9a9950505050505050505050565b6060824710156126095760405162461bcd60e51b815260040180806020018281038252602681526020018061292c6026913960400191505060405180910390fd5b61261285611978565b612663576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106126a25780518252601f199092019160209182019101612683565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612704576040519150601f19603f3d011682016040523d82523d6000602084013e612709565b606091505b50915091506123698282866127ef565b60008060608a6001600160a01b031688856040518082805190602001908083835b602083106127595780518252601f19909201916020918201910161273a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146127bb576040519150601f19603f3d011682016040523d82523d6000602084013e6127c0565b606091505b509150915081600081146127d3576127db565b815160208301fd5b506105399c9b505050505050505050505050565b606083156127fe575081611d31565b82511561280e5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612858578181015183820152602001612840565b50505050905090810190601f1680156128855780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106128d457805160ff1916838001178555612901565b82800160010185558215612901579182015b828111156129015782518255916020019190600101906128e6565b5061290d929150612911565b5090565b610ba991905b8082111561290d576000815560010161291756fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212203c24ca979017f9d551775eccf224b76d9502484a09eae85788b5426eeb71842764736f6c634300060b0033'

export class L1GatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L1GatewayTester> {
    return super.deploy(overrides || {}) as Promise<L1GatewayTester>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1GatewayTester {
    return super.attach(address) as L1GatewayTester
  }
  connect(signer: Signer): L1GatewayTester__factory {
    return super.connect(signer) as L1GatewayTester__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L1GatewayTesterInterface {
    return new utils.Interface(_abi) as L1GatewayTesterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1GatewayTester {
    return new Contract(address, _abi, signerOrProvider) as L1GatewayTester
  }
}
