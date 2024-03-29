import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { METADATUM_TITLE_FIELD } from "../metadatum/MetadatumTitle";

export const AttributeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Display type" source="displayType" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Metadata"
          source="metadatum.id"
          reference="Metadatum"
        >
          <TextField source={METADATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Trait type" source="traitType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
