/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Basics, BasicsInterface } from "../Basics";

const _abi = [
  {
    inputs: [],
    name: "connectorID",
    outputs: [
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getEventAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060d98061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063e82eb6fa146037578063eb15f781146069575b600080fd5b603d608c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606f6091565b604051808381526020018281526020019250505060405180910390f35b600090565b6000806001808092508193505050909156fea26469706673582212203dc358378a6611f353917859463eb0673fce5828232c925da92f2c9aca00ec1864736f6c63430007000033";

type BasicsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BasicsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Basics__factory extends ContractFactory {
  constructor(...args: BasicsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Basics> {
    return super.deploy(overrides || {}) as Promise<Basics>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Basics {
    return super.attach(address) as Basics;
  }
  connect(signer: Signer): Basics__factory {
    return super.connect(signer) as Basics__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasicsInterface {
    return new utils.Interface(_abi) as BasicsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Basics {
    return new Contract(address, _abi, signerOrProvider) as Basics;
  }
}
