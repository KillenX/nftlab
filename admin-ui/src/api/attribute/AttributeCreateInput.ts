import { MetadatumWhereUniqueInput } from "../metadatum/MetadatumWhereUniqueInput";

export type AttributeCreateInput = {
  displayType?: string | null;
  metadatum?: MetadatumWhereUniqueInput | null;
  traitType: string;
  value: string;
};
