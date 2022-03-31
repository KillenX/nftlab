import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContractTypeWhereInput = {
  contracts?: ContractListRelationFilter;
  id?: StringFilter;
  tokenStandard?: StringFilter;
};
