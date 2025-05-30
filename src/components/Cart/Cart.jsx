import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

const formatPrice = (price) => price.toLocaleString("vi-VN") + "đ";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const handleIncreaseQuantity = (product) => {
    addToCart(product, 1);
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      addToCart(product, -1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold border-b pb-2">Thông tin sản phẩm</h2>
      <div className="divide-y">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center py-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="ml-4 flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
              <button
                className="text-red-500 text-sm mt-1"
                onClick={() => handleRemoveItem(item.id)} 
              >
                Xóa
              </button>
            </div>
            <p className="w-24 text-center">{formatPrice(item.price)}</p>
            <div className="flex items-center border border-gray-300 rounded-lg mx-4">
              <button
                className="px-2 py-1 text-lg"
                onClick={() => handleDecreaseQuantity(item)} 
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                className="px-2 py-1 text-lg"
                onClick={() => handleIncreaseQuantity(item)} 
              >
                +
              </button>
            </div>
            <p className="w-24 text-center">{formatPrice(item.price * item.quantity)}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4 text-lg font-semibold">
        <span>Tổng tiền:</span>
        <span>{formatPrice(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0))}</span>
      </div>
      <Link to="/Pay">
      <button
        className={`w-full py-2 mt-4 rounded-lg ${
          cartItems.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
        disabled={cartItems.length === 0}
      >
        Thanh toán
      </button>
      </Link>

    </div>
  );
}