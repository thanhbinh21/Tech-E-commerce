import { useState, useEffect } from "react";
import { ShoppingCart, FileText, CreditCard, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const InfoPay = () => {
  const navigate = useNavigate();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [cartItems, setCartItems] = useState([]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });

    // Lưu vào localStorage
    localStorage.setItem("customerData", JSON.stringify({ ...customerInfo, [name]: value }));

    // Xóa lỗi khi người dùng nhập lại
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!customerInfo.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
    if (!customerInfo.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
    if (!customerInfo.email.trim()) newErrors.email = "Vui lòng nhập email";
    if (!customerInfo.address.trim()) newErrors.address = "Vui lòng nhập địa chỉ";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateForm()) {
      navigate("/PayMoney");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <Link to="/cart" className="text-blue-500 text-sm">&lt; Quay lại giỏ hàng</Link>
      <div className="mt-4 border rounded-lg">
        {/* Stepper */}
        <div className="flex items-center p-4 bg-red-100 rounded-t-lg gap-4">
          <div className="flex items-center gap-2 text-gray-500">
            <ShoppingCart />
            <span>Giỏ hàng</span>
          </div>
          <div className="flex items-center gap-2 text-red-600 font-semibold">
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

        {/* Customer Info Form */}
        <div className="p-4">
          <h2 className="text-lg font-semibold">Thông tin khách hàng</h2>
          
          {/* Họ và tên */}
          <div className="mt-4">
            <label className="block text-sm font-medium">Họ và Tên</label>
            <input 
              type="text" 
              name="name" 
              value={customerInfo.name} 
              onChange={handleChange} 
              className={`w-full border p-2 rounded mt-1 ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Số điện thoại */}
          <div className="mt-4">
            <label className="block text-sm font-medium">Số điện thoại</label>
            <input 
              type="text" 
              name="phone" 
              value={customerInfo.phone} 
              onChange={handleChange} 
              className={`w-full border p-2 rounded mt-1 ${errors.phone ? "border-red-500" : ""}`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block text-sm font-medium">Email</label>
            <input 
              type="email" 
              name="email" 
              value={customerInfo.email} 
              onChange={handleChange} 
              className={`w-full border p-2 rounded mt-1 ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Địa chỉ */}
          <div className="mt-4">
            <label className="block text-sm font-medium">Địa chỉ</label>
            <input 
              type="text" 
              name="address" 
              value={customerInfo.address} 
              onChange={handleChange} 
              className={`w-full border p-2 rounded mt-1 ${errors.address ? "border-red-500" : ""}`}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>
        </div>

        {/* Next Step Button */}
        <div className="p-4">
          <button 
            onClick={handleNextStep}
            className="w-full bg-red-600 text-white py-3 text-lg font-bold rounded"
          >
            Tiếp tục đến thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoPay;
