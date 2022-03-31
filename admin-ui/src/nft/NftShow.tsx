import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COLLECTION_TITLE_FIELD } from "../collection/CollectionTitle";
import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";
import { METADATUM_TITLE_FIELD } from "../metadatum/MetadatumTitle";

export const NftShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
