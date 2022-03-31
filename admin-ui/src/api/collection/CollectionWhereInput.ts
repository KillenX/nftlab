import { StringFilter } from "../../util/StringFilter";
import { NftListRelationFilter } from "../nft/NftListRelationFilter";

export type CollectionWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  nfts?: NftListRelationFilter;
};
