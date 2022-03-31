import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { METADATUM_TITLE_FIELD } from "../metadatum/MetadatumTitle";

export const AttributeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Attributes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="display_type" source="displayType" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Metadata"
          source="metadatum.id"
          reference="Metadatum"
        >
          <TextField source={METADATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="trait_type" source="traitType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
      </Datagrid>
    </List>
  );
};
