import "./App.css";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import CategoryList from "./Components/CategoryList";
import CategoryEdit from "./Components/CategoryEdit";
import CategoryCreate from "./Components/CategoryCreate";
import { authProvider } from "./Components/authProvider";
import ProductList from "./Components/ProductList";
import ProductCreate from "./Components/ProductCreate";
import ProductEdit from "./Components/ProductEdit";
import UserList from "./Components/UserList";
import OrderList from "./Components/OrderList";
import OrderEdit from "./Components/OrderEdit";
function App() {
  return (
    <div className="App">
      <Admin
        authProvider={authProvider}
        dataProvider={simpleRestProvider("http://localhost:8080")}
      >
        <Resource
          name="categories"
          list={CategoryList}
          create={CategoryCreate}
          edit={CategoryEdit}
        />
        <Resource
          name="articles"
          list={ProductList}
          create={ProductCreate}
          edit={ProductEdit}
        />
        <Resource
          name="auth/all"
          list={UserList}
          // create={ProductCreate}
          // edit={ProductEdit}
        />
        <Resource
          name="orders/admin"
          list={OrderList}
          // create={ProductCreate}
          edit={OrderEdit}
        />
      </Admin>
    </div>
  );
}

export default App;
