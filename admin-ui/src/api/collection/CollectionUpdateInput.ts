import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";

export type CollectionUpdateInput = {
  contract?: ContractWhereUniqueInput | null;
  name?: string;
};
