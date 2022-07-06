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
      <Datagrid>
        <TextField source="id" />
        <TextField source="email" />

        {/* <EditButton /> */}
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

export default UserList;
