import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import user from "../../img/user-icon.png";
import iconmap from "../../img/icon/map.png";
import iconsupport from "../../img/icon/support.png";
import iconcart from "../../img/icon/cart.png";
import "./Header.css";
import { CartContext } from "../../context/CartContext";
import SearchBox from "../SearchBox/SearchBox";
import Dropdown from "../Dropdown/Dropdown";
import { UserContext } from "../../context/UserContect";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { total } = useContext(CartContext);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const { userLogin } = useContext(UserContext);

  // Updated categories based on your product data
  const categories = [
    {
      title: "Laptop",
      subCategories: [
        {
          title: "Laptop Gaming",
          brands: ["ASUS", "MSI", "Acer", "Dell", "HP", "Razer"],
        },
        {
          title: "Khoảng giá",
          ranges: ["Dưới 25 triệu", "25-50 triệu", "50-100 triệu", "Trên 100 triệu"],
        },
      ],
    },
    {
      title: "Bàn phím",
      subCategories: [
        {
          title: "Bàn phím cơ",
          brands: ["AKKO", "Logitech", "Razer", "Corsair", "SteelSeries", "HyperX"],
        },
        {
          title: "Khoảng giá",
          ranges: ["Dưới 2 triệu", "2-3 triệu", "3-5 triệu", "Trên 5 triệu"],
        },
      ],
    },
    {
      title: "Chuột",
      subCategories: [
        {
          title: "Thương hiệu",
          brands: ["Razer", "Corsair", "SteelSeries", "ASUS", "HyperX"],
        },
        {
          title: "Khoảng giá",
          ranges: ["Dưới 1 triệu", "1-2 triệu", "Trên 2 triệu"],
        },
      ],
    },
    {
      title: "Tai nghe",
      subCategories: [
        {
          title: "Thương hiệu",
          brands: ["Logitech", "Razer", "Corsair", "SteelSeries", "HyperX"],
        },
        {
          title: "Khoảng giá",
          ranges: ["Dưới 3 triệu", "3-5 triệu", "Trên 5 triệu"],
        },
      ],
    },
    {
      title: "Linh kiện",
      subCategories: [
        {
          title: "Tản nhiệt",
          brands: ["DEEPCOOL", "Lian Li", "Noctua", "NZXT"],
        },
        {
          title: "Card màn hình",
          brands: ["ASUS", "MSI", "GIGABYTE", "ZOTAC", "INNO3D"],
        },
        {
          title: "Nguồn máy tính",
          brands: ["Corsair", "Cooler Master", "ASUS", "Seasonic", "Antec"],
        },
      ],
    },
    {
      title: "Thiết bị âm thanh",
      subCategories: [
        {
          title: "Loa",
          brands: ["Creative", "Logitech", "Razer"],
        },
        {
          title: "Khoảng giá",
          ranges: ["Dưới 1 triệu", "1-2 triệu", "Trên 2 triệu"],
        },
      ],
    },
  ];

  const handleItemClick = (itemTitle) => {
    navigate(`/productfillter?category=${encodeURIComponent(itemTitle)}`);
    setShowCategoryModal(false);
  };

  const handleManufacturerClick = (manufacturer) => {
    navigate(`/productfillter?manufacturer=${encodeURIComponent(manufacturer)}`);
    setShowCategoryModal(false);
  };

  const handlePriceRangeClick = (range) => {
    // This would need to be implemented based on your actual filtering logic
    let minPrice, maxPrice;
    
    if (range === "Dưới 1 triệu") {
      minPrice = 0;
      maxPrice = 1000000;
    } else if (range === "1-2 triệu") {
      minPrice = 1000000;
      maxPrice = 2000000;
    } else if (range === "2-3 triệu") {
      minPrice = 2000000;
      maxPrice = 3000000;
    } else if (range === "3-5 triệu") {
      minPrice = 3000000;
      maxPrice = 5000000;
    } else if (range === "Dưới 2 triệu") {
      minPrice = 0;
      maxPrice = 2000000;
    } else if (range === "Dưới 3 triệu") {
      minPrice = 0;
      maxPrice = 3000000;
    } else if (range === "Dưới 25 triệu") {
      minPrice = 0;
      maxPrice = 25000000;
    } else if (range === "25-50 triệu") {
      minPrice = 25000000;
      maxPrice = 50000000;
    } else if (range === "50-100 triệu") {
      minPrice = 50000000;
      maxPrice = 100000000;
    } else if (range === "Trên 5 triệu") {
      minPrice = 5000000;
      maxPrice = 999999999;
    } else if (range === "Trên 2 triệu") {
      minPrice = 2000000;
      maxPrice = 999999999;
    } else if (range === "Trên 100 triệu") {
      minPrice = 100000000;
      maxPrice = 999999999;
    }
    
    navigate(`/productfillter?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    setShowCategoryModal(false);
  };

  return (
    <header className="header w-full h-full bg-blue-900 text-white sticky top-0 z-50 text-sm">
      {showCategoryModal && (
        <div
          className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-start justify-center pt-30 z-50"
          onClick={() => setShowCategoryModal(false)}
        >
          <div
            className="bg-white w-full max-w-6xl rounded-lg shadow-lg p-6 relative text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCategoryModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              DANH MỤC SẢN PHẨM
            </h2>

            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-1 border-r pr-4">
                {categories.map((category) => (
                  <div
                    key={category.title}
                    onMouseEnter={() => setActiveCategory(category)}
                    className={`p-3 rounded cursor-pointer ${
                      activeCategory?.title === category.title
                        ? "bg-blue-100 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {category.title}
                  </div>
                ))}
              </div>

              {activeCategory && (
                <div className="col-span-3 grid grid-cols-3 gap-6">
                  {activeCategory.subCategories.map((subCategory) => (
                    <div key={subCategory.title} className="space-y-2">
                      <h3 className="font-semibold text-lg mb-2">
                        {subCategory.title}
                      </h3>
                      <ul className="space-y-1">
                        {subCategory.brands && subCategory.brands.map((brand) => (
                          <li
                            key={brand}
                            className="hover:text-blue-600 cursor-pointer text-sm"
                            onClick={() => handleManufacturerClick(brand)}
                          >
                            {brand}
                          </li>
                        ))}
                        {subCategory.types && subCategory.types.map((type) => (
                          <li
                            key={type}
                            className="hover:text-blue-600 cursor-pointer text-sm"
                            onClick={() => handleItemClick(type)}
                          >
                            {type}
                          </li>
                        ))}
                        {subCategory.ranges && subCategory.ranges.map((range) => (
                          <li
                            key={range}
                            className="hover:text-blue-600 cursor-pointer text-sm"
                            onClick={() => handlePriceRangeClick(range)}
                          >
                            {range}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="header-container flex items-center justify-between space-x-8 max-w-7xl mx-auto">
        <div className="logo flex items-center justify-items-start">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className=" object-cover rounded-2xl m-2"
            />
          </Link>
        </div>

        <button
          onClick={() => setShowCategoryModal(true)}
          className="menu-btn bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded z-50"
        >
          ☰ Danh mục
        </button>

        <div className="search-box flex items-center bg-white rounded-full border border-blue-600 mr-40">
          <SearchBox />
        </div>

        <nav className="menu-links flex items-center space-x-5 font-bold">
         <Link to="/contact" className="hover:text-blue-300 text-center flex items-center space-x-2">
            <img src={iconmap} alt="map-icon" className="h-5 w-5" />
            <span>Liên hệ</span>
          </Link>

        
          <Link
            to="/guide"
            className="hover:text-blue-300 text-center flex items-center space-x-2"
          >
            <img
              src={iconsupport}
              alt="clipboard-icon"
              className="h-5 w-5 mb-1"
            />
            <div className="flex flex-col  text-center">
              <span>Hướng dẫn</span>
            </div>
          </Link>
          <Link
            to="/cart"
            className="cart flex items-center hover:text-blue-300 relative space-x-2"
          >
            <img src={iconcart} alt="cart-icon" className="h-5 w-5 font-bold" />
            <div className="flex flex-col">
              <span>Giỏ hàng</span>
              <span className="cart-count m-auto bg-red-500 text-[10px] text-white rounded-full w-4 h-4 flex items-center justify-center absolute top-[-10px] left-[10px]">
                {total}
              </span>
            </div>
          </Link>

          <div
            className="account flex flex-col items-center justify-center bg-blue-800 text-white hover:bg-blue-600 rounded-lg px-4 py-2 transition-colors duration-200"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <img src={userLogin.img} alt="user-icon" className="h-6 w-6 user-icon" />
            <span className="text-sm user-name">{userLogin.name}</span>
            <Dropdown
              isOpen={isOpen}
              links={[
                { label: "🔑 Đăng nhập", path: "/login" },
                { label: "➕ Đăng ký", path: "/createaccount" },
              ]}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;