import type { SupportedNetwork } from "./web3";

export type Event = Withdraw | Repay | Supply | Borrow;

export enum EventType {
  Repay = "Repay",
  Withdraw = "Withdraw",
  Supply = "Supply",
  Borrow = "Borrow",
}

type BaseType = {
  type: EventType;
  txnHash: string;
  blockNumber: bigint;
  address: string;
  chainId: SupportedNetwork;
};

export type Withdraw = {
  amount: bigint;
  reserve: string;
  to: string;
  user: string;
} & BaseType;

export type Repay = {
  reserve: string;
  user: string;
  repayer: string;
  amount: bigint;
  useATokens: boolean;
} & BaseType;

export type Supply = {
  reserve: string;
  user: string;
  onBehalfOf: string;
  amount: bigint;
  referralCode: string;
} & BaseType;

export type Borrow = {
  amount: bigint;
  borrowRate: bigint;
  onBehalfOf: string;
  reserve: string;
  user: string;
} & BaseType;
