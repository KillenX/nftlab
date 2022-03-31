import { AttributeCreateNestedManyWithoutMetadataInput } from "./AttributeCreateNestedManyWithoutMetadataInput";
import { NftCreateNestedManyWithoutMetadataInput } from "./NftCreateNestedManyWithoutMetadataInput";

export type MetadatumCreateInput = {
  animationUrl?: string | null;
  attributes?: AttributeCreateNestedManyWithoutMetadataInput;
  backgroundColor?: string | null;
  description?: string | null;
  externalUrl?: string | null;
  image?: string | null;
  name?: string | null;
  nfts?: NftCreateNestedManyWithoutMetadataInput;
  youTubeUrl?: string | null;
};
