import { ContractType as TContractType } from "../api/contractType/ContractType";

export const CONTRACTTYPE_TITLE_FIELD = "tokenStandard";

export const ContractTypeTitle = (record: TContractType): string => {
  return record.tokenStandard || record.id;
};
