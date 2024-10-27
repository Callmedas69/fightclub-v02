export const BASE_SEPOLIA_CHAIN_ID = 84532;

export const collectionAddress = '0x5866C8c67C5147BA79DA9D9d6847761E06df54dc';
export const comment = 'testing';
export const mintContractAddress = '0x5866C8c67C5147BA79DA9D9d6847761E06df54dc';
export const mintABI = [
  {
    inputs: [
      { internalType: 'address', name: 'mintTo', type: 'address' },
      { internalType: 'uint256', name: 'quantity', type: 'uint256' },
      { internalType: 'address', name: 'collection', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const;
export const mintReferral = '0x0000000000000000000000000000000000000000';
export const quantity = '1';
export const tokenId = '1';
