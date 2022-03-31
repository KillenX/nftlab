import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MetadatumWhereUniqueInput } from "../metadatum/MetadatumWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NftWhereInput = {
  collection?: CollectionWhereUniqueInput;
  contract?: ContractWhereUniqueInput;
  id?: StringFilter;
  metadatum?: MetadatumWhereUniqueInput;
  tokenId?: StringNullableFilter;
};
