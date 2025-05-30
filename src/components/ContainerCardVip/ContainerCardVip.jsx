import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardVip from "../CardVip/CardVip";
import "./ContainerCardVip.css";
import { ProductContext } from "../../context/ProductContext";



const ContainerCardVip = () => {
  const [filter, setFilter] = useState("moi");
  const [data, setData] = useState([]);

  const { products, laptops, vgas } = useContext(ProductContext);

  // Sắp xếp sản phẩm giảm dần theo giá
  const sortedByPrice = (array) => [...array].sort((a, b) => b.price - a.price);

  // Xử lý filter
  const handleFilter = () => {
    if (filter === "moi") {
      setData(sortedByPrice(laptops));
    } else if (filter === "noibat") {
      setData(sortedByPrice(vgas));
    } else {
      setData(sortedByPrice(products).slice(20, 30));
    }
  };

  // Chạy lại khi filter thay đổi
  useEffect(() => {
    handleFilter();
  }, [filter, products]);

  return (
    <div className="container-card-vip">
      {/* Nút lọc */}
      <div className="filter-buttons">
        <button
          className={filter === "moi" ? "active" : ""}
          onClick={() => setFilter("moi")}
        >
          🆕 Sản phẩm mới
        </button>
        <button
          className={filter === "noibat" ? "active" : ""}
          onClick={() => setFilter("noibat")}
        >
          🔥 Sản phẩm nổi bật
        </button>
        <button
          className={filter === "banchay" ? "active" : ""}
          onClick={() => setFilter("banchay")}
        >
          🏆 Sản phẩm bán chạy
        </button>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="product-list">
        {data.length > 0 ? (
          data.map((item) => (
            <CardVip
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p>Không có sản phẩm nào phù hợp! 😔</p>
        )}
      </div>

      {/* Nút xem thêm */}
      <button className="view-more">
        <Link to="/product">Xem toàn bộ sản phẩm →</Link>
      </button>
    </div>
  );
};

export default ContainerCardVip;
