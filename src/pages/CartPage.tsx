import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, PageHero, ProductItem } from "../components";
import { useCartContext } from "../context/CartContext";
import { IoIosPricetags } from "react-icons/io";
import "../css/cartPage.css";

const CartPage = () => {
  const {
    state: { listCart, shippingFee, totalCart },
    clearCart,
    showAlert,
  } = useCartContext();

  const [login, setLogin] = useState(false);
  return (
    <main id="cartPage">
      <PageHero title="cart" />
      {listCart.length < 1 ? (
        <div className="cartEmpty">
          <h1>Your cart is empty</h1>
          <Link to="/products" className="btn">
            Fill it
          </Link>
        </div>
      ) : (
        <div className="cartContent container">
          <div className="listCart">
            <div className="cartColumn">
              <div className="content">
                <h5>item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <span></span>
              </div>
              <hr />
            </div>
            {listCart.map((item) => (
              <ProductItem key={item.id} {...item} />
            ))}
            <hr />
            <div className="link-container">
              <Link className="btn" to="/products">
                continue shopping
              </Link>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  clearCart();
                  showAlert("remove list cart!", "danger");
                }}
              >
                clear shopping cart
              </button>
            </div>
          </div>
          <section className="totalCart">
            <div>
              <article>
                <h5>
                  subtotal :<span>${totalCart}</span>
                </h5>
                <p>
                  shipping fee :<span>${shippingFee}</span>
                </p>

                <hr />
                <div className="coupon">
                  <IoIosPricetags />
                  <span>apply coupon</span>
                </div>
                <form>
                  <input type="text" placeholder="Enter Coupon" />
                  <button type="button">Apply</button>
                </form>
                <hr />
                <h4>
                  order total :<span>${totalCart + shippingFee}</span>
                </h4>
                <Link to="/cart" className="checkOut btn">
                  {login ? "proceed to checkout" : "Login"}
                </Link>
              </article>
            </div>
          </section>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default CartPage;
