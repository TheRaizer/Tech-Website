import React from "react";
import { useParams } from "react-router-dom";
import { parts, partsDescriptions, partsInfos } from "../PartsData";
import styles from "./part-shop.module.css";

//fetch data depending on the useParams() id from redux store and create a props that can be given to the PartShop Component
function PartShop() {
  const { stringid } = useParams();
  const id = parseInt(stringid);

  const partDescs = partsDescriptions.find((x) => x.id === id).descs;
  const partName = parts.find((x) => x.id === id).name;
  const partInfos = partsInfos.find((x) => x.id === id).imgs;

  const AddToCart = (partInfos, itemType) => {
    //add this product to the order and keep orderStatus as "pending-submission".
  };

  return (
    <div>
      <section className="header">
        <h1 className={styles.heading}>
          The Expensive, Budget, and Best of {partName}
        </h1>
      </section>
      <h2>The Expensive</h2>
      <img
        key={partInfos["EXPENSIVE"].itemId}
        iconSrc={partInfos["EXPENSIVE"].src}
        alt="Unavailable"
      />
      <button onClick={AddToCart}>Add To Cart</button>
      <h5>{partDescs.expensive}</h5>
      <h2>The Budget</h2>
      <img
        key={partInfos["BUDGET"].itemId}
        iconSrc={partInfos["BUDGET"].src}
        alt="Unavailable"
      />
      <button onClick={AddToCart}>Add To Cart</button>
      <h5>{partDescs.budget}</h5>
      <h2>The Best</h2>
      <img
        key={partInfos["BEST"].itemId}
        iconSrc={partInfos["BEST"].src}
        alt="Unavailable"
      />
      <button onClick={AddToCart}>Add To Cart</button>
      <h5>{partDescs.best}</h5>
    </div>
  );
}

export default PartShop;
