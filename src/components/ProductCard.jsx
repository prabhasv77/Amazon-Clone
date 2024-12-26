import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-name">
        <p>{product.title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
