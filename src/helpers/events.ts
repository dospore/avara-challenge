export const parseEvent = <T>(log: any, t: EventType): T => {
  return ({
    type: t,
    txnHash: log.transactionHash,
    blockNumber: log.blockNumber,
    blockHash: log.blockHash,
    chainId: log.chainId,
    ...log.args,
  });
};
