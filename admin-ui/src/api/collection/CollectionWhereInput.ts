import { ContractWhereUniqueInput } from "../contract/ContractWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CollectionWhereInput = {
  contract?: ContractWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
};
