import React from "react";
import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";
import img1 from "../../img/imgPartner/SupPartner5.1.webp"
import img2 from "../../img/imgPartner/SupPartner5.2.webp"


const PostPage5 = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
      {/* Tiêu đề bài viết */}
      <h1 className="text-3xl font-bold text-black">
      Hshop.vn là đại lý ủy quyền chính thức của Arduino tại Việt Nam
      </h1>

      {/* Thông tin tác giả và ngày đăng */}
      <div className="flex items-center text-gray-600 text-sm mt-3">
        <Clock className="w-4 h-4 mr-2" />
        <span>Thứ Hai, 14/10/2024</span>
        <span className="mx-3">|</span>
        <User className="w-4 h-4 mr-2" />
        <span>Hshop Admin</span>
      </div>

      {/* Nội dung bài viết */}
      <div className="mt-6">
        <img
          src= {img1}
          alt="Slamtec RPLidar"
          className="w-full rounded-lg shadow-md"
        />
      </div>
      <p className="text-gray-700 mt-4 leading-7">
      Hshop.vn luôn nỗ lực và cố gắng để đem đến cho Quý Khách hàng những sản phẩm với chất lượng và dịch vụ tốt nhất,
       hiện Hshop.vn chính thức là đại lý chính hãng ủy quyền của Arduino.cc tại Việt Nam, chi tiết xin xem tại link dưới đây:
      </p>

      {/* Phần tham khảo sản phẩm */}
      <h2 className="text-lg font-bold text-black mt-4">
      Asia / Vietnam: <a href="https://store-usa.arduino.cc/pages/distributors ">https://store-usa.arduino.cc/pages/distributors </a>
      </h2>
      <p>
      Tham khảo các sản phẩm Arduino chính hãng đang phân phối tại Hshop.vn: Arduino (Original - Made In Italy)
      </p>

      {/* Hình ảnh hoặc Video */}
      <div className="mt-6">
        <img
          src= {img2}
          alt="Slamtec RPLidar"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default PostPage5;
