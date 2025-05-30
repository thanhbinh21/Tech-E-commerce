import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import ProductCardSearch from "../../components/ProductCardSearch/ProductCardSearch";

const SearchPage = () => {
  const { products } = useContext(ProductContext); // Lấy dữ liệu sản phẩm từ context
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Lấy từ khóa tìm kiếm từ query parameter
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("q");

  useEffect(() => {
    if (searchQuery) {
      setSearchTerm(searchQuery);
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [products, searchQuery]);

  return (
    <div className="search-page container mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold mb-6">Kết quả tìm kiếm cho "{searchTerm}"</h1>

        <div className="result-search grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCardSearch key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full">Không có sản phẩm nào phù hợp với từ khóa này.</p>
          )}
        </div>
    </div>
  );
};

export default SearchPage;
