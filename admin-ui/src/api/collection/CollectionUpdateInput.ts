import { NftUpdateManyWithoutCollectionsInput } from "./NftUpdateManyWithoutCollectionsInput";

export type CollectionUpdateInput = {
  name?: string;
  nfts?: NftUpdateManyWithoutCollectionsInput;
};
