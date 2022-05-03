import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../css/headerBtn.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartButton: React.FC<{ closeSidebar?: () => void }> = (props) => {
  const [login, setLogin] = useState(false);

  const {
    state: { listCart },
  } = useCartContext();
  return (
    <div className="header_info">
      <div className="header_info-item">
        <p className="header-icon">
          <BsFillTelephoneFill />
        </p>
        <div className="header-sp">
          <div className="header-sp_top">
            <a href="#">support</a>
          </div>
          <p className="header-sp_bottom">1800 6012</p>
        </div>
      </div>
      <div className="header_info-item">
        <p className="header-icon">
          {!login ? <FiUserPlus /> : <FiUserMinus />}
        </p>
        <div className="header-sp">
          <div className="header-sp_top">
            <a href="">{login ? "logout" : "Login"}</a>
          </div>
          <p className="header-sp_bottom">Customer</p>
        </div>
      </div>
      <div className="header_info-item">
        <Link
          to="/cart"
          className="header-cart_icon"
          onClick={props.closeSidebar}
        >
          <AiOutlineShoppingCart />
        </Link>
        <p className="header-count-cart">{listCart.length}</p>
      </div>
    </div>
  );
};

export default CartButton;
