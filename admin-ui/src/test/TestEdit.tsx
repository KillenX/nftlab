import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateInput,
  NumberInput,
} from "react-admin";

export const TestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="Sljedeca" source="sljedeca" />
        <NumberInput step={1} label="Whatever field" source="whateverField" />
      </SimpleForm>
    </Edit>
  );
};
