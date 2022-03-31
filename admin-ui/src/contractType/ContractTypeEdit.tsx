import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ContractTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Token Standard" source="tokenStandard" />
      </SimpleForm>
    </Edit>
  );
};
