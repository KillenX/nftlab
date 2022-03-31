import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NftListRelationFilter } from "../nft/NftListRelationFilter";

export type ContractWhereInput = {
  address?: StringFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  nfts?: NftListRelationFilter;
};
