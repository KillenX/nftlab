import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CollectionTitle } from "../collection/CollectionTitle";
import { ContractTitle } from "../contract/ContractTitle";
import { MetadatumTitle } from "../metadatum/MetadatumTitle";

export const NftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="collection.id"
          reference="Collection"
          label="Collection"
        >
          <SelectInput optionText={CollectionTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="contract.id"
          reference="Contract"
          label="Contract"
        >
          <SelectInput optionText={ContractTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="metadatum.id"
          reference="Metadatum"
          label="Metadata"
        >
          <SelectInput optionText={MetadatumTitle} />
        </ReferenceInput>
        <TextInput label="Token ID" source="tokenId" />
      </SimpleForm>
    </Create>
  );
};
