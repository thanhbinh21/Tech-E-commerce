import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext"; // Import context
import iconsearch from "../../img/icon/icon-search.png"; // Import icon
import "./SearchBox.css"; // Import CSS file
import SearchNoResultNotification from './SearchNoResultNotification'; // Import component thông báo

const SearchBox = () => {
  const { products } = useContext(ProductContext); // Lấy dữ liệu sản phẩm từ context
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isNoResultVisible, setIsNoResultVisible] = useState(false); // Thông báo khi không có kết quả tìm kiếm
  const [isEmptySearch, setIsEmptySearch] = useState(false); // Thông báo khi không nhập gì
  const navigate = useNavigate();

  // Hàm xử lý nhập từ khóa
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      setIsNoResultVisible(false);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setIsNoResultVisible(filtered.length === 0); // Hiển thị thông báo nếu không có sản phẩm
    }
  };

  // Hàm xử lý khi nhấn Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (searchTerm.trim() === "") {
        setIsEmptySearch(true); // Hiển thị thông báo khi không có gì nhập
        // Đặt timeout để ẩn thông báo sau 5 giây
        setTimeout(() => {
          setIsEmptySearch(false);
        }, 3000);
      } else {
        navigate(`/productfillter?name=${encodeURIComponent(searchTerm)}`);
        setSearchTerm(""); 
        setSuggestions([]);
        setIsEmptySearch(false); // Tắt thông báo khi có dữ liệu nhập
      }
    }
  };

  // Hàm xử lý khi nhấn vào nút tìm kiếm
  const handleSearchClick = () => {
    if (searchTerm.trim() === "") {
      setIsEmptySearch(true); // Hiển thị thông báo khi không có gì nhập
      // Đặt timeout để ẩn thông báo sau 5 giây
      setTimeout(() => {
        setIsEmptySearch(false);
      }, 3000);
    } else {
      navigate(`/productfillter?name=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(""); 
      setSuggestions([]);
      setIsEmptySearch(false); // Tắt thông báo khi có dữ liệu nhập
    }
  };

  // Hàm xử lý khi chọn một sản phẩm từ dropdown
  const handleSelect = (product) => {
    const relatedProductIds = products
      .filter((p) => p.category === product.category) // Lọc các sản phẩm có cùng danh mục
      .map((p) => p.id); // Lấy danh sách id sản phẩm liên quan
  
    navigate(`/product/${product.id}?related=${relatedProductIds.join(",")}`); 
    setSearchTerm(""); 
    setSuggestions([]); 
  };

  // Hàm xử lý khi nhấn vào nút "Xem tất cả"
  const handleSeeMore = () => {
    setSearchTerm("");
    setSuggestions([]);
    navigate(`/productfillter?name=${encodeURIComponent(searchTerm)}`);
  };

  // Hàm đếm số lượng sản phẩm tìm được
  const getTotalSuggestions = () => {
    return suggestions.length;
  };

  return (
    <div className="search-box flex items-center bg-white rounded-full border border-blue-600 relative">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm"
        className="px-4 py-2 text-black w-64 rounded-full focus:outline-none"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress} // Bắt sự kiện khi nhấn Enter
      />
      <button
        className="h-full w-[20%] search-btn px-4 py-3 text-blue-600 hover:bg-yellow-400 hover:text-white transition-colors duration-200 rounded-full"
        onClick={handleSearchClick} // Bắt sự kiện khi nhấn vào nút tìm kiếm
      >
        <img src={iconsearch} alt="iconsearch" className="h-[21px] object-cover" />
      </button>

      {/* Dropdown gợi ý */}
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-1 z-50 max-h-256 overflow-y-auto">
          {/* Hiển thị số lượng sản phẩm tìm được */}
          <li className="px-4 py-2 text-center font-bold text-black">
            Tìm thấy {getTotalSuggestions()} sản phẩm
          </li>
          {suggestions.slice(0, 4).map((product) => (
            <li
              key={product.id}
              className="flex items-center px-4 py-2 text-black cursor-pointer border-b-1 border-b-gray-300 w-[90%] mx-auto"
              onClick={() => handleSelect(product)}
            >
              <img
                src={product.image} // Thêm hình ảnh sản phẩm
                className="h-20 w-20 object-cover rounded-full mr-4"
              />
              <div className="product-info">
                <span className="ellipsis hover:text-[#ffc107]">{product.name}</span>
                {/* Thêm giá sản phẩm */}
                <span className="product-price-searchBox">
                  {new Intl.NumberFormat('vi-VN').format(product.price)}₫
                </span>
              </div>
            </li>
          ))}
          {/* Nút "Xem thêm" luôn hiển thị nếu có bất kỳ sản phẩm nào */}
          <li className="px-4 py-2">
            <button
              className="px-4 py-2 text-[#000f8f] border border-[#000f8f] hover:bg-[#000f8f] hover:text-white cursor-pointer text-center block mx-auto rounded-lg"
              onClick={handleSeeMore}>
              Xem tất cả
            </button>
          </li>
        </ul>
      )}

      {/* Trường hợp không có sản phẩm tìm thấy */}
      {isNoResultVisible && searchTerm.trim() !== "" && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-1 z-50 max-h-256 overflow-y-auto">
          <li className="px-4 py-2 text-gray-600 text-center">Không có kết quả tìm kiếm</li>
        </ul>
      )}

      {/* Thông báo khi ô tìm kiếm trống */}
      {isEmptySearch && (
        <SearchNoResultNotification
          isVisible={isEmptySearch} // Hiển thị thông báo chỉ khi nhấn Enter hoặc click nút
          onClose={() => setIsEmptySearch(false)} // Đóng thông báo khi nhấn vào nút đóng
        />
      )}
    </div>
  );
};

export default SearchBox;
