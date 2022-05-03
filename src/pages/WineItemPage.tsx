import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loadding, Rating, AddToCard, Footer } from "../components";
import PageHero from "../components/PageHero";
import { useCartContext } from "../context/CartContext";
import { useHomeContact } from "../context/HomeContext";
import "../css/wineItemPage.css";

const WineItemPage = () => {
  const { id } = useParams();
  const { getItemWine } = useHomeContact();
  const { getCartItem } = useCartContext();
  useEffect(() => {
    getItemWine(Number(id));
  }, []);

  const {
    state: { item_error, item_loading, item_data },
  } = useHomeContact();
  const { wine, winery, price, description, available, rating, image } =
    item_data;

  const [count, setCount] = useState(1);

  const decreAmount = (id?: number) => {
    setCount((count) => {
      let newCount = count - 1;
      if (newCount < 1) {
        return 1;
      }
      return newCount;
    });
  };
  const increAmuont = (id?: number) => {
    setCount((count) => {
      let newCount = count + 1;
      if (newCount > available) {
        return available;
      }
      return newCount;
    });
  };

  return (
    <main id="itemPage">
      {item_loading ? (
        <Loadding />
      ) : item_error ? (
        <h2>there was an error...</h2>
      ) : (
        <>
          <PageHero title="products" product={wine} />
          <section className="itemPage container">
            <div className="img">
              <img src={image} alt="image" />
            </div>
            <div className="itemContent">
              <h1>{wine}</h1>
              <h3>{winery}</h3>
              <p>{available} available</p>
              <Rating average={rating.average} reviews={rating.reviews} />
              <p className="price">${price}</p>
              <p className="description">{description}</p>
              <hr />
              <AddToCard
                decreAmount={decreAmount}
                increAmuont={increAmuont}
                count={count}
                id={5}
              />
              <Link
                to="/cart"
                className="addToCart btn"
                onClick={() =>
                  getCartItem(Number(id), wine, price, available, image, count)
                }
              >
                add to cart
              </Link>
            </div>
          </section>
          <Footer />
        </>
      )}
    </main>
  );
};

export default WineItemPage;
