import { ContractTypeWhereUniqueInput } from "../contractType/ContractTypeWhereUniqueInput";
import { NftCreateNestedManyWithoutContractsInput } from "./NftCreateNestedManyWithoutContractsInput";

export type ContractCreateInput = {
  address: string;
  contractType: ContractTypeWhereUniqueInput;
  description?: string | null;
  externalLink?: string | null;
  feeRecipient?: string | null;
  image?: string | null;
  name?: string | null;
  nfts?: NftCreateNestedManyWithoutContractsInput;
  sellerFeeBasisPoints?: number | null;
  uri?: string | null;
};
