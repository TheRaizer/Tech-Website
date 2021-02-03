function CartProduct(props) {
  const { ordProd, removeOrdProd } = props;

  return (
    <section id="cart-product">
      <p>
        <b>Product:</b> {ordProd.product.productName}
      </p>
      <p>
        <b>Price:</b> ${ordProd.product.currentPrice.toFixed(2)}
      </p>
      <button onClick={() => removeOrdProd(ordProd)}>Remove from Cart</button>
    </section>
  );
}

export default CartProduct;
