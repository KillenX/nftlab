import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  sljedeca?: SortOrder;
  updatedAt?: SortOrder;
  whateverField?: SortOrder;
};
