import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StoresProvider } from "./Stores/StoresContex";
import RootStore from "./Stores/RootStore";
import { BrowserRouter } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const store = new RootStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoresProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoresProvider>
  </React.StrictMode>
);
