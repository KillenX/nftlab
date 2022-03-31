import { StringFilter } from "../../util/StringFilter";
import { ContractTypeWhereUniqueInput } from "../contractType/ContractTypeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NftListRelationFilter } from "../nft/NftListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ContractWhereInput = {
  address?: StringFilter;
  contractType?: ContractTypeWhereUniqueInput;
  description?: StringNullableFilter;
  externalLink?: StringNullableFilter;
  feeRecipient?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  name?: StringNullableFilter;
  nfts?: NftListRelationFilter;
  sellerFeeBasisPoints?: IntNullableFilter;
  uri?: StringNullableFilter;
};
