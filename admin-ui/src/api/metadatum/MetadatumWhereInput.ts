import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AttributeListRelationFilter } from "../attribute/AttributeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { NftListRelationFilter } from "../nft/NftListRelationFilter";

export type MetadatumWhereInput = {
  animationUrl?: StringNullableFilter;
  attributes?: AttributeListRelationFilter;
  backgroundColor?: StringNullableFilter;
  description?: StringNullableFilter;
  externalUrl?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringNullableFilter;
  nfts?: NftListRelationFilter;
  youTubeUrl?: StringNullableFilter;
};
