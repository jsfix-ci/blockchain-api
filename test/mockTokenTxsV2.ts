export const TEST_DOLLAR_ADDRESS = '0x0000000000000000000000000000000000dollaR'
export const TEST_GOLD_ADDRESS = '0x000000000000000000000000000000000000golD' // Note upper and lower case letters

const mockTokenTxs = {
  data: {
    tokenTransferTxs: {
      pageInfo: {
        startCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
        endCursor: 'YXJyYXljb25uZWN0aW9uOjI',
        hasNextPage: true,
        hasPreviousPage: false,
      },
      edges: [
        // Exchange cUSD -> cGLD (TX 1)
        {
          node: {
            blockNumber: 90608,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x6a61e1e693c765cbab7e02a500665f2e13ee46df',
                    toAddressHash: '0x0000000000000000000000000000000000007E57',
                    tokenAddress: TEST_GOLD_ADDRESS,
                    value: '1000000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xf1235cb0d3703e7cc2473fb4e214fbc7a9ff77cc',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '10000000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0xf1235cb0d3703e7cc2473fb4e214fbc7a9ff77cc',
                    toAddressHash: '0x0000000000000000000000000000000000000000',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '10000000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '1991590000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xdd1f519f63423045f526b8c83edc0eb4ba6434a4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '7966360000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xf9720b2ff2cf69f8a50dc5bec5545ba883e0ae3f',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '0',
                  },
                },
              ],
            },
            feeCurrency: '0xa561131a1c8ac25925fb848bca45a74af61e5a38',
            feeToken: 'cUSD',
            gasPrice: '50000000000',
            gasUsed: '199159',
            gatewayFee: '0',
            gatewayFeeRecipient: '0xf9720b2ff2cf69f8a50dc5bec5545ba883e0ae3f',
            timestamp: '2019-08-21T00:03:17.000000Z',
            transactionHash:
              '0xba620de2d812f299d987155eb5dca7abcfeaf154f5cfd99cb1773452a7df3d7a',
          },
        },
        // Exchange cUSD -> cGLD (TX 2)
        {
          node: {
            blockNumber: 90608,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '26801514493125',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x2eb79345089ca6f703f3b3c4235315cbeaad6d3c',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '107206057972500',
                  },
                },
              ],
            },
            feeToken: 'cUSD',
            gasPrice: '1374648125',
            gasUsed: '97485',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            input:
              '0x095ea7b3000000000000000000000000f1235cb0d3703e7cc2473fb4e214fbc7a9ff77cc0000000000000000000000000000000000000000000000008ac7230489e80000',
            timestamp: '2019-08-21T00:04:16.000000Z',
            transactionHash:
              '0xa9569567c48c547cc3712d8caa113d7d276092ee8bcf93416ac4622745a7ae52',
          },
        },
        // Exchange cGLD -> cUSD (TX1)
        {
          node: {
            blockNumber: 90637,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x6a61e1e693c765cbab7e02a500665f2e13ee46df',
                    tokenAddress: TEST_GOLD_ADDRESS,
                    value: '1000000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000000000',
                    toAddressHash: '0x0000000000000000000000000000000000007E57',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '10000000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '2175980000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x30d060f129817c4de5fbc1366d53e19f43c8c64f',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '8703920000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xfcf7fc2f0c1f06fb6314f9fa2a53e9805aa863e0',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '0',
                  },
                },
              ],
            },
            feeCurrency: '0xa561131a1c8ac25925fb848bca45a74af61e5a38',
            feeToken: 'cUSD',
            gasPrice: '50000000000',
            gasUsed: '217598',
            gatewayFee: '0',
            gatewayFeeRecipient: '0xfcf7fc2f0c1f06fb6314f9fa2a53e9805aa863e0',
            timestamp: '2019-08-21T00:05:26.000000Z',
            transactionHash:
              '0x961403536006f9c120c23900f94da59dbf43edf10eb3569b448665483bab77b2',
          },
        },
        // Exchange cGLD -> cUSD (TX2)
        {
          node: {
            blockNumber: 90637,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '29106906186364',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xaed733bb20921b682eb35bb89bd398f604ccd5bc',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '116427624745456',
                  },
                },
              ],
            },
            feeToken: 'cUSD',
            gasPrice: '1516332190',
            gasUsed: '95978',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            input:
              '0x095ea7b3000000000000000000000000f1235cb0d3703e7cc2473fb4e214fbc7a9ff77cc0000000000000000000000000000000000000000000000000de0B6b3a7640000',
            timestamp: '2019-08-21T00:06:26.000000Z',
            transactionHash:
              '0x376bf768df3132b789057030b8a0fdfc286a086d9d62a0ad271838fd2266d28c',
          },
        },
        // Dollars sent
        {
          node: {
            blockNumber: 90719,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x8b7649116f169d2d2aebb6ea1a77f0baf31f2811',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '150000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '1131780000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x050f34537f5b2a00b9b9c752cb8500a3fce3da7d',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '4527120000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '10000000000000000',
                  },
                },
              ],
            },
            feeCurrency: '0xa561131a1c8ac25925fb848bca45a74af61e5a38',
            feeToken: 'cUSD',
            gasPrice: '50000000000',
            gasUsed: '113178',
            gatewayFee: '10000000000000000',
            gatewayFeeRecipient: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
            timestamp: '2019-08-21T00:11:16.000000Z',
            transactionHash:
              '0x21dd2c18ae6c80d61ffbddaa073f7cde7bbfe9436fdf5059b506f1686326a2fb',
          },
        },
        // Dollars sent to the governance contract (edge case)
        {
          node: {
            blockNumber: 90791,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '150000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '1131780000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x050f34537f5b2a00b9b9c752cb8500a3fce3da7d',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '4527120000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '10000000000000000',
                  },
                },
              ],
            },
            feeCurrency: '0xa561131a1c8ac25925fb848bca45a74af61e5a38',
            feeToken: 'cUSD',
            gasPrice: '50000000000',
            gasUsed: '113178',
            gatewayFee: '10000000000000000',
            gatewayFeeRecipient: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
            timestamp: '2019-08-21T00:12:16.000000Z',
            transactionHash:
              '0x21dd2c18ae6c80d61ffbddaa073f7cde7bbfe9436fdf5059b506f1686326a2ff',
          },
        },
        // Dollars sent to the gateway fee recipient (edge case)
        {
          node: {
            blockNumber: 90792,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '150000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '1131780000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x050f34537f5b2a00b9b9c752cb8500a3fce3da7d',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '4527120000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '10000000000000000',
                  },
                },
              ],
            },
            feeCurrency: '0xa561131a1c8ac25925fb848bca45a74af61e5a38',
            feeToken: 'cUSD',
            gasPrice: '50000000000',
            gasUsed: '113178',
            gatewayFee: '10000000000000000',
            gatewayFeeRecipient: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
            timestamp: '2019-08-21T00:13:16.000000Z',
            transactionHash:
              '0x21dd2c18ae6c80d61ffbddaa073f7cde7bbfe9436fdf5059b506f1686326afff',
          },
        },
        // Dollars received
        {
          node: {
            blockNumber: 117453,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0xf4314cb9046bece6aa54bb9533155434d0c76909',
                    fromAccountHash:
                      '0xf4314cb9046bece6aa54bb9533155434d0c76910', // this should go to the `account` field
                    toAddressHash: '0x0000000000000000000000000000000000007E57',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '10000000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0xf4314cb9046bece6aa54bb9533155434d0c76909',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    toAccountHash: null,
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '1297230000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0xf4314cb9046bece6aa54bb9533155434d0c76909',
                    toAddressHash: '0x2a43f97f8bf959e31f69a894ebd80a88572c8553',
                    toAccountHash: null,
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '5188920000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0xf4314cb9046bece6aa54bb9533155434d0c76909',
                    toAddressHash: '0xfcf7fc2f0c1f06fb6314f9fa2a53e9805aa863e0',
                    toAccountHash: null,
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '0',
                  },
                },
              ],
            },
            feeCurrency: '0xa561131a1c8ac25925fb848bca45a74af61e5a38',
            feeToken: 'cUSD',
            gasPrice: '50000000000',
            gasUsed: '129723',
            gatewayFee: '0',
            gatewayFeeRecipient: '0xfcf7fc2f0c1f06fb6314f9fa2a53e9805aa863e0',
            timestamp: '2019-08-22T13:19:06.000000Z',
            transactionHash:
              '0xe70bf600802bae7a0d42d89d54b8cdb977a8c5a34a239ec73597c7abcab74536',
          },
        },
        // Gold sent
        {
          node: {
            blockNumber: 117451,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xf4314cb9046bece6aa54bb9533155434d0c76909',
                    toAccountHash: '0xf4314cb9046bece6aa54bb9533155434d0c76910', // this should go to the `account` field
                    tokenAddress: TEST_GOLD_ADDRESS,
                    value: '1000000000000000000',
                  },
                },
              ],
            },
            feeCurrency: null,
            feeToken: '', // empty feeToken should be treated as cGLD
            gasPrice: '5000000000',
            gasUsed: '47426',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            timestamp: '2019-08-22T13:36:40.000000Z',
            transactionHash:
              '0xc6689ed516e8b114e875d682bbf7ba318ea16841711d97ce473f20da289435be',
          },
        },
        // Gold sent (with gateway fee)
        {
          node: {
            blockNumber: 117451,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xf4314cb9046bece6aa54bb9533155434d0c76909',
                    tokenAddress: TEST_GOLD_ADDRESS,
                    value: '1000000000000000000',
                  },
                },
              ],
            },
            feeCurrency: null,
            feeToken: null, // empty feeToken should be treated as cGLD
            gasPrice: '5000000000',
            gasUsed: '47426',
            gatewayFee: '10000000000',
            gatewayFeeRecipient: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
            timestamp: '2019-08-22T13:37:40.000000Z',
            transactionHash:
              '0xc6689ed516e8b114e875d682bbf7ba318ea16841711d97ce473f20da289435bd',
          },
        },
        // Gold received
        {
          node: {
            blockNumber: 117451,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0xf4314cb9046bece6aa54bb9533155434d0c76909',
                    toAddressHash: '0x0000000000000000000000000000000000007E57',
                    tokenAddress: TEST_GOLD_ADDRESS,
                    value: '10000000000000000000',
                  },
                },
              ],
            },
            feeCurrency: null,
            feeToken: 'CELO',
            gasPrice: '5000000000',
            gasUsed: '47426',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            timestamp: '2019-08-22T13:53:20.000000Z',
            transactionHash:
              '0xe8fe81f455eb34b672a8d8dd091472f1ae8d4d204817f0bcbb7a13486b9b5605',
          },
        },
        // Faucet received
        {
          node: {
            blockNumber: 117451,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000f40c37',
                    toAddressHash: '0x0000000000000000000000000000000000007E57',
                    tokenAddress: TEST_GOLD_ADDRESS,
                    value: '5000000000000000000',
                  },
                },
              ],
            },
            feeCurrency: null,
            feeToken: 'CELO',
            gasPrice: '5000000000',
            gasUsed: '47426',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            timestamp: '2019-08-22T14:10:00.000000Z',
            transactionHash:
              '0xf6856169eb7bf78211babc312028cddf3dad2761799428ab6e4fcf297a27fe09',
          },
        },
        // Escrow sent (TX 1)
        {
          node: {
            blockNumber: 117451,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x0000000000000000000000000000000000a77327',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '118829058457955309',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '91454741122586',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x2765162cc4ad257a956f0411675bc45257e6cb30',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '365818964490344',
                  },
                },
              ],
            },
            feeToken: 'cUSD',
            gasPrice: '1373511910',
            gasUsed: '332923',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            input:
              '0x702cb75d155a1584225c4795ce22348f806b053711a7744971bb9186f72b8df66230d8c0000000000000000000000000765de816845861e75a25fca122bb6898b8b1282a00000000000000000000000000000000000000000000000001a62a662a616bed00000000000000000000000000000000000000000000000000000000000151800000000000000000000000007e86109bbac0b29d408dfa003e45ec92e1e677cf0000000000000000000000000000000000000000000000000000000000000003',
            timestamp: '2019-08-22T14:26:38.000000Z',
            transactionHash:
              '0xf0592e026656f84cc17672fb08f5723deb8426787c2865aa763e859d10e85234',
          },
        },
        // Escrow sent (TX 2)
        {
          node: {
            blockNumber: 117451,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '26782658137854',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x90684bc3ded2f69d8853d791bdc57eea0a84c9d0',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '107130632551416',
                  },
                },
              ],
            },
            feeToken: 'cUSD',
            gasPrice: '1373511910',
            gasUsed: '97497',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            input:
              '0x095ea7b30000000000000000000000000000000000000000000000000000000000a7732700000000000000000000000000000000000000000000000001a62a662a616bed',
            timestamp: '2019-08-22T14:27:39.000000Z',
            transactionHash:
              '0xfe39014b70746259a1dc4cc99c67acbb986d68f32cdb42e68a2678082a1695dc',
          },
        },
        // Escrow MTW
        {
          node: {
            blockNumber: 6203333,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000a77327',
                    fromAccountHash: null,
                    toAccountHash: null,
                    toAddressHash: '0xc85d6ccf22499898ea76aa8b7ba89a7ceddbe434',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '20000000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0xc85d6ccf22499898ea76aa8b7ba89a7ceddbe434',
                    fromAccountHash: null,
                    toAddressHash: '0x566ce6b765f038a98b5753ced0a65fd49aa0a07c',
                    toAccountHash: '0xc85d6ccf22499898ea76aa8b7ba89a7ceddbe434',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '20000000000000000000',
                  },
                },
              ],
            },
            feeToken: 'CELO',
            gasPrice: '350000000',
            gasUsed: '134090',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            input:
              '0xea36cbc5000000000000000000000000c85d6ccf22499898ea76aa8b7ba89a7ceddbe434000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000001b5b8810ad4a549eb9420e8db333fa0df7eb68ae912a973511498980e81758fb2d4d19effe750e259e716324351f11623f6b694682e4eec89ec16f69bf9e011ffc00000000000000000000000000000000000000000000000000000000000002a4c23bfbf7000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000002000000000000000000000000f4fa51472ca8d72af678975d9f8795a504e7ada5000000000000000000000000765de816845861e75a25fca122bb6898b8b1282a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c83e68d5d7000000000000000000000000fd68c8da806dbb339a4105ca06e22db4e0ad90d0000000000000000000000000000000000000000000000000000000000000001b0d94ccdf3600d80b5b33d77c067bb8a3f0f202a934e682269e18ba5384c6b07a2df73ac19a3c68ed687f3e028218cf3439fabc6a0fd6a423ee41a495dc45f0aaa9059cbb000000000000000000000000566ce6b765f038a98b5753ced0a65fd49aa0a07c000000000000000000000000000000000000000000000001158e460913d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000084000000000000000000000000000000000000000000000000000000000000004400000000000000000000000000000000000000000000000000000000',
            timestamp: '2021-04-16T17:10:19.000000Z',
            transactionHash:
              '0x8323ad9ea0961221e146aa086b9cda858acbf7a4058a23061c9e0d52a0e2d9b1',
          },
        },
        // Verification fee sent (no gateway fee recipient)
        {
          node: {
            blockNumber: 117451,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x0000000000000000000000000000000000a77357',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '200000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '1590510000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xae1ec841923811219b98aceb1db297aade2f46f3',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '6362040000000000',
                  },
                },
              ],
            },
            feeCurrency: '0xa561131a1c8ac25925fb848bca45a74af61e5a38',
            feeToken: 'cUSD',
            gasPrice: '50000000000',
            gasUsed: '159051',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            timestamp: '2021-04-16T17:11:19.000000Z',
            transactionHash:
              '0xcc2120e5d050fd68284dc01f6464b2ed8f7358ca80fccb20967af28eb7d79160',
          },
        },
        // Contract call with no true token transfers (just fees)
        {
          node: {
            blockNumber: 192467,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '990330000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x456f41406b32c45d59e539e4bba3d7898c3584da',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '3961320000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '0',
                  },
                },
              ],
            },
            feeCurrency: '0xa561131a1c8ac25925fb848bca45a74af61e5a38',
            feeToken: 'cUSD',
            gasPrice: '50000000000',
            gasUsed: '99033',
            gatewayFee: '0',
            gatewayFeeRecipient: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
            timestamp: '2021-04-16T17:12:19.000000Z',
            transactionHash:
              '0xfa658a2be84e9ef0ead58ea2d8e2d3c9160bf0769451b5dc971c2d82c9c33c42',
          },
        },
        // Dollars sent with one-time encryption fee (TX 1)
        {
          node: {
            blockNumber: 1487877,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x0000000000000000000000000000000000007E57',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '1000000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '10303800000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x456f41406b32c45d59e539e4bba3d7898c3584da',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '41215200000000',
                  },
                },
              ],
            },
            feeToken: 'cUSD',
            gasPrice: '500000000',
            gasUsed: '103038',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            input:
              '0xe1d6aceb0000000000000000000000003a42be9c0ce3a98f5b3b0a3f2b9e392126c988fb0000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000',
            timestamp: '2021-05-16T17:10:10.000000Z',
            transactionHash:
              '0x34e6e74bc01c7112817e669a8057ae7f4c1ed49d8de824bea8ecbdb945b41345',
          },
        },
        // Dollars sent with one-time encryption fee (TX 2)
        {
          node: {
            blockNumber: 1487875,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '18842400000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x3a42be9c0ce3a98f5b3b0a3f2b9e392126c988fb',
                    toAddressHash: '0xb4e92c94a2712e98c020a81868264bde52c188cb',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '75369600000000',
                  },
                },
              ],
            },
            feeToken: 'cUSD',
            gasPrice: '500000000',
            gasUsed: '188424',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            input:
              '0x90b12b4700000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000007E57000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000210362915ae5207a3cc69bc98fe02579203702f53641ab91f60aa8756f494326a56000000000000000000000000000000000000000000000000000000000000000',
            timestamp: '2021-05-16T17:17:17.000000Z',
            transactionHash:
              '0x1a8c50902bd67443f9fcc1842d20dca5d1b9e6dd4a2f83bd214c8d33cb83f253',
          },
        },
        // Unknown token sent
        {
          node: {
            blockNumber: 90711,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x8b7649116f169d2d2aebb6ea1a77f0baf31f2811',
                    tokenAddress: 'unknownAddress',
                    value: '150000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: 'unknownAddress',
                    value: '1131780000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x050f34537f5b2a00b9b9c752cb8500a3fce3da7d',
                    tokenAddress: 'unknownAddress',
                    value: '4527120000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
                    tokenAddress: 'unknownAddress',
                    value: '10000000000000000',
                  },
                },
              ],
            },
            feeCurrency: '0xa561131a1c8ac25925fb848bca45a74af61e5a38',
            feeToken: 'cUSD',
            gasPrice: '50000000000',
            gasUsed: '113178',
            gatewayFee: '10000000000000000',
            gatewayFeeRecipient: '0x6a0edf42f5e618bee697e7718fa05efb1ea5d11c',
            timestamp: '2019-08-21T00:11:16.000000Z',
            transactionHash:
              '0x21dd2c18ae6c80d61ffbddaa073f7cde7bbfe9436fdf5059b506f1686326a2fb',
          },
        },
        // Unknown token exchange
        {
          node: {
            blockNumber: 90605,
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAddressHash:
                      '0x6a61e1e693c765cbab7e02a500665f2e13ee46df',
                    toAddressHash: '0x0000000000000000000000000000000000007E57',
                    tokenAddress: 'unknownAddress',
                    value: '1000000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xf1235cb0d3703e7cc2473fb4e214fbc7a9ff77cc',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '10000000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0xf1235cb0d3703e7cc2473fb4e214fbc7a9ff77cc',
                    toAddressHash: '0x0000000000000000000000000000000000000000',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '10000000000000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xa12a699c641cc875a7ca57495861c79c33d293b4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '1991590000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xdd1f519f63423045f526b8c83edc0eb4ba6434a4',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '7966360000000000',
                  },
                },
                {
                  node: {
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0xf9720b2ff2cf69f8a50dc5bec5545ba883e0ae3f',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    value: '0',
                  },
                },
              ],
            },
            feeCurrency: '0xa561131a1c8ac25925fb848bca45a74af61e5a38',
            feeToken: 'cUSD',
            gasPrice: '50000000000',
            gasUsed: '199159',
            gatewayFee: '0',
            gatewayFeeRecipient: '0xf9720b2ff2cf69f8a50dc5bec5545ba883e0ae3f',
            timestamp: '2019-08-21T00:03:17.000000Z',
            transactionHash:
              '0xba620de2d812f299d987155eb5dca7abcfeaf154f5cfd99cb1773452a7df3d7a',
          },
        },
        // NFT received event
        {
          node: {
            blockNumber: 14203346,
            feeToken: 'CELO',
            gasPrice: '500000000',
            gasUsed: '67688',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            input:
              '0xafd76a0b000000000000000000000000f53a7a9a5de7ce39ef259c86fd6128ed045bf01a000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000010000000000000000000000006cff0cae0aaec42198d5c59d63d211c0a36a10b60000000000000000000000000000000000000000000000000000000000000006',
            timestamp: '2022-07-24T17:42:20.000000Z',
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAccountHash:
                      '0xbf0c45b20f1e78675fe7b911adb2fdc7309dc0d9',
                    fromAddressHash:
                      '0xbf0c45b20f1e78675fe7b911adb2fdc7309dc0d9',
                    id: 'Q2Vsb1RyYW5zZmVyOnsibG9nX2luZGV4IjoxLCJ0cmFuc2FjdGlvbl9oYXNoIjoiMHhjMGI2Y2I3NzNlMmQ2MmMwNjVhM2RkOTZkZTU0YzY2OWYzNzdiZmI2ZTJjYTUxOTExZWE3YjI3ZTk1MjNmYjBkIn0=',
                    toAccountHash: '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x0000000000000000000000000000000000007E57',
                    token: 'ATLAS',
                    tokenAddress: '0x6cff0cae0aaec42198d5c59d63d211c0a36a10b6',
                    tokenType: 'ERC-721',
                    value: null,
                  },
                },
              ],
            },
            transactionHash:
              '0xc0b6cb773e2d62c065a3dd96de54c669f377bfb6e2ca51911ea7b27e9523fb0d',
          },
        },
        // NFT sent event
        {
          node: {
            blockNumber: 14012341,
            feeToken: 'CELO',
            gasPrice: '500000000',
            gasUsed: '442476',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            input:
              '0xba84775900000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000280000000000000000000000000000000000000000000000000000000000000062000000000000000000000000000000000000000000000000000000000000006a00000000000000000000000000d29c22130c178633a5f7bb5b42ffabc6d4f6ef800000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022b1c8c1227a000000000000000000000000000000000000000000000000000000000002540be4000cf7413c2ff9c4581451f5590051b7681e142ac136fb9201452ee6e5cedc88150000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000001ecd77075f7504ba849d47dce4cdc9695f1fe942000000000000000000000000000000000000000000000000000000000000077f0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000d7332f9c15702f86f85373567098bc2008d009c848f91d126b31941be14beea4000000000000000000000000660c8251ca9ee617621ce4d3ca3c95e1a57ff67e0000000000000000000000000000000000000000000000000000000062cd9978cf45f2b9f72eca7e3287e5daea058c4ac9d12c57bf23575562b5c95e6288995c000000000000000000000000000000000000000000000000000000000012a70c000000000000000000000000000000000000000000000000000000000000000100000000000000000000000029ec1052d840b353b19f57b5bbe8949b70567b9c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022b1c8c1227a0000000000000000000000000000000000000000000000000000000000000000c35000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000028000000000000000000000000000000000000000000000000000000002540be40000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000061a80000000000000000000000000000000000000000000000000000000000004e200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d3cca77cd6dc2794f431ae435323dbe6f9bd82c30000000000000000000000005c67e1d32d7911ff064168f809bffabbb55a49930000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000001ecd77075f7504ba849d47dce4cdc9695f1fe942000000000000000000000000000000000000000000000000000000000000077f0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041628ce582977c5384a69824e7b9dd46dbd7b3f30cfd2bf8c3f0276c640a857ec4356a46080eb2f826be7402d3fd90f901eb86a742f10663b0bba781a722a0acd71b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000410fd585de77b94b74263cd8645a871bb590aac890529b0de699f017dd49ee705458c2cbc983c6ab9d2b3719cafd1cf1b969487cee937a05b4f8ba1d5f8f172a521c00000000000000000000000000000000000000000000000000000000000000',
            timestamp: '2022-07-12T15:50:46.000000Z',
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAccountHash: null,
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    id: 'Q2Vsb1RyYW5zZmVyOnsibG9nX2luZGV4IjoyLCJ0cmFuc2FjdGlvbl9oYXNoIjoiMHhjM2E2NjI5N2UyNmE3MDc0YWIwMzY3ZGFmZDMwZDU2YTk1ODlkZTM3ZWM1ZDJmMTYxZDBhNzdkZGEwNTU5NWFkIn0=',
                    toAccountHash: null,
                    toAddressHash: '0x0d29c22130c178633a5f7bb5b42ffabc6d4f6ef8',
                    token: 'CAK',
                    tokenAddress: '0x1ecd77075f7504ba849d47dce4cdc9695f1fe942',
                    tokenType: 'ERC-721',
                    value: null,
                  },
                },
              ],
            },
            transactionHash:
              '0xc3a66297e26a7074ab0367dafd30d56a9589de37ec5d2f161d0a77dda05595ad',
          },
        },
        {
          node: {
            blockNumber: 14483843,
            feeToken: 'CELO',
            gasPrice: '500000000',
            gasUsed: '219338',
            gatewayFee: '0',
            gatewayFeeRecipient: null,
            input:
              '0x5c11d7950000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000003ef9510fb1f1900000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000849fa48c8caa2907032f45765d7d6f52da13598d0000000000000000000000000000000000000000000000000000000062f2efaf0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000218c3c3d49d0e7b37aff0d8bb079de36ae61a4c0000000000000000000000000918146359264c492bd6934071c6bd31c854edbc3000000000000000000000000a649325aa7c5093d12d6f98eb4378deae68ce23f',
            timestamp: '2022-08-09T23:17:39.000000Z',
            tokenTransfer: {
              edges: [
                {
                  node: {
                    fromAccountHash:
                      '0x0000000000000000000000000000000000007E57',
                    fromAddressHash:
                      '0x0000000000000000000000000000000000007E57',
                    id: 'Q2Vsb1RyYW5zZmVyOnsibG9nX2luZGV4IjozLCJ0cmFuc2FjdGlvbl9oYXNoIjoiMHg1MTIyYThhZDFhZTQ4ZjUwYWM4ODZiNzM2YTAxMjg3YTE2NjkzNDhiNDBjYmNkNWIxOWE5OGQzYTIzODA0OGY1In0=',
                    toAccountHash: null,
                    toAddressHash: '0x11a0dce6931528fa45e5e34d79c2761cc8b96169',
                    token: 'cUSD',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    tokenType: 'ERC-20',
                    value: '1000000000000000000',
                  },
                },
                {
                  node: {
                    fromAccountHash: null,
                    fromAddressHash:
                      '0x11a0dce6931528fa45e5e34d79c2761cc8b96169',
                    id: 'Q2Vsb1RyYW5zZmVyOnsibG9nX2luZGV4Ijo1LCJ0cmFuc2FjdGlvbl9oYXNoIjoiMHg1MTIyYThhZDFhZTQ4ZjUwYWM4ODZiNzM2YTAxMjg3YTE2NjkzNDhiNDBjYmNkNWIxOWE5OGQzYTIzODA0OGY1In0=',
                    toAccountHash: null,
                    toAddressHash: '0x30f1639b42e5f14c176e47d07199f001f122238c',
                    token: 'cUSD',
                    tokenAddress: TEST_DOLLAR_ADDRESS,
                    tokenType: 'ERC-20',
                    value: '359397031406544889',
                  },
                },
                {
                  node: {
                    fromAccountHash: null,
                    fromAddressHash:
                      '0x30f1639b42e5f14c176e47d07199f001f122238c',
                    id: 'Q2Vsb1RyYW5zZmVyOnsibG9nX2luZGV4Ijo4LCJ0cmFuc2FjdGlvbl9oYXNoIjoiMHg1MTIyYThhZDFhZTQ4ZjUwYWM4ODZiNzM2YTAxMjg3YTE2NjkzNDhiNDBjYmNkNWIxOWE5OGQzYTIzODA0OGY1In0=',
                    toAccountHash: '0x0000000000000000000000000000000000007E57',
                    toAddressHash: '0x0000000000000000000000000000000000007E57',
                    token: 'cGOLD',
                    tokenAddress: TEST_GOLD_ADDRESS,
                    tokenType: 'ERC-20',
                    value: '1123912565750304',
                  },
                },
              ],
            },
            transactionHash:
              '0x5122a8ad1ae48f50ac886b736a01287a1669348b40cbcd5b19a98d3a238048f5',
          },
        },
      ],
    },
  },
}
export default mockTokenTxs
