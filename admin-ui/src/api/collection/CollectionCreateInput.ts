import { NftCreateNestedManyWithoutCollectionsInput } from "./NftCreateNestedManyWithoutCollectionsInput";

export type CollectionCreateInput = {
  name: string;
  nfts?: NftCreateNestedManyWithoutCollectionsInput;
};
