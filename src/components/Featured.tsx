import React from "react";
import { useHomeContact } from "../context/HomeContext";
import { CartItem, Loadding } from "./index";
import "../css/Featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  const {
    state: { home_featured, home_loading, home_error },
  } = useHomeContact();
  return (
    <div id="featured" className="container">
      <h1>Featured Products</h1>
      {home_loading ? (
        <Loadding />
      ) : home_error ? (
        "error"
      ) : (
        <div className="listFeatured">
          {home_featured.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      )}
      <Link to="/products" className="btn">
        All Products
      </Link>
    </div>
  );
};

export default Featured;
