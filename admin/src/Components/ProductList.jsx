import React from "react";

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

function ProductList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="category_name" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="price" />
        <TextField source="specs" />
        <TextField source="units_available" />
        <TextField source="units_sold" />

        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

export default ProductList;
