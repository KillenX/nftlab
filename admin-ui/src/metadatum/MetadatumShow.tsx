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

import { METADATUM_TITLE_FIELD } from "./MetadatumTitle";
import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";

export const MetadatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Attribute"
          target="MetadatumId"
          label="Attributes"
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
        </ReferenceManyField>
        <ReferenceManyField reference="Nft" target="MetadatumId" label="Nfts">
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
