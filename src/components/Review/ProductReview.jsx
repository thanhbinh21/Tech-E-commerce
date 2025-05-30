import { useState, useEffect } from 'react';
import { FaUser, FaThumbsUp, FaReply, FaStar } from 'react-icons/fa';

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userReview, setUserReview] = useState({
    rating: 5,
    comment: '',
    name: '',
    email: ''
  });
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    const mockReviews = [
      {
        id: 1,
        name: 'Nguyễn Thanh Bình ',
        rating: 5,
        date: '2025-03-10',
        comment: 'Sản phẩm rất tốt, đóng gói cẩn thận. Giao hàng nhanh chóng.',
        likes: 12,
        verified: true,
        images: []
      },
      {
        id: 2,
        name: 'Trần Thị Linh ',
        rating: 4,
        date: '2025-03-05',
        comment: 'Chất lượng sản phẩm tốt. Tuy nhiên giao hàng hơi chậm.',
        likes: 5,
        verified: true,
        images: []
      },
      {
        id: 3, 
        name: 'Lê Văn An',
        rating: 3,
        date: '2025-02-28',
        comment: 'Sản phẩm tạm được, không như mong đợi nhưng cũng chấp nhận được với mức giá này.',
        likes: 2,
        verified: false,
        images: []
      }
    ];
    
    setTimeout(() => {
      setReviews(mockReviews);
      setLoading(false);
    }, 500); 
  }, [productId]);

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;
  
  const ratingCounts = reviews.reduce((counts, review) => {
    counts[review.rating - 1]++;
    return counts;
  }, [0, 0, 0, 0, 0]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserReview(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleRatingChange = (rating) => {
    setUserReview(prev => ({
      ...prev,
      rating
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newReview = {
      id: reviews.length + 1,
      ...userReview,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      verified: false,
      images: []
    };
    
    setReviews(prev => [newReview, ...prev]);
    setUserReview({
      rating: 5,
      comment: '',
      name: '',
      email: ''
    });
    setSubmitted(true);
    setTimeout(() => {
      setShowReviewForm(false);
      setSubmitted(false);
    }, 3000);
  };
  
  const sortReviews = (reviews) => {
    switch(sortBy) {
      case 'highest':
        return [...reviews].sort((a, b) => b.rating - a.rating);
      case 'lowest':
        return [...reviews].sort((a, b) => a.rating - b.rating);
      case 'most_helpful':
        return [...reviews].sort((a, b) => b.likes - a.likes);
      case 'newest':
      default:
        return [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  };
  
  const sortedReviews = sortReviews(reviews);
  
  return (
    <div id="reviews" className="mt-12 border-t pt-6">
      <h2 className="text-2xl font-bold mb-6">Đánh giá sản phẩm</h2>
      
      {loading ? (
        <p className="text-center">Đang tải đánh giá...</p>
      ) : (
        <>
          {/* Review Summary */}
          <div className="flex flex-col md:flex-row gap-8 mb-8 bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col items-center justify-center md:w-1/4">
              <div className="text-5xl font-bold text-yellow-500">{averageRating.toFixed(1)}</div>
              <div className="flex items-center my-2">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    {i < Math.round(averageRating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-500 mb-2">{reviews.length} đánh giá</div>
              {!showReviewForm && (
                <button 
                  onClick={() => setShowReviewForm(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Viết đánh giá
                </button>
              )}
            </div>
            
            <div className="md:w-3/4">
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2">
                    <div className="w-12 text-sm">{star} sao</div>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400"
                        style={{ 
                          width: `${reviews.length > 0 ? (ratingCounts[star - 1] / reviews.length) * 100 : 0}%` 
                        }}
                      />
                    </div>
                    <div className="w-12 text-right text-sm">
                      {ratingCounts[star - 1]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Review Form */}
          {showReviewForm && (
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <h3 className="text-lg font-bold mb-4">Viết đánh giá của bạn</h3>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Cảm ơn bạn đã gửi đánh giá!
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block mb-1">Đánh giá của bạn</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => handleRatingChange(star)}
                          className="text-2xl focus:outline-none"
                        >
                          <span className={star <= userReview.rating ? "text-yellow-400" : "text-gray-300"}>
                            ★
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block mb-1" htmlFor="comment">Nội dung đánh giá</label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={4}
                      className="w-full border rounded p-2"
                      value={userReview.comment}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-1" htmlFor="name">Họ tên</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border rounded p-2"
                        value={userReview.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-1" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border rounded p-2"
                        value={userReview.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="px-4 py-2 border rounded hover:bg-gray-100 transition"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                      Gửi đánh giá
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
          
          {/* Review Filter */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">{reviews.length} đánh giá</h3>
            <div className="flex items-center">
              <span className="mr-2">Sắp xếp theo:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded p-1"
              >
                <option value="newest">Mới nhất</option>
                <option value="highest">Điểm cao nhất</option>
                <option value="lowest">Điểm thấp nhất</option>
                <option value="most_helpful">Hữu ích nhất</option>
              </select>
            </div>
          </div>
          
          {/* Review List */}
          <div className="space-y-6">
            {sortedReviews.length > 0 ? (
              sortedReviews.map((review) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-200 rounded-full p-3">
                      <FaUser className="text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold">{review.name}</h4>
                        {review.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                            Đã mua hàng
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {Array(5).fill().map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              {i < review.rating ? "★" : "☆"}
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString('vi-VN')}
                        </span>
                      </div>
                      
                      <p className="my-2">{review.comment}</p>
                      
                      {review.images.length > 0 && (
                        <div className="flex gap-2 my-3">
                          {review.images.map((img, idx) => (
                            <img 
                              key={idx} 
                              src={img} 
                              alt="Review" 
                              className="w-16 h-16 object-cover border rounded"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center gap-4 mt-2">
                        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500">
                          <FaThumbsUp /> 
                          <span>Hữu ích ({review.likes})</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500">
                          <FaReply /> 
                          <span>Trả lời</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Chưa có đánh giá nào cho sản phẩm này.</p>
            )}
          </div>
          
          {/* Pagination */}
          {reviews.length > 5 && (
            <div className="flex justify-center mt-8">
              <div className="flex border rounded overflow-hidden">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">«</button>
                <button className="px-4 py-2 bg-blue-500 text-white">1</button>
                <button className="px-4 py-2 hover:bg-gray-100">2</button>
                <button className="px-4 py-2 hover:bg-gray-100">3</button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">»</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductReviews;