import { CollectionUpdateManyWithoutContractsInput } from "./CollectionUpdateManyWithoutContractsInput";
import { NftUpdateManyWithoutContractsInput } from "./NftUpdateManyWithoutContractsInput";

export type ContractUpdateInput = {
  address?: string;
  collections?: CollectionUpdateManyWithoutContractsInput;
  name?: string | null;
  nfts?: NftUpdateManyWithoutContractsInput;
};
