import { useState, useEffect } from "react";
import { useContext } from "react";
import { ShoppingCart, FileText, CreditCard, CheckCircle } from "lucide-react";
import { CartContext as cart, CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const PayMoney = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });
  const { cartItems } = useContext(cart);
  const { setTotal } = useContext(CartContext);
  const shippingFee = 40000;

  const handleRemoveCart = () => {
    cartItems.length = 0;
    setTotal(0);
  }

  useEffect(() => {
    try {
      const storedCustomerData = localStorage.getItem("customerData");
      if (storedCustomerData) {
        setCustomerInfo(JSON.parse(storedCustomerData));
      }
      
      const storedCartData = localStorage.getItem("cartData");
      if (storedCartData) {
        const parsedCart = JSON.parse(storedCartData);
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        } else {
          console.warn("Dữ liệu giỏ hàng không hợp lệ", parsedCart);
        }
      }
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ localStorage:", error);
    }
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <Link to="/InfoPay" className="text-blue-500 text-sm">&lt; Quay lại thông tin</Link>
      <div className="mt-4 border rounded-lg">
        {/* Stepper */}
        <div className="flex items-center p-4 bg-red-100 rounded-t-lg gap-4">
          <div className="flex items-center gap-2 text-gray-500">
            <ShoppingCart />
            <span>Giỏ hàng</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FileText />
            <span>Thông tin đặt hàng</span>
          </div>
          <div className="flex items-center gap-2 text-red-600 font-semibold">
            <CreditCard />
            <span>Thanh toán</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <CheckCircle />
            <span>Hoàn tất</span>
          </div>
        </div>

        {/* Customer Info Display */}
        <div className="p-4">
          <h2 className="text-lg font-semibold">Thông tin khách hàng</h2>
          <div className="mt-4 border p-3 rounded bg-gray-100">
            <p><strong>Họ và Tên:</strong> {customerInfo.name || "Chưa nhập"}</p>
            <p><strong>Số điện thoại:</strong> {customerInfo.phone || "Chưa nhập"}</p>
            <p><strong>Email:</strong> {customerInfo.email || "Chưa nhập"}</p>
            <p><strong>Địa chỉ:</strong> {customerInfo.address || "Chưa nhập"}</p>
          </div>
        </div>

        {/* Cart Items */}
        <div className="p-4 border-t">
          <h2 className="text-lg font-semibold">Sản phẩm trong giỏ hàng</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="flex justify-between mt-2 p-2 border rounded">
                <span>{item.name}</span>
                <span>{item.quantity} x {item.price.toLocaleString("vi-VN")} VND</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 mt-2">Giỏ hàng của bạn trống.</p>
          )}
        </div>

        {/* Pricing Summary */}
        <div className="p-4 border-t">
          <p className="text-gray-600">Phí vận chuyển: <span className="font-semibold">{shippingFee.toLocaleString("vi-VN")}đ</span></p>
          <p className="text-lg font-bold text-red-600">Tổng tiền: {(totalPrice + shippingFee).toLocaleString("vi-VN")}đ</p>
        </div>

        {/* Next Step Button */}
        <div className="p-4">
          <Link to="/EndPay">
            <button className="w-full bg-red-600 text-white py-3 text-lg font-bold rounded"
              onClick={handleRemoveCart}
            >
              Tiếp tục đến thanh toán
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PayMoney;
