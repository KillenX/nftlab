import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MetadatumTitle } from "../metadatum/MetadatumTitle";

export const AttributeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="display_type" source="displayType" />
        <ReferenceInput
          source="metadatum.id"
          reference="Metadatum"
          label="Metadata"
        >
          <SelectInput optionText={MetadatumTitle} />
        </ReferenceInput>
        <TextInput label="trait_type" source="traitType" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
