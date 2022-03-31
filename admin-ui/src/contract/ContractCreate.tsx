import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ContractTypeTitle } from "../contractType/ContractTypeTitle";
import { NftTitle } from "../nft/NftTitle";

export const ContractCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceInput
          source="contracttype.id"
          reference="ContractType"
          label="Contract Type"
        >
          <SelectInput optionText={ContractTypeTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="External Link" source="externalLink" />
        <TextInput label="Fee recipient" source="feeRecipient" />
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
        <NumberInput
          step={1}
          label="Seller Fee Basis Points"
          source="sellerFeeBasisPoints"
        />
        <TextInput label="URI" source="uri" />
      </SimpleForm>
    </Create>
  );
};
