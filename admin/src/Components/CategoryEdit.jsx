import React from "react";
import { Edit, SimpleForm, SelectInput, TextField } from "react-admin";
const CategoryEdit = (props) => {
  return (
    <div>
      <Edit {...props}>
        <SimpleForm>
          <TextField disabled source="id" />
          <TextField source="name" />
        </SimpleForm>
      </Edit>
    </div>
  );
};

export default CategoryEdit;
