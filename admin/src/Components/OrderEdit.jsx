import React from "react";
import {
  Edit,
  SimpleForm,
  SelectInput,
  TextInput,
  TextField,
  BooleanInput,
} from "react-admin";
const OrderEdit = (props) => {
  return (
    <div>
      <Edit {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput disabled source="totalQty" />
          <TextInput disabled source="totalSum" />
          <BooleanInput source="status" />
        </SimpleForm>
      </Edit>
    </div>
  );
};

export default OrderEdit;
