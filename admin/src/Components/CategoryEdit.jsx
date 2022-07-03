import React from "react";
import {
  Edit,
  SimpleForm,
  SelectInput,
  TextInput,
  TextField,
} from "react-admin";
const CategoryEdit = (props) => {
  return (
    <div>
      <Edit {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
        </SimpleForm>
      </Edit>
    </div>
  );
};

export default CategoryEdit;
