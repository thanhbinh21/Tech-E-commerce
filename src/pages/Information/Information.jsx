import React from "react";
import { Link } from "react-router-dom"; // Import Link để điều hướng
import "./Information.css";
import PostList from "../../components/PostList/PostList";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import info1 from "../../img/imgInfo/info1.jpg";
import info2 from "../../img/imgInfo/info2.jpg";

const posts = [
  {
    title: "Blynk Gate IoT Garden - P1: Giám sát Nhiệt độ và Độ ẩm IoT",
    author: "Nguyễn Hoàng Trung Sơn",
    image: info1,
    description: "Tổng quan về dự án sử dụng Arduino..."
  },
  {
    title: "Blynk Gate IoT Garden - Giới thiệu",
    author: "Nguyễn Hoàng Trung Sơn",
    image: info1,
    description: "Blynk Gate IoT Garden là một dự án sử dụng Blynk..."
  },
  {
    title: "Blynk Gate IoT Garden - P2: Giám sát ánh sáng & độ ẩm đất",
    author: "Nguyễn Hoàng Trung Sơn",
    image: info1,
    description: "Trong bài này bạn sẽ học cách mở rộng hệ thống..."
  },
  {
    title: "Hướng dẫn cài đặt hệ điều hành cho Raspberry Pi",
    author: "Nguyễn Hoàng Trung Sơn",
    image: info2,
    description: "Bạn có thể tham khảo hướng dẫn cài đặt hệ điều hành Raspberry..."
  }

];

const Infomation = () => {
  return (
    <div className="information">
      <div className="content">
        <IntroductionSection />
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Infomation;
