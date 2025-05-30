import React from "react";
import './SubPage2.css';
import info1 from "../../img/imgInfo/info1.jpg";

const SubPage2 = () => {
  return (
    <div className="subpage-container">
      <div className="subpage-content">
        <h1 className="title">Blynk Gate IoT Garden - Giới thiệu</h1>

        <div className="posts">
          <div className="time-post f">

            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-clock fa-w-16">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z" className=""></path>
            </svg>

            <div className="data-after">
              Thứ Tư,
              06/11/2024
            </div>

          </div>
          <div className="time-post">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-user fa-w-14">
              <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" className=""></path>
            </svg>
            <div className="data-after">
              <span>Hshop Support</span>
            </div>
          </div>
        </div>

        <nav className="nav-section">
          <h2>Nội dung chính</h2>
          <ul>
            <li><a href="#overview">Tính năng chính</a></li>
            <li><a href="#hardware">Các bài học</a></li>
            <li><a href="#guide">Github</a></li>
            <li><a href="#yeucau">Phần cứng yêu cầu</a></li>
          </ul>
        </nav>

        <div className="image-container">
          <img src={info1} alt="Blynk Gate IoT Garden" className="project-image" />
          <p className="author">Tác giả: Nguyễn Hoàng Trung Sơn</p>
        </div>
        <p>Blynk Gate IoT Garden là một dự án sử dụng Blynk Gate để quản lý và điều khiển các cảm biến, thiết bị trong hệ thống vườn IoT. Dự án tập trung vào việc giám sát nhiệt độ, độ ẩm không khí, độ ẩm đất, ánh sáng và tự động tưới nước cho cây trồng. Dữ liệu từ các cảm biến được gửi lên Blynk Cloud để theo dõi từ xa và điều khiển các thiết bị như máy bơm nước qua ứng dụng Blynk.</p>

        <section id="overview">
          <h2>Tính năng chính</h2>
          <ul dir="auto">
            <li>Giám sát nhiệt độ và độ ẩm không khí: Sử dụng cảm biến để theo dõi điều kiện nhiệt độ và độ ẩm không khí trong vườn.</li>
            <li>Giám sát độ ẩm đất: Sử dụng cảm biến độ ẩm đất để đo độ ẩm trong đất, giúp điều chỉnh việc tưới tiêu phù hợp.</li>
            <li>Cảm biến ánh sáng: Đo cường độ ánh sáng để bảo vệ cây trồng khỏi điều kiện ánh sáng quá mức hoặc thiếu ánh sáng.</li>
            <li>Tự động tưới nước: Điều khiển máy bơm tự động dựa trên độ ẩm đất, giúp tiết kiệm nước và đảm bảo cây trồng luôn đủ độ ẩm.</li>
            <li>Điều khiển từ xa qua ứng dụng Blynk: Người dùng có thể theo dõi và điều khiển hệ thống qua điện thoại từ bất kỳ đâu thông qua ứng dụng Blynk.</li>
          </ul>
        </section>

        <section id="hardware">
          <h2>Các bài học</h2>
          <ul>
            <br />
            <p>Bài 1: Sử dụng cảm biến nhiệt độ và độ ẩm</p>
            <li>Dự án bắt đầu với việc đo nhiệt độ và độ ẩm không khí bằng cảm biến DHT11. Dữ liệu này được gửi lên Blynk để người dùng có thể theo dõi từ xa qua ứng dụng.</li>
            <br />
            <p>Bài 2: Thêm cảm biến ánh sáng và độ ẩm đất</p>
            <li>Sau khi có dữ liệu từ nhiệt độ và độ ẩm không khí, dự án được mở rộng bằng cách thêm cảm biến ánh sáng và cảm biến độ ẩm đất để theo dõi điều kiện ánh sáng và độ ẩm trong đất. Điều này giúp tối ưu hóa việc chăm sóc cây trồng trong các điều kiện môi trường khác nhau.</li>
            <br />
            <p>Bài 3: Thêm máy bơm và màn hình LCD</p>
            <li>Ở bài này, chúng ta bổ sung máy bơm để tưới nước tự động dựa trên độ ẩm đất. Ngoài ra, một màn hình LCD được thêm vào để hiển thị thông tin trực tiếp như nhiệt độ, độ ẩm không khí và đất ngay tại chỗ, giúp theo dõi dễ dàng hơn mà không cần phải mở ứng dụng Blynk.</li>
          </ul>
        </section>

        <section id="guide">
          <h2>Hướng Dẫn Chi Tiết</h2>
          <p>
            Bạn có thể tham khảo mã nguồn tại: Github
          </p>
        </section>

        <section id="yeucau">
          <h2>Phần cứng yêu cầu</h2>
          <ul>
            <li>MKE-M16 Blynk Gate Wifi IoT Module</li>
            <li>Mạch Vietduino Uno USB-C (Arduino Uno Compatible)</li>
            <li>Mạch MakerEdu Shield for Vietduino</li>
            <li>Mạch hiển thị MKE-M07 LCD1602 I2C module</li>
            <li>Cảm biến độ ẩm nhiệt độ MKE-S14 DHT11 temperature and humidity sensor</li>
            <li>Cảm biến độ ẩm đất MKE-S13 soil moisture sensor</li>
            <li>Cảm biến ánh sáng quang trở MKE-S02 LDR light sensor</li>
            <li>Mạch đóng ngắt tải MKE-M05 optocoupler relay module</li>
            <li>Động cơ bơm nước R385 Water Pump 12VDC</li>
          </ul>

          <br />
          <p>Dự án này thích hợp cho các hệ thống nông nghiệp thông minh, giúp tự động hóa và giám sát môi trường vườn từ xa dễ dàng hơn, đặc biệt cho việc duy trì nhiệt độ, độ ẩm không khí, độ ẩm đất và điều kiện ánh sáng lý tưởng cho cây trồng.</p>
        </section>
      </div>
    </div>
  );
};

export default SubPage2;
