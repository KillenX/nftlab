import { MetadatumWhereInput } from "./MetadatumWhereInput";
import { MetadatumOrderByInput } from "./MetadatumOrderByInput";

export type MetadatumFindManyArgs = {
  where?: MetadatumWhereInput;
  orderBy?: Array<MetadatumOrderByInput>;
  skip?: number;
  take?: number;
};
