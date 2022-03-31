import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NftTitle } from "../nft/NftTitle";

export const CollectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
