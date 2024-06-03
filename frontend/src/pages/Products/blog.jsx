import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const BlogPageSection = () => {
  return (
    <section className="blog-page-section">
      <h1 className="text-3xl font-bold ml-8 mt-8">FAVORITE PRODUCTS</h1>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="mb-8">
            <div className="blog-post bg-white rounded-lg overflow-hidden shadow-md">
              <Link to="/blogpage" className="block">
                <img
                  src="uploads/cat-5952773_960_720.jpg"
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  <Link
                    to="/blogpage"
                    className="text-gray-800 hover:text-blue-600 font-serif"
                  >
                    Ngủ là đam mê của mèo
                  </Link>
                </h3>
                <div className="text-gray-600 mb-2">
                  <i className="fas fa-user"></i> Posted by: admin
                </div>
                <p className="text-gray-700">
                  Mèo, những nghệ sĩ ngủ xuất sắc, nổi tiếng với khả năng ngủ
                  lâu, thậm chí một con trưởng thành có thể giấc mơ từ 12-16 giờ
                  mỗi ngày
                </p>
                <Link
                  to="/blogpage"
                  className="inline-block mt-2 text-blue-600 hover:underline font-sans"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="blog-post bg-white rounded-lg overflow-hidden shadow-md">
              <Link to="/blogpage1" className="block">
                <img
                  src="uploads/unnamed.jpg"
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  <Link
                    to="/blogpage1"
                    className="text-gray-800 hover:text-blue-600 font-serif"
                  >
                    Chăm sóc hậu triệt sản cho mèo
                  </Link>
                </h3>
                <div className="text-gray-600 mb-2">
                  <i className="fas fa-user"></i> Posted by: admin
                </div>
                <p className="text-gray-700">
                  Cung cấp một không gian yên tĩnh, thoải mái nhất cho con mèo
                  của bạn.
                </p>
                <Link
                  to="/blogpage1"
                  className="inline-block mt-2 text-blue-600 hover:underline font-sans"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="blog-post bg-white rounded-lg overflow-hidden shadow-md">
              <Link to="/blogpage2" className="block">
                <img
                  src="uploads/1637144421_khay-vs-meo.jpg"
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  <Link
                    to="/blogpage2"
                    className="text-gray-800 hover:text-blue-600 font-serif"
                  >
                    Cách xử lí thùng vệ sinh cho mèo
                  </Link>
                </h3>
                <div className="text-gray-600 mb-2">
                  <i className="fas fa-user"></i> Posted by: admin
                </div>
                <p className="text-gray-700">
                  Hầu hết mèo đều biết cách sử dụng thùng vệ sinh mà không cần
                  bất kỳ sự hướng dẫn nào.
                </p>
                <Link
                  to="/blogpage2"
                  className="inline-block mt-2 text-blue-600 hover:underline font-sans"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="blog-post bg-white rounded-lg overflow-hidden shadow-md">
              <Link to="/" className="block">
                <img
                  src="uploads/cho-meo-uong-thuoc.jpg"
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  <Link
                    to="/"
                    className="text-gray-800 hover:text-blue-600 font-serif"
                  >
                    Hướng dẫn cho mèo uống thuốc trực tiếp
                  </Link>
                </h3>
                <div className="text-gray-600 mb-2">
                  <i className="fas fa-user"></i> Posted by: admin
                </div>
                <p className="text-gray-700">
                  Cách cho mèo uống thuốc trực tiếp luôn là cách được nhiều
                  “sen" thực hiện. Bạn có thể lo sợ rằng mèo sẽ cắn vào tay mình
                  nhưng nếu chú ý thì việc cho mèo uống thuốc khá là nhẹ nhàng
                  đó!
                </p>
                <Link
                  to="/"
                  className="inline-block mt-2 text-blue-600 hover:underline font-sans"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="blog-post bg-white rounded-lg overflow-hidden shadow-md">
              <Link to="/" className="block">
                <img
                  src="uploads/tay_giun_cho_meo6.jpg"
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  <Link
                    to="/"
                    className="text-gray-800 hover:text-blue-600 font-serif"
                  >
                    Khi cho mèo uống thuốc cần lưu ý điều gì?
                  </Link>
                </h3>
                <div className="text-gray-600 mb-2">
                  <i className="fas fa-user"></i> Posted by: admin
                </div>
                <p className="text-gray-700">
                  Sau khi đã nắm được các bước cho mèo uống thuốc, để sức khoẻ
                  của mèo luôn đảm bảo, bạn cũng cần chú ý một số điều sau
                </p>
                <Link
                  to="/"
                  className="inline-block mt-2 text-blue-600 hover:underline font-sans"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="blog-post bg-white rounded-lg overflow-hidden shadow-md">
              <Link to="/" className="block">
                <img
                  src="uploads/phai-lam-gi-khi-meo-bo-an-nam-met-moi-202104272032467343.jpg"
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  <Link
                    to="/"
                    className="text-gray-800 hover:text-blue-600 font-serif"
                  >
                    Cách khắc phục tình trạng mèo mệt mỏi bỏ ăn hiệu quả
                  </Link>
                </h3>
                <div className="text-gray-600 mb-2">
                  <i className="fas fa-user"></i> Posted by: admin
                </div>
                <p className="text-gray-700">
                  Sau khi bạn đã tìm được nguyên nhân khiến mèo mệt mỏi bỏ ăn
                  thì có thể áp dụng các cách khắc phục hiệu quả dưới đây
                </p>
                <Link
                  to="/"
                  className="inline-block mt-2 text-blue-600 hover:underline font-sans"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Repeat the above 'div' for each blog post */}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="pagination-widget">
            <div className="site-pagination">
              <a href="#" className="single-pagination">
                |&lt;
              </a>
              <a href="#" className="single-pagination">
                &lt;
              </a>
              <a href="#" className="single-pagination active">
                1
              </a>
              <a href="#" className="single-pagination">
                2
              </a>
              <a href="#" className="single-pagination">
                &gt;
              </a>
              <a href="#" className="single-pagination">
                &gt;|
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPageSection;
