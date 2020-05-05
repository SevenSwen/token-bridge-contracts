// Code generated by protoc-gen-tstypes. DO NOT EDIT.

export interface LogInfo {
  address?: string
  blockHash?: string
  blockNumber?: string
  data?: string
  logIndex?: string
  topics?: Array<string>
  transactionIndex?: string
  transactionHash?: string
}

export interface FindLogsArgs {
  fromHeight?: string
  toHeight?: string
  address?: string
  topics?: Array<string>
}

export interface FindLogsReply {
  logs?: Array<LogInfo>
}

export interface GetMessageResultArgs {
  txHash?: string
}

export interface GetMessageResultReply {
  found?: boolean
  rawVal?: string
  logPreHash?: string
  logPostHash?: string
  logValHashes?: Array<string>
  onChainTxHash?: string
}

export interface GetAssertionCountArgs {}

export interface GetAssertionCountReply {
  assertionCount?: number
}

export interface GetVMInfoArgs {}

export interface GetVMInfoReply {
  vmID?: string
}

export interface CallMessageArgs {
  contractAddress?: string
  sender?: string
  data?: string
}

export interface CallMessageReply {
  rawVal?: string
}

export interface RollupValidatorService {
  GetMessageResult: (r: GetMessageResultArgs) => GetMessageResultReply
  CallMessage: (r: CallMessageArgs) => CallMessageReply
  FindLogs: (r: FindLogsArgs) => FindLogsReply
  GetAssertionCount: (r: GetAssertionCountArgs) => GetAssertionCountReply
  GetVMInfo: (r: GetVMInfoArgs) => GetVMInfoReply
}
