import React from "react";
import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";

const PostPage = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
      {/* Tiêu đề bài viết */}
      <h1 className="text-3xl font-bold text-black">
        Hshop.vn là đại lý ủy quyền chính thức của Benewake tại Việt Nam
      </h1>
      
      {/* Thông tin bài viết */}
      <div className="flex items-center text-gray-600 mt-2 gap-4">
        <div className="flex items-center gap-2">
          <Clock size={18} />
          <span>Thứ Hai, 14/10/2024</span>
        </div>
        <div className="flex items-center gap-2">
          <User size={18} />
          <span>Hshop Admin</span>
        </div>
      </div>
      
      {/* Nội dung bài viết */}
      <p className="text-lg text-gray-800 mt-4 leading-relaxed">
        Hshop.vn luôn nỗ lực và cố gắng để đem đến cho Quý Khách hàng những sản phẩm với chất lượng
        và dịch vụ tốt nhất. Hiện Hshop.vn là đại lý ủy quyền chính thức của
        <span className="text-blue-600 font-semibold"> Benewake </span>
        với các sản phẩm cảm biến Lidar cao cấp cho Robot tự hành tại Việt Nam.
      </p>
      
      {/* Danh sách sản phẩm */}
      <p className="mt-4 font-semibold">
        Tham khảo các sản phẩm của Benewake đang phân phối tại Hshop.vn: 
        <Link to="/benewake" className="text-blue-600"> Benewake</Link> - 
        <Link to="/tflidar" className="text-blue-600"> TFLIDAR</Link>
      </p>
      
      {/* Video */}
      <div className="mt-6">
        <iframe
          width="100%"
          height="400"
          className="rounded-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Benewake LiDAR Sensor"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PostPage;
