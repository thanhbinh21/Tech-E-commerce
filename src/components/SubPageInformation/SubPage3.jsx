import React from "react";
import './SubPage3.css'
import info1 from "../../img/imgInfo/info1.jpg";

const SubPage3 = () => {
  return (
    <div className="subpage-container">
      <div className="subpage-content">
        <h1 className="title">Blynk Gate IoT Garden - P2: Giám sát ánh sáng & độ ẩm đất IoT sử dụng Arduino</h1>

        <div className="posts">
          <div className="time-post f">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-clock fa-w-16">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z" />
            </svg>
            <div className="data-after">
              Thứ Tư, 06/11/2024
            </div>
          </div>
          <div className="time-post">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-user fa-w-14">
              <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
            </svg>
            <div className="data-after">
              <span>Hshop Support</span>
            </div>
          </div>
        </div>

        <nav className="nav-section">
          <h2>Nội dung chính</h2>
          <ul>
            <li><a href="#overview">Tổng quan</a></li>
            <li><a href="#hardware">Yêu cầu phần cứng</a></li>
            <li><a href="#guide">Hướng dẫn chi tiết</a></li>
            <li><a href="#video">Video</a></li>
          </ul>
        </nav>

        <div className="image-container">
          <img src={info1} alt="Blynk Gate IoT Garden" className="project-image" />
          <p className="author">Tác giả: Nguyễn Hoàng Trung Sơn</p>
        </div>

        <section id="overview">
          <h2>Tổng Quan</h2>
          <p>
            Trong bài này bạn sẽ học cách mở rộng hệ thống vườn thông minh của mình bằng cách thêm hai loại cảm biến mới: cảm biến ánh sáng và cảm biến độ ẩm đất. Điều này sẽ giúp bạn giám sát và điều khiển hệ thống tưới nước một cách tự động dựa trên các điều kiện thực tế của đất và ánh sáng.
          </p>
          <p>Trong dự án này, chúng ta sẽ:</p>
          <ul>
            <li>Sử dụng cảm biến ánh sáng quang trở để đo cường độ ánh sáng môi trường.</li>
            <li>Sử dụng cảm biến độ ẩm đất để đo độ ẩm của đất.</li>
            <li>Kết nối <strong>Arduino</strong> với <strong>Blynk Cloud</strong> thông qua module Wi-Fi <strong>BlynkGate</strong>.</li>
            <li>Gửi dữ liệu cảm biến lên <strong>Blynk Cloud</strong> và hiển thị qua ứng dụng Blynk.</li>
          </ul>
        </section>

        <section id="hardware">
          <h2>Yêu Cầu Phần Cứng</h2>
          <ul>
            <li>MKE-M16 Blynk Gate Wifi IoT Module</li>
            <li>Mạch Vietduino Uno USB-C (Arduino Uno Compatible)</li>
            <li>Mạch MakerEdu Shield for Vietduino</li>
            <li>Mạch hiển thị MKE-M07 LCD1602 I2C module</li>
            <li>Cảm biến độ ẩm đất MKE-S13 soil moisture sensor</li>
            <li>Cảm biến ánh sáng quang trở MKE-S02 LDR light sensor</li>
          </ul>
        </section>

        <section id="guide">
          <h2>Hướng Dẫn Chi Tiết</h2>
          <p>
            Bạn có thể tham khảo mã nguồn tại: Github
          </p>
        </section>

      </div>
    </div>
  );
};

export default SubPage3;
