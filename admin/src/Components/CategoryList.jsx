import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

function CategoryList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />

        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

export default CategoryList;
