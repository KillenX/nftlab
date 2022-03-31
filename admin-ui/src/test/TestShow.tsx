import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const TestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Sljedeca" source="sljedeca" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Whatever field" source="whateverField" />
      </SimpleShowLayout>
    </Show>
  );
};
