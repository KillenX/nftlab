import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MetadatumWhereUniqueInput } from "../metadatum/MetadatumWhereUniqueInput";

export type AttributeWhereInput = {
  displayType?: StringNullableFilter;
  id?: StringFilter;
  metadatum?: MetadatumWhereUniqueInput;
  traitType?: StringFilter;
  value?: StringFilter;
};
