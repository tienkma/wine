import React, { useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import "../css/alert.css";
const Alert = () => {
  const {
    removeAlert,
    state: { listCart, type, mgs, showAlert },
  } = useCartContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [listCart]);
  return (
    <div className={showAlert ? `alert alert-${type}` : "alert"}>{mgs}</div>
  );
};

export default Alert;
