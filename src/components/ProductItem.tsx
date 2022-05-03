import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
import { cartItemType } from "../types/cartType";
import Quantity from "./Quantity";

const ProductItem: React.FC<cartItemType> = (props) => {
  const { wine, id, image, price, available, amount } = props;
  const { removeItem, decreAmount, increAmuont, showAlert } = useCartContext();

  return (
    <article>
      <div className="title">
        <img src={image} alt={wine} />
        <div>
          <h5 className="name">{wine}</h5>

          <h5 className="price-small">{price}</h5>
        </div>
      </div>
      <h5 className="price">${price}</h5>
      <Quantity
        count={amount}
        decreAmount={decreAmount}
        increAmuont={increAmuont}
        id={id}
      />
      <h5 className="subtotal">${price * amount}</h5>
      <button
        className="remove-btn"
        onClick={() => {
          removeItem(id);
          showAlert("delete item!", "danger");
        }}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default ProductItem;
