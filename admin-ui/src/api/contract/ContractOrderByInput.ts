import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  address?: SortOrder;
  contractTypeId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  externalLink?: SortOrder;
  feeRecipient?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  sellerFeeBasisPoints?: SortOrder;
  updatedAt?: SortOrder;
  uri?: SortOrder;
};
