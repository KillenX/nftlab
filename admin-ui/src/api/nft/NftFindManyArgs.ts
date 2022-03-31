import { NftWhereInput } from "./NftWhereInput";
import { NftOrderByInput } from "./NftOrderByInput";

export type NftFindManyArgs = {
  where?: NftWhereInput;
  orderBy?: Array<NftOrderByInput>;
  skip?: number;
  take?: number;
};
