import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại

  // Hàm kiểm tra active
  const getActiveClass = (path) => {
    return location.pathname === path ? "text-[rgb(0,15,143)] font-semibold" : "";
  };

  return (
    <div className="nav-bar w-full bg-white justify-center flex mt-auto ">
      <nav className="navbar max-w-7xl w-full">
        <ul className="nav-links w-full mx-auto">
          <li>
            <Link to="/" className={`nav-link ${getActiveClass("/")}`}>
              Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/product" className={`nav-link ${getActiveClass("/product")}`}>
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link to="/information" className={`nav-link ${getActiveClass("/information")}`}>
              Thông tin
            </Link>
          </li>
          <li>
            <Link to="/partner" className={`nav-link ${getActiveClass("/partner")}`}>
              Đối tác
            </Link>
          </li>
          <li>
            <Link to="/advertise" className={`nav-link ${getActiveClass("/advertise")}`}>
              Tuyển dụng & Quảng cáo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;