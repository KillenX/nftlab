import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NftTitle } from "../nft/NftTitle";

export const CollectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Banner image URL" source="bannerImageUrl" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Image URL" source="imageUrl" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="nfts"
          reference="Nft"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NftTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
