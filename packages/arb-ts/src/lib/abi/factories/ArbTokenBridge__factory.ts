/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { ArbTokenBridge } from '../ArbTokenBridge'

export class ArbTokenBridge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<ArbTokenBridge> {
    return super.deploy(overrides || {}) as Promise<ArbTokenBridge>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): ArbTokenBridge {
    return super.attach(address) as ArbTokenBridge
  }
  connect(signer: Signer): ArbTokenBridge__factory {
    return super.connect(signer) as ArbTokenBridge__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbTokenBridge {
    return new Contract(address, _abi, signerOrProvider) as ArbTokenBridge
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'CustomTokenRegistered',
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
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'MintAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'TokenCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'TokenMigrated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'usedCallHook',
        type: 'bool',
      },
    ],
    name: 'TokenMinted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'withdrawalId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'destination',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
    ],
    name: 'WithdrawToken',
    type: 'event',
  },
  {
    inputs: [],
    name: 'beacon',
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
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2ERC20TokenAddress',
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
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'customL2Token',
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
        name: 'l1Address',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'customTokenRegistered',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ethTokenBridge',
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
        name: '_ethTokenBridge',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_templateERC20',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
    ],
    name: 'isCustomToken',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destination',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'migrate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IArbToken',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'mintAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'deployData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'mintFromL1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'templateERC20',
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
        name: 'l1ERC20',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destination',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50612114806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000d05760003560e01c8063998ea6261162000087578063998ea62614620002ea5780639de96c5c14620002f4578063a7e28d481462000325578063c75e15ca146200034e578063da0c8cd21462000377578063daef42fc14620003a0578063db70cf6e14620003aa57620000d0565b80630b620b8114620000d557806334fcff0c1462000126578063485cc95514620001675780634a33080f146200019857806359659e901462000287578063804bf3eb14620002ad575b600080fd5b6200011460048036036080811015620000ed57600080fd5b506001600160a01b038135811691602081013582169160408201351690606001356200047a565b60408051918252519081900360200190f35b62000165600480360360808110156200013e57600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135620005a7565b005b62000165600480360360408110156200017f57600080fd5b506001600160a01b0381358116916020013516620007d6565b62000165600480360360c0811015620001b057600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b811115620001f357600080fd5b8201836020820111156200020657600080fd5b803590602001918460018302840111600160201b831117156200022857600080fd5b919390929091602081019035600160201b8111156200024657600080fd5b8201836020820111156200025957600080fd5b803590602001918460018302840111600160201b831117156200027b57600080fd5b509092509050620008e4565b6200029162000fb3565b604080516001600160a01b039092168252519081900360200190f35b620002d660048036036020811015620002c557600080fd5b50356001600160a01b031662000fc2565b604080519115158252519081900360200190f35b6200029162000fe2565b62000165600480360360408110156200030c57600080fd5b506001600160a01b038135811691602001351662000ff1565b62000291600480360360208110156200033d57600080fd5b50356001600160a01b031662001098565b62000291600480360360208110156200036657600080fd5b50356001600160a01b0316620010c0565b62000291600480360360208110156200038f57600080fd5b50356001600160a01b0316620010e2565b62000291620010fd565b62000165600480360360a0811015620003c257600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b8111156200040357600080fd5b8201836020820111156200041657600080fd5b803590602001918460018302840111600160201b831117156200043857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506200110c945050505050565b600080620004888662001098565b90506200049e816001600160a01b03166200137b565b620004cb57620004ae86620010c0565b9050620004c4816001600160a01b03166200137b565b620004cb57fe5b336001600160a01b03821614620005145760405162461bcd60e51b8152600401808060200182810382526031815260200180620020516031913960400191505060405180910390fd5b806001600160a01b03166374f4f54786856040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156200057557600080fd5b505af11580156200058a573d6000803e3d6000fd5b505050506200059b86858562001381565b9150505b949350505050565b620005b28462000fc2565b620005ef5760405162461bcd60e51b8152600401808060200182810382526029815260200180620020006029913960400191505060405180910390fd5b620005fa84620010c0565b6001600160a01b0316336001600160a01b0316146200064b5760405162461bcd60e51b8152600401808060200182810382526032815260200180620020826032913960400191505060405180910390fd5b604080516374f4f54760e01b81526001600160a01b038516600482015260248101839052905133916374f4f54791604480830192600092919082900301818387803b1580156200069a57600080fd5b505af1158015620006af573d6000803e3d6000fd5b505050506000620006c08562001098565b9050620006d6816001600160a01b03166200137b565b620007135760405162461bcd60e51b8152600401808060200182810382526028815260200180620020296028913960400191505060405180910390fd5b806001600160a01b0316638c2a993e84846040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156200077457600080fd5b505af115801562000789573d6000803e3d6000fd5b50506040805185815290516001600160a01b038088169450891692507f39a54d7a71ca31798e3d96be34be0322c214765144b2b52e142d763c6c7b86b49181900360200190a35050505050565b6001600160a01b03821662000832576040805162461bcd60e51b815260206004820152601a60248201527f4c3120706169722063616e277420626520616464726573732030000000000000604482015290519081900360640190fd5b6004546001600160a01b03161562000880576040805162461bcd60e51b815260206004820152600c60248201526b185b1c9958591e481a5b9a5d60a21b604482015290519081900360640190fd5b600380546001600160a01b038084166001600160a01b0319928316179092556004805492851692909116919091179055604051620008c16020820162001790565b601f1982820381018352601f909101166040528051602091909101206002555050565b6004546001600160a01b0316331462000934576040805162461bcd60e51b815260206004820152600d60248201526c27a7262cafa2aa242fa820a4a960991b604482015290519081900360640190fd5b6000620009418962001098565b905062000957816001600160a01b03166200137b565b62000c47578315620009cc576000620009a78a87878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506200152392505050565b9050816001600160a01b0316816001600160a01b031614620009c557fe5b5062000c47565b620009d78962000fc2565b1562000c3257620009e889620010c0565b9050620009fe816001600160a01b03166200137b565b62000c2c57604080516020808201819052601b828401527f54656d706f72617279204d69677261746561626c6520546f6b656e000000000060608381019190915283518084038201815260808401855260a08401839052600360c08501526215135560ea1b60e0808601919091528551808603909101815261010085018652601261012080870191909152865180870390910181526101408601909652610160850183815282516101c087015282519396929591949293909283926101808101926101a08201926101e09092019189019080838360005b8381101562000aef57818101518382015260200162000ad5565b50505050905090810190601f16801562000b1d5780820380516001836020036101000a031916815260200191505b50848103835286518152865160209182019188019080838360005b8381101562000b5257818101518382015260200162000b38565b50505050905090810190601f16801562000b805780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b8381101562000bb557818101518382015260200162000b9b565b50505050905090810190601f16801562000be35780820380516001836020036101000a031916815260200191505b5096505050505050506040516020818303038152906040529050600062000c0b8b8362001523565b9050826001600160a01b0316816001600160a01b03161462000c2957fe5b50505b62000c47565b62000c3f89898862001381565b505062000fa9565b80821562000ec1576000306001600160a01b031663db70cf6e838a8d8d8a8a6040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001868152602001856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b03168152602001806020018281038252848482818152602001925080828437600081840152601f19601f820116905080830192505050975050505050505050600060405180830381600087803b15801562000d1a57600080fd5b505af192505050801562000d2c575060015b62000dc957816001600160a01b0316638c2a993e8b8a6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801562000d9257600080fd5b505af192505050801562000da4575060015b62000dc05762000db68b8b8a62001381565b5050505062000fa9565b50600062000dcd565b5060015b8062000dda578962000ddc565b885b604080516001600160a01b038e81168252602082018c90526001828401529151928216928d8316928716917ff0da87d6e758643ce4fd6c31a9fb9ce64b7288ac33e94c2bef66db69a1876329919081900360600190a4886001600160a01b03168a6001600160a01b03167fe934ad33409d1a25da34f3e31354e20013f314d227c3d53952d3e130ece06011838b89896040518085151515158152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a35062000fa6565b806001600160a01b0316638c2a993e89896040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801562000f2257600080fd5b505af192505050801562000f34575060015b62000f4f5762000f468a8a8962001381565b50505062000fa9565b604080516001600160a01b038c81168252602082018a90526000828401529151828b16928c811692908616917ff0da87d6e758643ce4fd6c31a9fb9ce64b7288ac33e94c2bef66db69a18763299181900360600190a45b50505b5050505050505050565b6003546001600160a01b031690565b6001600160a01b0390811660009081526020819052604090205416151590565b6003546001600160a01b031681565b6004546001600160a01b0316331462001041576040805162461bcd60e51b815260206004820152600d60248201526c27a7262cafa2aa242fa820a4a960991b604482015290519081900360640190fd5b6001600160a01b0382811660008181526020819052604080822080546001600160a01b0319169486169485179055517fb49c352f15c140b29f8d25a3b6a611ece53afb8bdbe65ecd185d87b2696031789190a35050565b600354600254600091620010ba9184916001600160a01b031690309062001697565b92915050565b600354600254600091620010ba9184916001600160a01b0316903090620016da565b6000602081905290815260409020546001600160a01b031681565b6004546001600160a01b031681565b33301462001161576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b62001175826001600160a01b03166200137b565b620011c7576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b846001600160a01b0316638c2a993e83866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156200122857600080fd5b505af11580156200123d573d6000803e3d6000fd5b5050505060006109c45a039050805a116200128a5760405162461bcd60e51b815260040180806020018281038252602b815260200180620020b4602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101562001309578181015183820152602001620012ef565b50505050905090810190601f168015620013375780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b1580156200135957600080fd5b5087f11580156200136e573d6000803e3d6000fd5b5050505050505050505050565b3b151590565b60048054600154604080516024808201939093526001600160a01b0388811660448084019190915288821660648481019190915260848085018a90528551808603909101815260a490940185526020840180516001600160e01b031663e0a345fd60e01b17815285516349460b4d60e11b81529790931697870188815295870194855283519187019190915282516000978897929663928c169a9691959490939192918801918083838c5b83811015620014465781810151838201526020016200142c565b50505050905090810190601f168015620014745780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b1580156200149557600080fd5b505af1158015620014aa573d6000803e3d6000fd5b505050506040513d6020811015620014c157600080fd5b5051600180548101908190556040805183815260208101879052815193945091926001600160a01b0380891693908a16927f5f46021d14caa00be09900ec076911cd350172076472afa1697c672b8035c17c92918290030190a4949350505050565b6003546000908190620015419085906001600160a01b0316620016f8565b9050600081604051620015549062001790565b8190604051809103906000f590508015801562001575573d6000803e3d6000fd5b509050806001600160a01b031663189db7d286866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015620015ef578181015183820152602001620015d5565b50505050905090810190601f1680156200161d5780820380516001836020036101000a031916815260200191505b509350505050600060405180830381600087803b1580156200163e57600080fd5b505af115801562001653573d6000803e3d6000fd5b50506040516001600160a01b038085169350881691507fd5f9bdf12adf29dab0248c349842c3822d53ae2bb4f36352f301630d018c813990600090a3949350505050565b6001600160a01b038085166000908152602081905260408120549091168015620016c35790506200059f565b620016d186868686620016da565b9150506200059f565b600080620016e98686620016f8565b90506200059b8184866200173a565b604080516001600160601b0319606094851b81166020808401919091529390941b90931660348401528051602881850301815260489093019052815191012090565b604080516001600160f81b031960208083019190915260609390931b6001600160601b03191660218201526035810194909452605580850193909352805180850390930183526075909301909252805191012090565b610861806200179f8339019056fe608060405234801561001057600080fd5b50336001600160a01b03166359659e906040518163ffffffff1660e01b815260040160206040518083038186803b15801561004a57600080fd5b505afa15801561005e573d6000803e3d6000fd5b505050506040513d602081101561007457600080fd5b5051604080516020810182526000815281517f656970313936372e70726f78792e626561636f6e00000000000000000000000081529151918290036014019091206000805160206107a1833981519152600019909101146100d157fe5b6100e482826001600160e01b036100eb16565b505061049a565b6100fe8261024960201b6100311760201c565b6101395760405162461bcd60e51b81526004018080602001828103825260258152602001806107e26025913960400191505060405180910390fd5b6101b1826001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561017557600080fd5b505afa158015610189573d6000803e3d6000fd5b505050506040513d602081101561019f57600080fd5b5051610249602090811b61003117901c565b6101ec5760405162461bcd60e51b815260040180806020018281038252603481526020018061082d6034913960400191505060405180910390fd5b6000805160206107a1833981519152828155815115610244576102426102196001600160e01b0361024f16565b836040518060600160405280602181526020016107c1602191396102cb60201b6100371760201c565b505b505050565b3b151590565b60006102626001600160e01b036103e316565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561029a57600080fd5b505afa1580156102ae573d6000803e3d6000fd5b505050506040513d60208110156102c457600080fd5b5051905090565b60606102df846001600160e01b0361024916565b61031a5760405162461bcd60e51b81526004018080602001828103825260268152602001806108076026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106103585780518252601f199092019160209182019101610339565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146103b8576040519150601f19603f3d011682016040523d82523d6000602084013e6103bd565b606091505b5090925090506103d78282866001600160e01b036103f616565b925050505b9392505050565b6000805160206107a18339815191525490565b606083156104055750816103dc565b8251156104155782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561045f578181015183820152602001610447565b50505050905090810190601f16801561048c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6102f8806104a96000396000f3fe60806040523661001357610011610017565b005b6100115b61001f61002f565b61002f61002a61013c565b6101af565b565b3b151590565b606061004284610031565b61007d5760405162461bcd60e51b815260040180806020018281038252602681526020018061029d6026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106100bb5780518252601f19909201916020918201910161009c565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461011b576040519150601f19603f3d011682016040523d82523d6000602084013e610120565b606091505b50915091506101308282866101d3565b925050505b9392505050565b6000610146610277565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561017e57600080fd5b505afa158015610192573d6000803e3d6000fd5b505050506040513d60208110156101a857600080fd5b5051905090565b3660008037600080366000845af43d6000803e8080156101ce573d6000f35b3d6000fd5b606083156101e2575081610135565b8251156101f25782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561023c578181015183820152602001610224565b50505050905090810190601f1680156102695780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50549056fe416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374a26469706673582212201d76e40c8b547001f2679ed8bea580bcbb5d716c3d42ba31a888159329d0181364736f6c634300060b0033a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50426561636f6e50726f78793a2066756e6374696f6e2063616c6c206661696c6564426561636f6e50726f78793a20626561636f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374426561636f6e50726f78793a20626561636f6e20696d706c656d656e746174696f6e206973206e6f74206120636f6e74726163744e6565647320746f206861766520637573746f6d20746f6b656e20696d706c656d656e746174696f6e4c3220637573746f6d20746f6b656e206d75737420616c7265616479206265206465706c6f79656457697468647261772063616e206f6e6c79206265207472696767657265642062792065787065637465642073656e6465724d6967726174696f6e2073686f756c642062652063616c6c656420627920657263323020746f6b656e20636f6e74726163744d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f77a26469706673582212200c4cd1db7a7297e99b6b4d6ed5d26d68eec8d678e6f624d68e130e8cba67010964736f6c634300060b0033'
