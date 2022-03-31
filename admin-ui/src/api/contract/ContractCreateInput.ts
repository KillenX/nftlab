import { CollectionCreateNestedManyWithoutContractsInput } from "./CollectionCreateNestedManyWithoutContractsInput";
import { NftCreateNestedManyWithoutContractsInput } from "./NftCreateNestedManyWithoutContractsInput";

export type ContractCreateInput = {
  address: string;
  collections?: CollectionCreateNestedManyWithoutContractsInput;
  name?: string | null;
  nfts?: NftCreateNestedManyWithoutContractsInput;
};
