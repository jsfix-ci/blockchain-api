import { EventBuilder } from '../helpers/EventBuilder'
import { TokenTransactionTypeV2 } from '../resolvers'
import { Transaction } from '../transaction/Transaction'
import { TransactionType } from '../transaction/TransactionType'

export class NftReceived extends TransactionType {
  matches(transaction: Transaction): boolean {
    let isNftExist = false
    let isNftReceived = false
    let userAddress = this.context.userAddress

    for (const transfer of transaction.transfers) {
      if (transfer.tokenType === 'ERC-721') {
        isNftExist = true

        if (transfer.toAddressHash === userAddress) {
          isNftReceived = true
        }

        if (transfer.fromAddressHash === userAddress) {
          isNftReceived = false
        }
      }
    }

    return transaction.transfers.length >= 1 && isNftExist && isNftReceived
  }

  async getEvent(transaction: Transaction) {
    return await EventBuilder.nftTransferEvent(
      transaction,
      TokenTransactionTypeV2.NFT_RECEIVED,
    )
  }

  isAggregatable(): boolean {
    return false
  }
}
