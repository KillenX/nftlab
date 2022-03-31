import { Contract } from "../contract/Contract";

export type ContractType = {
  contracts?: Array<Contract>;
  createdAt: Date;
  id: string;
  tokenStandard: string;
  updatedAt: Date;
};
