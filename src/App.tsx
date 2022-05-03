import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Verification, Alert, SideBar } from "./components";
import { useHomeContact } from "./context/HomeContext";
import {
  CartPage,
  HomePage,
  ProductsPage,
  WineItemPage,
  AboutPage,
} from "./pages";

function App() {
  const {
    state: { home_verification },
  } = useHomeContact();

  if (home_verification) {
    return <Verification />;
  }

  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Alert />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<WineItemPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
