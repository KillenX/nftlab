import { MetadatumWhereUniqueInput } from "../metadatum/MetadatumWhereUniqueInput";

export type AttributeUpdateInput = {
  displayType?: string | null;
  metadatum?: MetadatumWhereUniqueInput | null;
  traitType?: string;
  value?: string;
};
