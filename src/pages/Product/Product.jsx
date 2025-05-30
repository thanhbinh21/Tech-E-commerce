import { useRef, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CardVip from "../../components/CardVip/CardVip";
import { ProductContext } from "../../context/ProductContext";
import Slider from "../../components/Slider/Slider";

const ITEMS_PER_PAGE = 20;

const Product = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const scrollRef = useRef(null);
  const [sortType, setSortType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const slideLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -160, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 160, behavior: "smooth" });
    }
  };

  const handleCategoryClick = (categoryName) => {
    setCategoryFilter(categoryName.toLowerCase());
  };

  const filteredProducts = products.filter((product) => {
    if (categoryFilter && product.category.toLowerCase() !== categoryFilter) {
      return false;
    }

    if (priceRange) {
      const price = parseInt(product.price);
      if (priceRange === "under-1m" && price >= 1000000) return false;
      if (priceRange === "1m-5m" && (price < 1000000 || price > 5000000))
        return false;
      if (priceRange === "5m-10m" && (price < 5000000 || price > 10000000))
        return false;
      if (priceRange === "10m-20m" && (price < 10000000 || price > 20000000))
        return false;
      if (priceRange === "above-20m" && price <= 20000000) return false;
    }

    if (brandFilter && product.brand !== brandFilter) {
      return false;
    }

    return true;
  });

  // Sort products based on selected sort type
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "name-asc") return a.name.localeCompare(b.name);
    if (sortType === "name-desc") return b.name.localeCompare(a.name);
    if (sortType === "price-asc") return parseInt(a.price) - parseInt(b.price);
    if (sortType === "price-desc") return parseInt(b.price) - parseInt(a.price);
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);

  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, priceRange, brandFilter, sortType]);

  const MAX_VIEWED_PRODUCTS = 4;
  const [viewedProducts, setViewedProducts] = useState([]);

  useEffect(() => {
    const storedViewedProducts = JSON.parse(
      localStorage.getItem("viewedProducts") || "[]"
    );
    setViewedProducts(storedViewedProducts);
  }, []);

  const addToViewedProducts = (product) => {
    setViewedProducts((prevViewed) => {
      const filteredViewed = prevViewed.filter((p) => p.id !== product.id);
      const newViewed = [product, ...filteredViewed].slice(
        0,
        MAX_VIEWED_PRODUCTS
      );
      localStorage.setItem("viewedProducts", JSON.stringify(newViewed));

      return newViewed;
    });
  };

  const handleProductClick = (product) => {
    addToViewedProducts(product); 
    navigate(`/product/${product.name}`);
  };

  const viewedProductObjects = viewedProducts
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleBrandFilterChange = (e) => {
    setBrandFilter(e.target.value);
  };

  const handleSortTypeChange = (e) => {
    setSortType(e.target.value);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="w-full max-w-7xl">
      <Slider />
      <div className="w-full max-w-7xl bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-4 py-6 bg-white rounded-2xl text-black flex flex-col space-y-5">
          <div className="flex items-center">
            <div className="w-1 h-8 bg-blue-800 mr-3"></div>
            <h2 className="text-2xl font-bold">TẤT CẢ SẢN PHẨM</h2>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-between mb-6">
              <div className="flex items-center gap-4 px-4 py-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <p className="text-lg font-medium text-gray-800">Bộ lọc:</p>

                {/* Price range filter */}
                <div className="relative">
                  <select
                    className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-sm"
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                  >
                    <option value="">Chọn mức giá</option>
                    <option value="under-1m">Dưới 1 triệu</option>
                    <option value="1m-5m">1 - 5 triệu</option>
                    <option value="5m-10m">5 - 10 triệu</option>
                    <option value="10m-20m">10 - 20 triệu</option>
                    <option value="above-20m">Trên 20 triệu</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

                {/* Category filter */}
                <div className="relative">
                  <select
                    className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-sm"
                    value={categoryFilter}
                    onChange={handleCategoryFilterChange}
                  >
                    <option value="">Loại</option>
                    <option value="laptop">Laptop</option>
                    <option value="pc">PC</option>
                    <option value="monitor">Màn hình</option>
                    <option value="mouse">Chuột</option>
                    <option value="keyboard">Bàn phím</option>
                    <option value="headphone">Tai nghe</option>
                    <option value="speaker">Loa</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

                {/* Brand filter */}
                <div className="relative">
                  <select
                    className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-sm"
                    value={brandFilter}
                    onChange={handleBrandFilterChange}
                  >
                    <option value="">Thương hiệu</option>
                    <option value="ASUS">ASUS</option>
                    <option value="MSI">MSI</option>
                    <option value="Acer">Acer</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Logitech">Logitech</option>
                    <option value="Razer">Razer</option>
                    <option value="LG">LG</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Sort dropdown */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 shadow-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  value={sortType}
                  onChange={handleSortTypeChange}
                >
                  <option value="">Sắp xếp</option>
                  <option value="name-asc">Tên A-Z</option>
                  <option value="name-desc">Tên Z-A</option>
                  <option value="price-asc">Giá thấp-cao</option>
                  <option value="price-desc">Giá cao-thấp</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* No products message */}
          {sortedProducts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">
                Không tìm thấy sản phẩm nào phù hợp với bộ lọc
              </p>
            </div>
          ) : (
            /* Product grid */
            <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product, index) => (
                <CardVip
                  key={index}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  id={product.id}
                  onClick={() => handleProductClick(product.id)}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {sortedProducts.length > 0 && (
            <div className="flex justify-center items-center mt-8 space-x-2">
              <button
                onClick={handlePrevPage}
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                disabled={currentPage === 1}
              >
                ←
              </button>

              {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 3) {
                  pageNum = i + 1;
                } else if (currentPage === 1) {
                  pageNum = i + 1;
                } else if (currentPage === totalPages) {
                  pageNum = totalPages - 2 + i;
                } else {
                  pageNum = currentPage - 1 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageClick(pageNum)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors duration-200 ${
                      currentPage === pageNum
                        ? "bg-blue-500 text-white font-medium"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={handleNextPage}
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                disabled={currentPage === totalPages}
              >
                →
              </button>
            </div>
          )}
        </div>

        {viewedProducts.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 py-6 bg-white rounded-2xl text-black flex flex-col space-y-5 mb-6">
            <div className="flex items-center">
              <div className="w-1 h-8 bg-blue-800 mr-3"></div>
              <h2 className="text-2xl font-bold">SẢN PHẨM ĐÃ XEM</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
              {viewedProducts.map((product, index) => (
                <CardVip
                  key={index}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
