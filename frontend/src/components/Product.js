import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} class="col4">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <Link to={`/product/product._id`}>
        <h4>{product.name}</h4>
      </Link>
      <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
      <p>Rs. {product.price}</p>
    </div>
  );
}
