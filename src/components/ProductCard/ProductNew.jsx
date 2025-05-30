import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import CardVip from "../../components/CardVip/CardVip";

const ProductNew = () => {
  const { products } = useContext(ProductContext);

  // Lấy 5 sản phẩm mới nhất và đảo ngược để hiển thị từ mới nhất
  const newProducts = products.slice(-5).reverse();

  // Nhân đôi danh sách để animation lặp lại mượt hơn
  const animatedProducts = [...newProducts, ...newProducts];

  return (
    <>
      {newProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 py-6 bg-white rounded-2xl text-black flex flex-col space-y-5 mb-6 overflow-hidden">
          <div className="flex items-center">
            <div className="w-1 h-8 bg-blue-800 mr-3"></div>
            <h2 className="text-2xl font-bold">SẢN PHẨM MỚI</h2>
          </div>

          {/* Animation Container */}
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center space-x-6 animate-marquee">
              {animatedProducts.map((product, index) => (
                <div key={index} className="w-60 max-w-xs flex-shrink-0">
                  <CardVip
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductNew;
