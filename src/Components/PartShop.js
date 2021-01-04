import React from 'react';
import { useParams } from 'react-router-dom';

function PartShop() {
  const { id } = useParams();
  return (
    <div>
      <h1>The page id is: {id}</h1>
    </div>
  );
}

export default PartShop;
