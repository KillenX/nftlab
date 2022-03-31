import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { MetadatumWhereUniqueInput } from "../metadatum/MetadatumWhereUniqueInput";

export type NftCreateInput = {
  collection?: CollectionWhereUniqueInput | null;
  contract: ContractWhereUniqueInput;
  metadatum?: MetadatumWhereUniqueInput | null;
  tokenId?: string | null;
};
