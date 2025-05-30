import { useContext } from "react";
import { ShoppingCart, FileText, CreditCard, CheckCircle } from "lucide-react";
import { CartContext as cart } from "../../context/CartContext";
import { Link } from "react-router-dom";
const Pay = () => {
  const { cartItems } = useContext(cart);
  const shippingFee = 40000;
  
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <Link to="/">
        <button className="text-blue-500 text-sm">
        &lt; Mua thêm sản phẩm khác
        </button>
      </Link>        
      <div className="mt-4 border rounded-lg">
        {/* Stepper */}
        <div className="flex items-center p-4 bg-red-100 rounded-t-lg gap-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-red-600" />
            <span className="text-red-600 font-semibold">Giỏ hàng</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FileText />
            <span>Thông tin đặt hàng</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <CreditCard />
            <span>Thanh toán</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <CheckCircle />
            <span>Hoàn tất</span>
          </div>
        </div>

        {/* Cart Items */}
        <div className="p-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <span>{item.name} x {item.quantity}</span>
              <span>{(item.price * item.quantity).toLocaleString("vi-VN")}đ</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="p-4 border-b">
          <p className="text-gray-600">Phí vận chuyển: <span className="font-semibold">{shippingFee.toLocaleString("vi-VN")}đ</span></p>
          <p className="text-lg font-bold text-red-600">Tổng tiền: {(totalPrice + shippingFee).toLocaleString("vi-VN")}đ</p>
        </div>

        {/* Order Button */}
        <div className="p-4">
        <Link to="/InfoPay">
        <button className="w-full bg-red-600 text-white py-3 text-lg font-bold rounded">ĐẶT HÀNG NGAY</button>
        </Link> 
          
        </div>
      </div>
    </div>
  );
};

export default Pay;
