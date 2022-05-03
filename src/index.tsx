import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HomeProvider } from "./context/HomeContext";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";

// Create a root.
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <HomeProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </HomeProvider>
);

//https://stackoverflow.com/questions/71684417/upgrading-to-react18-and-react-dom18-fails
