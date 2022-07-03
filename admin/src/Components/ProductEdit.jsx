import React from "react";
import { useState, useEffect } from "react";
import {
  Edit,
  SimpleForm,
  SelectInput,
  TextInput,
  TextField,
  NumberInput,
} from "react-admin";
const ProductEdit = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/categories`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        const d = actualData.map(function (item) {
          return {
            id: item.id,
            name: item.name,
          };
        });
        console.log(d);
        setData(d);
        // console.log(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <Edit {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
          <TextInput disabled source="category_id" />
          {data && <SelectInput source="category_id" choices={data} />}
          <TextInput source="description" fullWidth multiline />
          <NumberInput source="price" />
          <TextInput source="specs" fullWidth multiline />
          <NumberInput source="units_available" />
          <TextInput disabled source="units_sold" defaultValue={0} />
        </SimpleForm>
      </Edit>
    </div>
  );
};

export default ProductEdit;
