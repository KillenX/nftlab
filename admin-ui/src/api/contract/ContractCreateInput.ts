import { NftCreateNestedManyWithoutContractsInput } from "./NftCreateNestedManyWithoutContractsInput";

export type ContractCreateInput = {
  address: string;
  name?: string | null;
  nfts?: NftCreateNestedManyWithoutContractsInput;
};
