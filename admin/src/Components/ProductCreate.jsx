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

const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <TextInput disabled source="id" /> */}
      <TextInput source="name" />
      <TextInput source="category_id" />
      <TextInput source="description" />
      <TextInput source="price" />
      <TextInput source="specs" />
      <TextInput source="units_available" />
      <TextInput disabled source="units_sold" defaultValue={0} />
    </SimpleForm>
  </Create>
);
export default ProductCreate;
