import React from "react";
import { PageHero, FilterProducts, ListProducts, Footer } from "../components";
import "../css/productPage.css";

const ProductsPage = () => {
  return (
    <main id="product_page">
      <PageHero title="products" />
      <section className="container">
        <FilterProducts />
        <ListProducts />
      </section>
      <Footer />
    </main>
  );
};

export default ProductsPage;
