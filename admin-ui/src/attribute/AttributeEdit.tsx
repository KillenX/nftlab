import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MetadatumTitle } from "../metadatum/MetadatumTitle";

export const AttributeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
