import React from "react";
import './Partner.css'
import PostList from "../../components/PostList/PostList";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection"; 
import img1 from "../../img/imgPartner/img1.webp";
import img2 from "../../img/imgPartner/img2.jpg";
import img3 from "../../img/imgPartner/img3.jpg";
import img4 from "../../img/imgPartner/img4.webp";
import img5 from "../../img/imgPartner/img5.webp";
import img6 from "../../img/imgPartner/img6.webp";

const posts = [
  {
    title: "Hshop.vn là đại lý ủy quyền chính thức của Benewake tại Việt Nam",
    image: img1,
    description: "Hshop.vn luôn nỗ lực và cố gắng để đem đến cho Quý Khách hàng những sản phẩm với chất lượng và dịch vụ tốt nhất"
  },
  {
    title: "Hshop.vn là đại lý ủy quyền chính thức của Slamtec RPLidar tại Việt Nam",
    image: img2,
    description: "Hshop.vn luôn nỗ lực và cố gắng để đem đến cho Quý Khách hàng những sản phẩm với chất lượng và dịch vụ tốt nhất"
  },
  {
    title: "Hshop.vn là đại lý ủy quyền chính thức của DFRobot tại Việt Nam",
    image: img3,
    description: "Hshop.vn luôn nỗ lực và cố gắng để đem đến cho Quý Khách hàng những sản phẩm với chất lượng và dịch vụ tốt nhất"
  },
  {
    title: "Hshop.vn là đại lý ủy quyền chính thức của Seeed Studio tại Việt Nam",
    image: img4,
    description: "Hshop.vn luôn nỗ lực và cố gắng để đem đến cho Quý Khách hàng những sản phẩm với chất lượng và dịch vụ tốt nhất"
  },
  {
    title: "Hshop.vn là đại lý ủy quyền chính thức của Arduino tại Việt Nam",
    image: img5,
    description: "Hshop.vn luôn nỗ lực và cố gắng để đem đến cho Quý Khách hàng những sản phẩm với chất lượng và dịch vụ tốt nhất"
  },
  {
    title: "Hshop.vn là đại lý ủy quyền chính thức của Waveshare tại Việt Nam",
    image: img6,
    description: "Hshop.vn luôn nỗ lực và cố gắng để đem đến cho Quý Khách hàng những sản phẩm với chất lượng và dịch vụ tốt nhất"
  },
];

const Infomation = () => {
  return (
    <div className="container-information">
    <div className="main-content">
    <IntroductionSection 
        title="ĐỐI TÁC" 
        description="Danh sách các Đối Tác, Nhà Cung Cấp mà Hshop.vn là Đại Lý Ủy Quyền tại Việt Nam."
      />
      <PostList posts={posts} />
    </div>
  </div>
  );
};

export default Infomation;
