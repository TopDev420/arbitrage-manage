/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  CheckInterface,
  CheckInterfaceInterface,
} from "../CheckInterface";

const _abi = [
  {
    inputs: [],
    name: "isOk",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class CheckInterface__factory {
  static readonly abi = _abi;
  static createInterface(): CheckInterfaceInterface {
    return new utils.Interface(_abi) as CheckInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CheckInterface {
    return new Contract(address, _abi, signerOrProvider) as CheckInterface;
  }
}
