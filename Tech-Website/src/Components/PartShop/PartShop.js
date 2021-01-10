import React from "react";
import { useParams } from "react-router-dom";
import { parts, partsIcons, partsDescriptions } from "../PartsData";
import styles from "./part-shop.module.css";

//fetch data depending on the useParams() id from redux store and create a props that can be given to the PartShop Component
function PartShop() {
  const { id } = useParams();
  const ID = parseInt(id);

  const partDescs = partsDescriptions.find((x) => x.id === ID).descs;
  const partName = parts.find((x) => x.id === ID).name;

  return (
    <div>
      <section className="header">
        <h1 className={styles.heading}>
          The Expensive, Budget, and Best of {partName}
        </h1>
      </section>
      <h2>The Expensive</h2>
      <h5>{partDescs.expensive}</h5>
      <h2>The Budget</h2>
      <h5>{partDescs.budget}</h5>
      <h2>The Best</h2>
      <h5>{partDescs.best}</h5>
    </div>
  );
}

export default PartShop;
