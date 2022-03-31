import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { MetadatumWhereUniqueInput } from "../metadatum/MetadatumWhereUniqueInput";

export type NftCreateInput = {
  contract: ContractWhereUniqueInput;
  metadatum?: MetadatumWhereUniqueInput | null;
  tokenId?: string | null;
};
