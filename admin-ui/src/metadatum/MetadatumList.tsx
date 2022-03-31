import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MetadatumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Metadata"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Animation URL" source="animationUrl" />
        <TextField label="Background Color" source="backgroundColor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="External URL" source="externalUrl" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="YouTube URL" source="youTubeUrl" />
      </Datagrid>
    </List>
  );
};
