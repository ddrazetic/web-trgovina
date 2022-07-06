import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ArrayField,
  DeleteButton,
} from "react-admin";

function OrderList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="userId" />
        <ArrayField source="articles">
          <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="quantity" />
          </Datagrid>
        </ArrayField>
        {/* <TextField source="articles" /> */}

        {/* <EditButton /> */}
        {/* <DeleteButton /> */}
      </Datagrid>
    </List>
  );
}

export default OrderList;
