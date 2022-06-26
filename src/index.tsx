import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HomeProvider } from "./context/HomeContext";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";

// Create a root.

ReactDOM.render(
  <HomeProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </HomeProvider>,
  document.getElementById("root")
);

//https://stackoverflow.com/questions/71684417/upgrading-to-react18-and-react-dom18-fails
