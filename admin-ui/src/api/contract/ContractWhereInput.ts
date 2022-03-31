import { StringFilter } from "../../util/StringFilter";
import { CollectionListRelationFilter } from "../collection/CollectionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NftListRelationFilter } from "../nft/NftListRelationFilter";

export type ContractWhereInput = {
  address?: StringFilter;
  collections?: CollectionListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  nfts?: NftListRelationFilter;
};
