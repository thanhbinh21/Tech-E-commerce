import { useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardVip from "../../components/CardVip/CardVip";
import { ProductContext } from "../../context/ProductContext";

const ITEMS_PER_PAGE = 20;

const ProductFillter = () => {
  const [searchParams] = useSearchParams();
  const { products } = useContext(ProductContext);

  // State management
  const [sortType, setSortType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [pageTitle, setPageTitle] = useState("TẤT CẢ SẢN PHẨM");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const name = searchParams.get("name")?.toLowerCase() || "";
    const category = searchParams.get("category")?.toLowerCase().replace(/-/g, " ") || "";
    const manufacturer = searchParams.get("manufacturer") || "";
    const minPrice = parseInt(searchParams.get("minPrice")) || 0;
    const maxPrice = parseInt(searchParams.get("maxPrice")) || Infinity;
  
    setSearchTerm(name);
    setCategoryFilter(category);
    setBrandFilter(manufacturer);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  
    let titleParts = [];
  
    if (name) titleParts.push(`Kết quả cho "${name}"`);
    if (category) titleParts.push(category.toUpperCase());
    if (manufacturer) titleParts.push(manufacturer);
    if (minPrice > 0 || maxPrice < Infinity) {
      titleParts.push(`${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`);
    }
  
    setPageTitle(titleParts.length > 0 ? titleParts.join(" | ") : "TẤT CẢ SẢN PHẨM");
  }, [searchParams]);
  

  const formatPrice = (price) => (price >= 1000000 ? `${price / 1000000}tr` : `${price / 1000}k`);

  const filteredProducts = products.filter((product) => {
    const matchesName = searchTerm ? product.name.toLowerCase().includes(searchTerm) : true;

    const matchesCategory = categoryFilter ? product.category?.toLowerCase() === categoryFilter : true;
    const matchesBrand = brandFilter ? product.brand === brandFilter : true;
    const productPrice = parseInt(product.price);
    const priceMatch = productPrice >= minPrice && productPrice <= maxPrice;

    return matchesName && matchesCategory && matchesBrand && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "name-asc") return a.name.localeCompare(b.name);
    if (sortType === "name-desc") return b.name.localeCompare(a.name);
    if (sortType === "price-asc") return parseInt(a.price) - parseInt(b.price);
    if (sortType === "price-desc") return parseInt(b.price) - parseInt(a.price);
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const displayedProducts = sortedProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, priceRange, brandFilter, sortType]);

  return (
    <div className="w-full max-w-7xl">
      <div className="w-full max-w-7xl bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-4 py-6 bg-white rounded-2xl text-black flex flex-col space-y-5">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-1 h-8 bg-blue-800 mr-3"></div>
              <h2 className="text-2xl font-bold break-words max-w-[600px]">{pageTitle}</h2>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 shadow-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
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

          {sortedProducts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">Không có kết quả nào như mong đợi.</p>
            </div>
          ) : (
            <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <CardVip key={product.id} image={product.image} name={product.name} price={product.price} id={product.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFillter;