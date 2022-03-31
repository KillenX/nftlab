import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type CollectionCreateInput = {
  contract?: ContractWhereUniqueInput | null;
  name: string;
};
