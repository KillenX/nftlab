import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CONTRACTTYPE_TITLE_FIELD } from "../contractType/ContractTypeTitle";

export const ContractList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contracts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
