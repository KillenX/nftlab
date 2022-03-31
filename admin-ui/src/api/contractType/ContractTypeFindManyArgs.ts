import { ContractTypeWhereInput } from "./ContractTypeWhereInput";
import { ContractTypeOrderByInput } from "./ContractTypeOrderByInput";

export type ContractTypeFindManyArgs = {
  where?: ContractTypeWhereInput;
  orderBy?: Array<ContractTypeOrderByInput>;
  skip?: number;
  take?: number;
};
