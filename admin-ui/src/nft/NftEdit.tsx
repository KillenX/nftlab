import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CollectionTitle } from "../collection/CollectionTitle";
import { ContractTitle } from "../contract/ContractTitle";
import { MetadatumTitle } from "../metadatum/MetadatumTitle";

export const NftEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
