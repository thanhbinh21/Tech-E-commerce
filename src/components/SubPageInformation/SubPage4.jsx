import React from "react";
import './SubPage4.css';
import info2 from "../../img/imgInfo/info2.jpg";

const SubPage4 = () => {
  return (
    <div className="subpage-container">
      <div className="subpage-content">
        <h1 className="title">Hướng Dẫn Cài Đặt Hệ Điều Hành Cho Raspberry Pi</h1>

        <div className="posts">
          <div className="time-post f">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-clock fa-w-16"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z" className=""></path></svg>
            <div className="data-after">Thứ Sáu, 09/08/2024</div>
          </div>
          <div className="time-post">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-user fa-w-14"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" className=""></path></svg>
            <div className="data-after"><span>Hshop Support</span></div>
          </div>
        </div>

        <nav className="nav-section">
          <h2>Nội dung chính</h2>
          <ul>
            <li><a href="#overview">Tổng quan</a></li>
            <li><a href="#hardware">Yêu cầu phần cứng</a></li>
            <li><a href="#guide">Hướng dẫn cài đặt</a></li>
            <li><a href="#troubleshooting">Khắc phục sự cố</a></li>
          </ul>
        </nav>

        <div className="image-container">
          <img src={info2} alt="Hướng Dẫn Cài Đặt Hệ Điều Hành Raspberry Pi" className="project-image" />
          <p className="author">Tác giả: Nguyễn Hoàng Trung Sơn</p>
        </div>

        <section id="overview">
          <h2>Tổng Quan</h2>
          <p>
            Hướng dẫn cài đặt hệ điều hành Raspberry Pi OS cho Raspberry Pi. Quá trình cài đặt đơn giản, phù hợp với người mới bắt đầu và các dự án DIY sử dụng Raspberry Pi.
          </p>
        </section>

        <section id="hardware">
          <h2>Yêu Cầu Phần Cứng</h2>
          <ul>
            <li>Đầu đọc ghi thẻ nhớ</li>
            <li>Thẻ nhớ MicroSD tối thiểu 8GB</li>
            <li>Bộ nguồn ổn định cho Raspberry Pi</li>
            <li>Cáp HDMI và màn hình hiển thị</li>
          </ul>
        </section>

        <section id="guide">
          <h2>Hướng Dẫn Cài Đặt</h2>
          <ol>
            <li><strong>Chuẩn bị:</strong> Đảm bảo bạn có đầu đọc ghi thẻ nhớ và thẻ nhớ MicroSD với dung lượng ít nhất 8GB. Chọn thẻ có tốc độ đọc/ghi cao để đảm bảo hiệu suất.</li>
            <li><strong>Tải phần mềm Raspberry Pi Imager:</strong> Truy cập trang web của Raspberry Pi và tải phần mềm Raspberry Pi Imager phù hợp với hệ điều hành của bạn.</li>
            <li><strong>Kết nối thẻ nhớ:</strong> Cắm thẻ nhớ vào máy tính và mở phần mềm Raspberry Pi Imager.</li>
            <li><strong>Chọn hệ điều hành:</strong> Trong phần mềm, chọn hệ điều hành Raspberry Pi OS (32-bit) và ổ đĩa chứa thẻ nhớ, nhấn "Write" để bắt đầu cài đặt.</li>
            <li><strong>Hoàn tất:</strong> Sau khi cài đặt hoàn tất, rút thẻ nhớ và cắm vào Raspberry Pi để sử dụng.</li>
          </ol>
        </section>

        <section id="troubleshooting">
          <h2>Khắc Phục Sự Cố</h2>
          <h3>Máy không khởi động:</h3>
          <ul>
            <li>Kiểm tra nguồn điện: Đảm bảo bộ nguồn ổn định, sử dụng nguồn chính hãng Raspberry Pi.</li>
            <li>Không hiển thị màn hình qua HDMI: Thử cáp HDMI khác hoặc chỉnh sửa file "config.txt" để thay đổi dòng "dtoverlay=vc4-kms-v3d" thành "dtoverlay=vc4-fkms-v3d".</li>
          </ul>
          <h3>Lỗi thường gặp khác:</h3>
          <ul>
            <li><strong>Máy báo thiếu nguồn:</strong> Đảm bảo sử dụng bộ nguồn chất lượng tốt, tránh dùng các thiết bị ngoại vi tiêu thụ nhiều điện năng. Cần ngắt nguồn ngay khi thấy đèn nguồn chớp tắt.</li>
            <li><strong>Màn hình không hiển thị:</strong> Nếu vẫn không hiển thị dù đã thay cáp HDMI, thử thay đổi cấu hình trong file "config.txt" như hướng dẫn ở trên.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SubPage4;
