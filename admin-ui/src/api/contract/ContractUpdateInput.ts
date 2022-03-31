import { ContractTypeWhereUniqueInput } from "../contractType/ContractTypeWhereUniqueInput";
import { NftUpdateManyWithoutContractsInput } from "./NftUpdateManyWithoutContractsInput";

export type ContractUpdateInput = {
  address?: string;
  contractType?: ContractTypeWhereUniqueInput;
  description?: string | null;
  externalLink?: string | null;
  feeRecipient?: string | null;
  image?: string | null;
  name?: string | null;
  nfts?: NftUpdateManyWithoutContractsInput;
  sellerFeeBasisPoints?: number | null;
  uri?: string | null;
};
