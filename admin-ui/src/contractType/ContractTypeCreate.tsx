import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ContractTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Token Standard" source="tokenStandard" />
      </SimpleForm>
    </Create>
  );
};
