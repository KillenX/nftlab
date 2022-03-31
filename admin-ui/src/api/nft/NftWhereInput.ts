import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MetadatumWhereUniqueInput } from "../metadatum/MetadatumWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NftWhereInput = {
  contract?: ContractWhereUniqueInput;
  id?: StringFilter;
  metadatum?: MetadatumWhereUniqueInput;
  tokenId?: StringNullableFilter;
};
