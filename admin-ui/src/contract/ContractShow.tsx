import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTRACT_TITLE_FIELD } from "./ContractTitle";
import { METADATUM_TITLE_FIELD } from "../metadatum/MetadatumTitle";

export const ContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Collection"
          target="ContractId"
          label="Collections"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Contract"
              source="contract.id"
              reference="Contract"
            >
              <TextField source={CONTRACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Nft" target="ContractId" label="Nfts">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Contract"
              source="contract.id"
              reference="Contract"
            >
              <TextField source={CONTRACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Metadata"
              source="metadatum.id"
              reference="Metadatum"
            >
              <TextField source={METADATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Token ID" source="tokenId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
