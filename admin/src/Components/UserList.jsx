import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

function UserList(props) {
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="id" />
        <TextField source="email" />
        <TextField source="lastName" />
        <TextField source="firstName" />
        <TextField source="address" />

        {/* <EditButton /> */}
        {/* <DeleteButton /> */}
      </Datagrid>
    </List>
  );
}

export default UserList;
