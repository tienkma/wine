import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "../css/amountBtn.css";

const AddToCard: React.FC<{
  decreAmount: (id: number) => void;
  increAmuont: (id: number) => void;
  count: number;
  id: number;
}> = (props) => {
  const { count, decreAmount, increAmuont, id } = props;

  return (
    <div className="amount-btns">
      <button
        type="button"
        className="amount-btn"
        onClick={() => decreAmount(id)}
      >
        <FaMinus />
      </button>
      <h2 className="amount">{count}</h2>
      <button
        type="button"
        className="amount-btn"
        onClick={() => increAmuont(id)}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AddToCard;
