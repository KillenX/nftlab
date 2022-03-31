import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NftListRelationFilter } from "../nft/NftListRelationFilter";

export type CollectionWhereInput = {
  bannerImageUrl?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  name?: StringFilter;
  nfts?: NftListRelationFilter;
};
