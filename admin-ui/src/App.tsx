import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AttributeList } from "./attribute/AttributeList";
import { AttributeCreate } from "./attribute/AttributeCreate";
import { AttributeEdit } from "./attribute/AttributeEdit";
import { AttributeShow } from "./attribute/AttributeShow";
import { ContractList } from "./contract/ContractList";
import { ContractCreate } from "./contract/ContractCreate";
import { ContractEdit } from "./contract/ContractEdit";
import { ContractShow } from "./contract/ContractShow";
import { CollectionList } from "./collection/CollectionList";
import { CollectionCreate } from "./collection/CollectionCreate";
import { CollectionEdit } from "./collection/CollectionEdit";
import { CollectionShow } from "./collection/CollectionShow";
import { NftList } from "./nft/NftList";
import { NftCreate } from "./nft/NftCreate";
import { NftEdit } from "./nft/NftEdit";
import { NftShow } from "./nft/NftShow";
import { MetadatumList } from "./metadatum/MetadatumList";
import { MetadatumCreate } from "./metadatum/MetadatumCreate";
import { MetadatumEdit } from "./metadatum/MetadatumEdit";
import { MetadatumShow } from "./metadatum/MetadatumShow";
import { ContractTypeList } from "./contractType/ContractTypeList";
import { ContractTypeCreate } from "./contractType/ContractTypeCreate";
import { ContractTypeEdit } from "./contractType/ContractTypeEdit";
import { ContractTypeShow } from "./contractType/ContractTypeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"NFT LAB"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Attribute"
          list={AttributeList}
          edit={AttributeEdit}
          create={AttributeCreate}
          show={AttributeShow}
        />
        <Resource
          name="Contract"
          list={ContractList}
          edit={ContractEdit}
          create={ContractCreate}
          show={ContractShow}
        />
        <Resource
          name="Collection"
          list={CollectionList}
          edit={CollectionEdit}
          create={CollectionCreate}
          show={CollectionShow}
        />
        <Resource
          name="Nft"
          list={NftList}
          edit={NftEdit}
          create={NftCreate}
          show={NftShow}
        />
        <Resource
          name="Metadatum"
          list={MetadatumList}
          edit={MetadatumEdit}
          create={MetadatumCreate}
          show={MetadatumShow}
        />
        <Resource
          name="ContractType"
          list={ContractTypeList}
          edit={ContractTypeEdit}
          create={ContractTypeCreate}
          show={ContractTypeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
