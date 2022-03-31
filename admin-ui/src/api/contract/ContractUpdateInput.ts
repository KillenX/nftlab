import { NftUpdateManyWithoutContractsInput } from "./NftUpdateManyWithoutContractsInput";

export type ContractUpdateInput = {
  address?: string;
  name?: string | null;
  nfts?: NftUpdateManyWithoutContractsInput;
};
