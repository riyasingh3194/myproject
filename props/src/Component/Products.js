import React from 'react';
import "./Products.css"
function Products({ product }) {
  const { productId, productPic, productName, Brand, productDescription, Price, Rating } = product;

  function addToCart() {
    alert(`Product ${productId}, which is ${productName} of brand ${Brand} and costs ${Price} has been added to your cart. Please proceed to pay!`);
  }

  return (
    <div className="product-card">
      <img src={productPic} alt={productName} />
      <h3>{productName}</h3>
      <p>{Brand}</p>
      <p>{productDescription}</p>
      <p>Price: {Price}</p>
      <p>Rating: {Rating}/5</p>
      <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Products;
