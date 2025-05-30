import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, href }) => {
    return (
    <div className="product-card ">
      <Link to={href}><img src={image} alt={name} className="m-auto" /></Link>
      <p>{name}</p>
    </div>
  );
};

export default ProductCard;
