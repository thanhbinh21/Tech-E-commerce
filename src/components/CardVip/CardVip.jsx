import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CardVip.css";
import CartSuccessNotification from "../Cart/CartSuccessNotification ";

const CardVip = ({ id, image, name, price }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  
  const handleClick = () => {
    const MAX_VIEWED_PRODUCTS = 4;
    const storedViewedProducts = JSON.parse(
      localStorage.getItem("viewedProducts") || "[]"
    );
    const filteredViewed = storedViewedProducts.filter((p) => p.id !== id);
    const newViewed = [{ id, name, image, price }, ...filteredViewed].slice(
      0,
      MAX_VIEWED_PRODUCTS
    );
    localStorage.setItem("viewedProducts", JSON.stringify(newViewed));
    navigate(`/product/${id}`);
  };

  const handleCartSuccess = (product) => {
    setShowCartNotification(true);
    setAddedProduct(product);
    setTimeout(() => setShowCartNotification(false), 2000); 
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const product = { id, name, price, image };
    addToCart(product);
    handleCartSuccess(product);
  };

  return (
    <>
      <div
        className="card-vip flex flex-col items-center bg-white rounded-2xl p-4 shadow-md cursor-pointer  overflow-hidden"
        onClick={handleClick}
      >
        <img src={image} alt={name} className="m-auto object-cover" />
        <br />
        <span className="product-name line-clamp-2 h-[3rem] hover:text-yellow-200 ">
          {name}
        </span>
        <p className="product-price">
          {price ? price.toLocaleString("vi-VN") + "đ" : "Giá không có sẵn"}
        </p>
        <div className="card-actions flex justify-between mt-2">
          <button
            className="font-bold hover:text-amber-200 transition duration-300 ease-in-out"
            onClick={handleAddToCart}
          >
            🛒 Thêm giỏ hàng
          </button>
        </div>
      </div>

      {showCartNotification && addedProduct && (
        <CartSuccessNotification
          product={addedProduct}
          isVisible={showCartNotification}
          onClose={() => setShowCartNotification(false)}
        />
      )}
    </>
  );
};

export default CardVip;
