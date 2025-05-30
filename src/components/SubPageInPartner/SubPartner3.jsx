import React from "react";
import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";
import img1 from "../../img/imgPartner/SupPartner3.webp"

const PostPage3 = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
      {/* Tiêu đề bài viết */}
      <h1 className="text-3xl font-bold text-black">
        Hshop.vn là đại lý ủy quyền chính thức của DFRobot tại Việt Nam
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
      <p className="text-gray-700 mt-4 leading-7">
        Hshop.vn luôn nỗ lực và cố gắng để đem đến cho Quý Khách hàng những sản phẩm với chất lượng và dịch vụ tốt nhất, 
        hiện Hshop.vn là đại lý ủy quyền chính thức của DFRobot tại Việt Nam với các sản phẩm Cảm biến, Module, Mạch Lập Trình,..., chi tiết xin xem tại link dưới đây:
      </p>

      {/* Phần tham khảo sản phẩm */}
      <h2 className="text-lg font-bold text-black mt-4">
      Asia / Vietnam: <a href="https://www.dfrobot.com/distributor">https://www.dfrobot.com/distributor</a>
      </h2>
      <p>
      Tham khảo các sản phẩm của DFRobot đang phân phối tại Hshop.vn: DFRobot
      </p>

      {/* Hình ảnh hoặc Video */}
      <div className="mt-6">
        <img
          src= {img1}
          alt="Slamtec RPLidar"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default PostPage3;
