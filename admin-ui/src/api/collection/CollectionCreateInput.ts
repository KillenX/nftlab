import { NftCreateNestedManyWithoutCollectionsInput } from "./NftCreateNestedManyWithoutCollectionsInput";

export type CollectionCreateInput = {
  bannerImageUrl?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  name: string;
  nfts?: NftCreateNestedManyWithoutCollectionsInput;
};
