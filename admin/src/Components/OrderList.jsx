import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ArrayField,
  DeleteButton,
  BooleanField,
} from "react-admin";

function OrderList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        {/* <TextField source="userId" /> */}
        <TextField source="firstName" />
        <TextField source="lastName" />
        <TextField source="address" />
        <TextField source="totalQty" />
        <TextField source="totalSum" />
        <ArrayField source="articles">
          <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="quantity" />
          </Datagrid>
        </ArrayField>
        <BooleanField source="status" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

export default OrderList;
