import { ContractWhereInput } from "./ContractWhereInput";
import { ContractOrderByInput } from "./ContractOrderByInput";

export type ContractFindManyArgs = {
  where?: ContractWhereInput;
  orderBy?: Array<ContractOrderByInput>;
  skip?: number;
  take?: number;
};
