import { CollectionWhereInput } from "./CollectionWhereInput";
import { CollectionOrderByInput } from "./CollectionOrderByInput";

export type CollectionFindManyArgs = {
  where?: CollectionWhereInput;
  orderBy?: Array<CollectionOrderByInput>;
  skip?: number;
  take?: number;
};
