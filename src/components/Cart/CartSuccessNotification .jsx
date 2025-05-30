import { useEffect } from "react";
import { Link } from "react-router-dom";

const CartSuccessNotification = ({ product, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, 3000);

      return () => clearTimeout(timer); 
    }
  }, [isVisible, onClose]);

  if (!isVisible || !product) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 w-[500px] z-50 bg-white shadow-md rounded-lg p-4 
        transition-transform duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-green-600 font-medium">Thêm vào giỏ hàng thành công</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-20 h-20 border rounded p-1 mr-4">
            <img
              src={product.image || product.images?.[0]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-medium text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500">Đã thêm vào giỏ hàng của bạn</p>
          </div>
        </div>

        <Link
          to="/cart"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-center font-medium"
        >
          XEM GIỎ HÀNG
        </Link>
      </div>
    </div>
  );
};

export default CartSuccessNotification;
