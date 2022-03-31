import { Nft as TNft } from "../api/nft/Nft";

export const NFT_TITLE_FIELD = "tokenId";

export const NftTitle = (record: TNft): string => {
  return record.tokenId || record.id;
};
