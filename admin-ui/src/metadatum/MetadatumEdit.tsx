import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AttributeTitle } from "../attribute/AttributeTitle";
import { NftTitle } from "../nft/NftTitle";

export const MetadatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Animation URL" source="animationUrl" />
        <ReferenceArrayInput
          source="attributes"
          reference="Attribute"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttributeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Background Color" source="backgroundColor" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="External URL" source="externalUrl" />
        <TextInput label="Image" source="image" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="nfts"
          reference="Nft"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NftTitle} />
        </ReferenceArrayInput>
        <TextInput label="YouTube URL" source="youTubeUrl" />
      </SimpleForm>
    </Edit>
  );
};
