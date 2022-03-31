import { ContractCreateNestedManyWithoutContractTypesInput } from "./ContractCreateNestedManyWithoutContractTypesInput";

export type ContractTypeCreateInput = {
  contracts?: ContractCreateNestedManyWithoutContractTypesInput;
  tokenStandard: string;
};
