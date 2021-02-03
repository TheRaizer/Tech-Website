import React from "react";
import styles from "./part-shop.module.css";
import PartShopProduct from "./PartShopProduct";

//fetch data depending on the useParams() id from redux store and create a props that can be given to the PartShop Component
export default function PartShop({ state, props }) {
  const { category, confirmationWindow, setConfirmationWindow } = state;
  const {
    closeConfirmationWindow,
    expensiveProduct,
    budgetProduct,
    bestProduct,
    AddToCart,
  } = props;

  return (
    <div>
      <section className="header">
        <h1 className={styles.heading}>
          The Expensive, Budget, and Best of {category ?? "...loading"}
        </h1>
      </section>
      {confirmationWindow.open ? (
        <section>
          <div className={styles.darkenedLayer}></div>
          <div className={styles.confirmationWindow}>
            <h3>Do you wish to purchase a</h3>
            <h3>{confirmationWindow.product.productName}</h3>
            <h3>${confirmationWindow.product.currentPrice}</h3>
            <button
              onClick={() => {
                closeConfirmationWindow();
                AddToCart(confirmationWindow.product);
              }}
            >
              Yes
            </button>
            <button onClick={closeConfirmationWindow}>No</button>
          </div>
        </section>
      ) : (
        <div></div>
      )}
      <h2>The Expensive</h2>
      <PartShopProduct
        product={expensiveProduct}
        setConfirmationWindow={setConfirmationWindow}
      />
      <h2>The Budget</h2>
      <PartShopProduct
        product={budgetProduct}
        setConfirmationWindow={setConfirmationWindow}
      />
      <h2>The Best</h2>
      <PartShopProduct
        product={bestProduct}
        setConfirmationWindow={setConfirmationWindow}
      />
    </div>
  );
}
