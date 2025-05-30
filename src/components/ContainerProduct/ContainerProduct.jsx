import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ContainerProduct.css'

const ContainerProduct = ({ title, data }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [])

  return (
    <div className="container-product">
      <h1 className="title">| {title}</h1>
      <div className="product-grid ">
        {products.map((item, index) => (
          <ProductCard key={index} image={item.image} name={item.name} href={item.href} />
        ))}
      </div>
    </div>
  );
};

export default ContainerProduct;
