import React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
  DateInput,
  LongTextInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  DateField,
  EditButton,
} from "react-admin";
// import RichTextInput from 'ra-input-rich-text';

const CategoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <TextInput disabled source="id" /> */}
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
export default CategoryCreate;
