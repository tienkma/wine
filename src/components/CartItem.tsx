import React from "react";
import { typeItemWine } from "../types/homeTypes";
import "../css/cartItem.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartItem: React.FC<typeItemWine> = (props) => {
  const { getCartItem, showAlert } = useCartContext();
  const { id, price, wine, image, available } = props;

  return (
    <article className="cart_item">
      <div className="cart_item-image">
        <Link
          to={`/products/${id}`}
          className="imageItem"
          style={{
            background: `url(${image}) no-repeat top center`,
          }}
        />
      </div>
      <div className="cart_item-bottom">
        <h4>{wine}</h4>
        <p>${price}</p>
        <button
          className="btn"
          onClick={() => {
            const count = 1;
            getCartItem(id, wine, price, available, image, count);
            showAlert("add to card success!", "success");
          }}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default CartItem;
