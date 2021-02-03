import React, { useContext } from "react";
import { UserIdContext } from "../../Contexts/UserIdContext";
import styles from "./part-shop.module.css";

const PartShopProduct = (props) => {
  const { product, setConfirmationWindow } = props;
  const { userInfo } = useContext(UserIdContext);

  return (
    <section>
      <section>
        {userInfo.hasSignedIn ? (
          product?.stock > 0 ? (
            <div
              onClick={() => {
                setConfirmationWindow({
                  open: true,
                  product: product,
                });
                document.body.style.overflow = "hidden";
              }}
              className={styles.addToCart}
            >
              Add To Cart
            </div>
          ) : (
            <div className={styles.addToCart}>out of stock</div>
          )
        ) : (
          <div className={styles.addToCart}>
            Cannot Add to cart if not signed in
          </div>
        )}
      </section>
      <h5>{product?.productDescription ?? "loading..."}</h5>
    </section>
  );
};

export default PartShopProduct;
