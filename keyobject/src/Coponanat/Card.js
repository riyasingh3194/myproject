import React from 'react'

export default function Card({ productDetail }) {
    return (
      <div className="card">
        <img src={productDetail.image} alt={productDetail.name} />
        <h2>{productDetail.name}</h2>
        <p>{productDetail.description}</p>
        <p>Price: {productDetail.price}</p>
      </div>
    );
  }