import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COLLECTION_TITLE_FIELD } from "../collection/CollectionTitle";
import { CONTRACT_TITLE_FIELD } from "../contract/ContractTitle";
import { METADATUM_TITLE_FIELD } from "../metadatum/MetadatumTitle";

export const NftList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Nfts"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
