import { Contract as TContract } from "../api/contract/Contract";

export const CONTRACT_TITLE_FIELD = "name";

export const ContractTitle = (record: TContract): string => {
  return record.name || record.id;
};
