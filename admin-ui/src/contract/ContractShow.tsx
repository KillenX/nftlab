import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COLLECTION_TITLE_FIELD } from "../collection/CollectionTitle";
import { CONTRACT_TITLE_FIELD } from "./ContractTitle";
import { METADATUM_TITLE_FIELD } from "../metadatum/MetadatumTitle";
import { CONTRACTTYPE_TITLE_FIELD } from "../contractType/ContractTypeTitle";

export const ContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Nft" target="ContractId" label="Nfts">
          <Datagrid rowClick="show">
            <ReferenceField
              label="Collection"
              source="collection.id"
              reference="Collection"
            >
              <TextField source={COLLECTION_TITLE_FIELD} />
            </ReferenceField>
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
