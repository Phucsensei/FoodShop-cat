import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const BlogPage2 = () => {
  return (
    <section className="blog-page-section with-sidebar py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-8/12 xl:w-9/12 mb-10 lg:mb-0 pr-0 lg:pr-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Link to="/blog-details" className="block">
                <img
                  src="uploads/1637144421_khay-vs-meo.jpg"
                  alt="Cat"
                  className="w-full h-auto rounded-lg"
                />
              </Link>

              <div className="blog-content mt-8">
                <header>
                  <div className="text-primary mb-4">
                    <i className="fas fa-folder mr-2"></i>
                    <Link to="#" className="ml-2 uppercase">
                      education
                    </Link>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    <Link to="/blog-details">
                      CÁCH XỬ LÝ THÙNG VỆ SINH CHO MÈO
                    </Link>
                  </h3>
                  <div className="post-meta text-gray-500 mb-4 text-center">
                    <span className="mr-4">
                      <i className="fas fa-user mr-2"></i>
                      Posted by: admin
                    </span>
                  </div>
                </header>
                <article>
                  <p className="text-justify leading-relaxed">
                    Hầu hết mèo đều biết cách sử dụng thùng vệ sinh mà không cần
                    bất kỳ sự hướng dẫn nào. Điều đó mang tính bản năng và thoải
                    mái cho mèo của bạn. Tuy nhiên, có nhiều yếu tố có thể cản
                    trở việc sử dụng nhà vệ sinh. Vì việc “đi ra ngoài” có thể
                    làm căng thẳng tình bạn mới giữa bạn và mèo, vậy nên bạn cần
                    khuyến khích những thói quen tốt ngay từ đầu. May mắn thay,
                    việc hình thành thói quen tốt trong thùng vệ sinh có thể rất
                    đơn giản. Đọc tiếp cùng HappiPaws để tìm hiểu thêm nhé!
                  </p>

                  <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
                    <p>
                      Mèo và thùng vệ sinh và lời khuyên thành công Đi vệ sinh
                      quanh nhà thay vì sử dụng thùng vệ sinh là một trong những
                      lý do phổ biến nhất khiến mèo cưng phải đầu hàng nơi trú
                      ẩn. Dù rất yêu quý con mèo của mình nhưng bạn có thể tưởng
                      tượng được tại sao đây lại là một vấn đề khó chịu. Nước
                      tiểu và phân gây khó khăn cho việc dọn dẹp, có thể để lại
                      vết bẩn và mùi hôi, đồng thời có thể phá hủy thảm và đồ
                      nội thất.
                    </p>
                  </blockquote>
                </article>
                <footer className="text-gray-500 text-center"></footer>
              </div>
            </div>

            <div className="share-block single-block mt-8">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Share Now
              </h3>
              <div className="flex justify-center space-x-4">
                <Link to="#" className="text-xl text-blue-600">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="text-xl text-blue-400">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#" className="text-xl text-red-600">
                  <i className="fab fa-pinterest-p"></i>
                </Link>
                <Link to="#" className="text-xl text-red-500">
                  <i className="fab fa-google-plus-g"></i>
                </Link>
                <Link to="#" className="text-xl text-blue-700">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage2;
