import { NftWhereUniqueInput } from "./NftWhereUniqueInput";
import { NftUpdateInput } from "./NftUpdateInput";

export type UpdateNftArgs = {
  where: NftWhereUniqueInput;
  data: NftUpdateInput;
};
