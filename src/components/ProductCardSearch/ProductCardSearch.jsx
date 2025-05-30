import React from "react";
import { Link } from "react-router-dom";

const ProductCardSearch = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>; // Hoặc trả về một thông báo lỗi nếu cần
  }

  return (

 
            
    <div className="product-card-search flex flex-col items-center bg-white rounded-2xl p-4 shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
      {/* Hình ảnh sản phẩm */}
      <img
        src={product.image || "default-image-url"} 
        alt={product.name}
        className="w-32 h-32 object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-110"
      />

      {/* Tên sản phẩm */}
      <span className="text-lg font-semibold text-gray-800 text-center line-clamp-2 h-[4rem] hover:text-yellow-500 overflow-hidden text-ellipsis">
        {product.name}
      </span>

      {/* Giá sản phẩm */}
      <p className="text-lg font-bold text-red-600 mt-2">
        {new Intl.NumberFormat("vi-VN").format(product.price)}₫
      </p>

      {/* Nút xem chi tiết */}
      <Link
        to={`/product/${product.id}`}
        className="mt-3 px-4 py-2 bg-yellow-400 text-white font-bold rounded-lg transition duration-300 hover:bg-yellow-500"
      >
        Xem chi tiết
      </Link>
    </div>
  );
};

export default ProductCardSearch;
