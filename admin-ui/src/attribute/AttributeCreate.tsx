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
        <TextInput label="Display type" source="displayType" />
        <ReferenceInput
          source="metadatum.id"
          reference="Metadatum"
          label="Metadata"
        >
          <SelectInput optionText={MetadatumTitle} />
        </ReferenceInput>
        <TextInput label="Trait type" source="traitType" />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
