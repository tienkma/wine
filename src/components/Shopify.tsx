import React from "react";
import { shopify } from "../utils/shopify";
import "../css/shopify.css";

const Shopify = () => {
  return (
    <section id="shopify">
      <div className="container">
        <div className="imgListShopify">
          {shopify.map((item, idx) => (
            <img className="imgShopify" src={item.image} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shopify;
