import React from "react";
import { useParams } from "react-router-dom";

//fetch data depending on the useParams() id from redux store and create a props that can be given to the PartShop Component
function PartShop() {
  const { id } = useParams();
  return (
    <div>
      <h1>The page id is: {id}</h1>
    </div>
  );
}

export default PartShop;
