import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import zalo from "../../img/zalo.png";
import facebook from "../../img/facebook.png";
import youtube from "../../img/youtube.png";
import logo_ft from "../../img/logo-ft.png";

const Footer = () => {
  return (
    <footer className="footer w-full  ">
      <div className="footer-container w-full  mx-auto ">
        {/* Đăng ký email */}
        <div className="footer-top max-w-7xl flex justify-around m-auto">
          <div className="send-email">
            <input type="email" placeholder="Nhập email nhận tin khuyến mãi" />
            <button className="subscribe-btn">ĐĂNG KÝ</button>
          </div>
          <div className="social-icons">
            <span>Kết nối với chúng tôi:</span>
            <Link to="/">
              <img src={zalo} alt="Zalo" />
            </Link>
            <Link to="/">
              <img src={facebook} alt="Facebook" />
            </Link>
            <Link to="/">
              <img src={youtube} alt="YouTube" />
            </Link>
          </div>
        </div>

        {/* Các cột thông tin */}
        <div className="footer-columns w-full">
          <div className="columns">
            <div className="column">
              <h3>CHÍNH SÁCH</h3>
              <a href="#">Chính sách vận chuyển</a>
              <a href="#">Chính sách bảo hành</a>
              <a href="#">Chính sách đổi hàng</a>
              <a href="#">Chính sách bảo mật</a>
            </div>
            <div className="column">
              <h3>HỖ TRỢ</h3>
              <a href="#">Hướng dẫn mua hàng</a>
              <a href="#">Thông tin liên hệ</a>
              <a href="#">Sản phẩm yêu thích</a>
              <a href="#">So sánh sản phẩm</a>
            </div>
            <div className="column">
              <h3>TÀI KHOẢN</h3>
              <a href="#">Đăng ký tài khoản</a>
              <a href="#">Đăng nhập tài khoản</a>
              <a href="#">Giỏ hàng của bạn</a>
            </div>
            <div className="column">
              <h3>THÔNG TIN</h3>
              <a href="#">Hshop Channel</a>
              <a href="#">Bài viết</a>
              <a href="#">Đối tác</a>
              <a href="#">Tuyển dụng & Quảng cáo</a>
            </div>
          </div>
        </div>

        {/* Thông tin liên hệ */}
        <div className="footer-contact">
          <div className="columns">
            <div className="footer-logo">
              <img src={logo_ft} alt="HSHOP" />
              <p>
                Hshop (Hardware Shop) là cửa hàng chuyên bán các sản phẩm phần
                cứng Điện tử & Robot...
              </p>
            </div>
            <div className="contact-info">
              <h3>THÔNG TIN LIÊN HỆ</h3>
              <p>
                <strong>Địa chỉ:</strong> 269/20 Lý Thường Kiệt, Phường 15, Quận
                11, TP.HCM
              </p>
              <p>
                <strong>Giờ làm việc:</strong> Thứ 2 - Thứ 7: 8h00 đến 18h30
              </p>
              <p>
                <strong>Email:</strong> contact.hshopvn@gmail.com
              </p>
              <p>
                <strong>Điện thoại:</strong> 028.6670.4455 - 0934.022.500
              </p>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="footer-bottom">
          (c) by Hshop.vn, nội dung website được chúng tôi trộm từ Hshop.vn và
          Gearvn.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
