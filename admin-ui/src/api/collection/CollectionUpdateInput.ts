import { NftUpdateManyWithoutCollectionsInput } from "./NftUpdateManyWithoutCollectionsInput";

export type CollectionUpdateInput = {
  bannerImageUrl?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  name?: string;
  nfts?: NftUpdateManyWithoutCollectionsInput;
};
