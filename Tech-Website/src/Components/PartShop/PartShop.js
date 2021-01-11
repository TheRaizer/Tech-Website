import React from "react";
import { useParams } from "react-router-dom";
import { parts, partsDescriptions, partsImages } from "../PartsData";
import ClickableImage from "../ClickableImage";
import styles from "./part-shop.module.css";

//fetch data depending on the useParams() id from redux store and create a props that can be given to the PartShop Component
function PartShop() {
  const { stringid } = useParams();
  const id = parseInt(stringid);

  const partDescs = partsDescriptions.find((x) => x.id === id).descs;
  const partName = parts.find((x) => x.id === id).name;
  const partImgs = partsImages.find((x) => x.id === id).imgs;

  return (
    <div>
      <section className="header">
        <h1 className={styles.heading}>
          The Expensive, Budget, and Best of {partName}
        </h1>
      </section>
      <h2>The Expensive</h2>
      <ClickableImage
        key={partImgs["EXPENSIVE"].orderId}
        iconSrc={partImgs["EXPENSIVE"].src}
        link={"/order/" + partImgs["EXPENSIVE"].orderId}
      />
      <h5>{partDescs.expensive}</h5>
      <h2>The Budget</h2>
      <ClickableImage
        key={partImgs["BUDGET"].orderId}
        iconSrc={partImgs["BUDGET"].src}
        link={"/order/" + partImgs["BUDGET"].orderId}
      />
      <h5>{partDescs.budget}</h5>
      <h2>The Best</h2>
      <ClickableImage
        key={partImgs["BEST"].orderId}
        iconSrc={partImgs["BEST"].src}
        link={"/order/" + partImgs["BEST"].orderId}
      />
      <h5>{partDescs.best}</h5>
    </div>
  );
}

export default PartShop;
