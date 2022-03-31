import { AttributeWhereInput } from "./AttributeWhereInput";
import { AttributeOrderByInput } from "./AttributeOrderByInput";

export type AttributeFindManyArgs = {
  where?: AttributeWhereInput;
  orderBy?: Array<AttributeOrderByInput>;
  skip?: number;
  take?: number;
};
