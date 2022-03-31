import { AttributeUpdateManyWithoutMetadataInput } from "./AttributeUpdateManyWithoutMetadataInput";
import { NftUpdateManyWithoutMetadataInput } from "./NftUpdateManyWithoutMetadataInput";

export type MetadatumUpdateInput = {
  animationUrl?: string | null;
  attributes?: AttributeUpdateManyWithoutMetadataInput;
  backgroundColor?: string | null;
  description?: string | null;
  externalUrl?: string | null;
  image?: string | null;
  name?: string | null;
  nfts?: NftUpdateManyWithoutMetadataInput;
  youTubeUrl?: string | null;
};
