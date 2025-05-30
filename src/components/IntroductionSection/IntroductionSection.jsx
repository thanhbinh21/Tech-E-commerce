import React from 'react';
import './IntroductionSection.css';

const IntroductionSection = ({ title = "BÀI VIẾT", description = "Chuyên mục đăng các bài viết hướng dẫn sử dụng sản phẩm, hướng dẫn dự án, tin tức liên quan đến chuyên ngành: Điện Tử, Tự Động Hoá, Robotics, AI, IoT,..." }) => {
  return (
    <div className="introduction-section">
      <h3 id='title'>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default IntroductionSection;
