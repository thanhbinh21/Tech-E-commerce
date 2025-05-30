import { useEffect, useState } from "react";
import { ShoppingCart, FileText, CreditCard, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const EndPay = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
      {/* Stepper */}
      <div className="flex items-center justify-center p-4 bg-red-100 rounded-t-lg gap-4">
        <div className="flex items-center gap-2 text-gray-500">
          <ShoppingCart />
          <span>Giỏ hàng</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FileText />
          <span>Thông tin đặt hàng</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <CreditCard />
          <span>Thanh toán</span>
        </div>
        <div className="flex items-center gap-2 text-red-600 font-semibold">
          <CheckCircle className="text-red-600" />
          <span>Hoàn tất</span>
        </div>
      </div>

      {/* Success Message */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-green-600">Đặt hàng thành công!</h2>
        <p className="text-gray-600 mt-2">Cảm ơn bạn đã mua hàng. Chúng tôi sẽ xử lý đơn hàng của bạn trong thời gian sớm nhất.</p>
      </div>

      {/* Navigation Buttons */}
      <div className="p-4 flex flex-col gap-4">
        <Link to="/">
          <button className="w-full bg-red-600 text-white py-3 text-lg font-bold rounded">
            Trở về trang chủ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EndPay;
