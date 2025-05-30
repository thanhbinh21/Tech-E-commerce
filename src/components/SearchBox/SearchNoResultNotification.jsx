import { useEffect } from "react";

const SearchNoResultNotification = ({ isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (onClose) onClose();
      }, 3000);

      return () => clearTimeout(timer); 
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 w-[500px] z-50 bg-yellow-50 shadow-lg rounded-lg p-6 
        transition-transform duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <span className="text-red-800 font-semibold text-xl">Vui lòng nhập tên sản phẩm để tìm kiếm</span>
      </div>
    </div>
  );
};

export default SearchNoResultNotification;
