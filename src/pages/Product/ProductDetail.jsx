import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { FaCheck } from 'react-icons/fa';
import { CartContext } from "../../context/CartContext";
import ProductReviews from '../../components/Review/ProductReview';
const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (products.length > 0 && id) {
      const foundProduct = products.find((p) => String(p.id) === String(id));
      if (foundProduct) {
        setProduct(foundProduct);
        const MAX_VIEWED_PRODUCTS = 4;
        const storedViewedProducts = JSON.parse(localStorage.getItem("viewedProducts") || "[]");
        const filteredViewed = storedViewedProducts.filter((p) => 
          String(p.id) !== String(foundProduct.id)
        );
        const newViewed = [foundProduct, ...filteredViewed].slice(0, MAX_VIEWED_PRODUCTS);
        localStorage.setItem("viewedProducts", JSON.stringify(newViewed));
      }
      setLoading(false);
    }
  }, [id, products]);


  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto p-4 flex justify-center">
        <p className="text-xl">Đang tải...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full max-w-7xl mx-auto p-4">
        <p className="text-xl text-center">Không tìm thấy sản phẩm</p>
      </div>
    );
  }

  const isDiscounted = product.originalPrice && Number(product.originalPrice) > Number(product.price);
  const discountPercentage = isDiscounted 
    ? Math.round((1 - (Number(product.price) / Number(product.originalPrice))) * 100)
    : 0;

  const productImages = product.images?.length > 0 
    ? product.images 
    : [product.image].filter(Boolean);


  
  const handleBuyNow = () => {
    if (product) {
      addToCart?.(product, 1);
      navigate("/cart");
    }
  };

  const ratingValue = product.rating ?? 0;
  const roundedRating = Math.round(ratingValue);

  return (
    <div className="w-full max-w-7xl mx-auto bg-white p-4 m-3 rounded-2xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image gallery section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square border rounded-lg overflow-hidden">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-contain"
                loading="lazy"
              />
              {isDiscounted && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                  -{discountPercentage}%
                </div>
              )}
            </div>
            
            {productImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {productImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`border p-1 cursor-pointer rounded-md ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                    onClick={() => setSelectedImage(index)}
                    role="button"
                    tabIndex={0}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - Hình ${index + 1}`}
                      className="w-16 h-16 object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          
          <div className="flex items-center gap-2 my-2">
            <div className="flex items-center">
              {Array(5).fill().map((_, i) => (
                <span key={i} className="text-yellow-400">
                  {i < roundedRating ? "★" : "☆"}
                </span>
              ))}
            </div>
            <span className="text-yellow-500 font-bold">{ratingValue.toFixed(1)}</span>
            <a href="#reviews" className="text-blue-500 ml-2">Xem đánh giá</a>
          </div>

          {/* Pricing */}
          <div className="my-4">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-red-600">
                {Number(product.price).toLocaleString()}đ
              </span>
              {isDiscounted && (
                <span className="text-gray-500 line-through">
                  {Number(product.originalPrice).toLocaleString()}đ
                </span>
              )}
            </div>
          </div>

          {/* Gifts */}
          <div className="bg-gray-50 p-4 rounded-lg my-4">
            <h3 className="font-bold text-red-600 mb-2">Quà tặng:</h3>
            <div className="flex items-start gap-2">
              <span className="text-red-500">🎁</span>
              <span>Balo {product.brand} Essential Backpack (Kèm máy)</span>
            </div>
          </div>

          {/* Warranty */}
          <div className="my-4 space-y-2">
            <div className="flex items-start gap-2">
              <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
              <span>Bảo hành chính hãng 24 tháng.</span>
            </div>
            <div className="flex items-start gap-2">
              <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
              <span>Hỗ trợ đổi mới trong 7 ngày.</span>
            </div>
          </div>

          {/* Buy button */}
          <button 
            className="w-full bg-red-600 text-white py-3 rounded-md font-bold text-center my-4 hover:bg-red-700 transition"
            onClick={handleBuyNow}
          >
            MUA NGAY
            <div className="text-sm font-normal">Giao tận nơi hoặc nhận tại cửa hàng</div>
          </button>

          {/* Specifications */}
          <div className="mt-6">
            <h3 className="font-bold text-lg mb-2">Thông số kỹ thuật:</h3>
            <div className="space-y-2">
              <div className="flex">
                <span className="w-1/3 text-gray-600">Thương hiệu:</span>
                <span className="w-2/3 font-medium">{product.manufacturer}</span>
              </div>
              <div className="flex">
                <span className="w-1/3 text-gray-600">Loại:</span>
                <span className="w-2/3 font-medium">{product.category}</span>
              </div>
              <div className="flex">
                <span className="w-1/3 text-gray-600">Khối lượng:</span>
                <span className="w-2/3 font-medium">{product.weight}</span>
              </div>
              <div className="flex">
                <span className="w-1/3 text-gray-600">Kích thước:</span>
                <span className="w-2/3 font-medium">{product.size}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product description */}
      <div className="mt-8 border-t pt-4">
        <h2 className="text-xl font-bold mb-4">Mô tả sản phẩm</h2>
        <div className="prose max-w-none">
          <p>{product.description || 'Thông tin chi tiết sản phẩm đang được cập nhật.'}</p>
        </div>
      </div>
      {/* Reviews */}
      <ProductReviews productId={product.id} />
    </div>
  );
};

export default ProductDetail;