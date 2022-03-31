import { SortOrder } from "../../util/SortOrder";

export type NftOrderByInput = {
  collectionId?: SortOrder;
  contractId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  metadatumId?: SortOrder;
  tokenId?: SortOrder;
  updatedAt?: SortOrder;
};
