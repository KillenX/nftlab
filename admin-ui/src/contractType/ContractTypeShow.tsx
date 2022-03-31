import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTRACTTYPE_TITLE_FIELD } from "./ContractTypeTitle";

export const ContractTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Token Standard" source="tokenStandard" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Contract"
          target="ContractTypeId"
          label="Contracts"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <ReferenceField
              label="Contract Type"
              source="contracttype.id"
              reference="ContractType"
            >
              <TextField source={CONTRACTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="External Link" source="externalLink" />
            <TextField label="Fee recipient" source="feeRecipient" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Name" source="name" />
            <TextField
              label="Seller Fee Basis Points"
              source="sellerFeeBasisPoints"
            />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="URI" source="uri" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
