import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  NumberInput,
} from "react-admin";

export const TestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="Sljedeca" source="sljedeca" />
        <NumberInput step={1} label="Whatever field" source="whateverField" />
      </SimpleForm>
    </Create>
  );
};
