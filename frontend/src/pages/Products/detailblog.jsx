import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <section className="blog-page-section with-sidebar py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-8/12 xl:w-9/12 mb-10 lg:mb-0 pr-0 lg:pr-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Link to="/blog-details" className="block">
                <img
                  src="uploads/cat-5952773_960_720.jpg"
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
                      Khi cho mèo uống thuốc cần lưu ý điều gì?
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
                    Sau khi đã nắm được các bước cho mèo uống thuốc, để sức khỏe
                    của mèo luôn đảm bảo, bạn cũng cần chú ý một số điều sau:
                    Cho mèo ăn ngay đồ ăn ngon và xoa dọc đầu xuống lưng theo
                    chiều lông để động viên mèo. Xem kỹ và hiểu rõ loại thuốc mà
                    mèo của bạn đang dùng. Loại thuốc đó là thuốc viên uống trực
                    tiếp hay thuốc nước,... Cho mèo uống thuốc theo đúng liều
                    lượng được bác sĩ chỉ định. Tuy nhiên, mèo uống thuốc quá
                    liều có thể gây ra tác dụng phụ không mong muốn. Chỉ được
                    phép cho mèo uống thuốc theo chỉ định của bác sĩ thú y.
                    Không tự ý mua thuốc cho mèo uống.
                  </p>

                  <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
                    <p>
                      Như vậy, có thể thấy cách cho mèo uống thuốc thực ra cũng
                      không quá khó khăn. Chỉ cần bạn để ý và biết chiều chuộng
                      mèo một chút là được!! Hy vọng với những thông tin
                      HappiPaws vừa chia sẻ, bạn đã nắm được cách cho mèo uống
                      thuốc.Tuyệt đối không được cho mèo uống thuốc của người,
                      đặc biệt là những loại thuốc giảm đau. Để xa các loại
                      thuốc khỏi tầm với của mèo. Kể cả thuốc dành cho mèo cũng
                      không được để gần “boss”. Nếu thấy mèo có các biểu hiện lạ
                      sau khi uống thuốc, cần đưa ngay tới cơ sở thú y để kiểm
                      tra. Đem theo mẫu thuốc mèo vừa uống để bác sĩ hiểu rõ về
                      tình trạng mèo.
                    </p>
                  </blockquote>
                </article>
                <footer className="text-gray-500 text-center">
                  <div>
                    <Link to="#">3 comments</Link> / TAGS:
                    <Link to="#" className="ml-2">
                      fashion
                    </Link>
                    ,
                    <Link to="#" className="ml-2">
                      t-shirt
                    </Link>
                    ,
                    <Link to="#" className="ml-2">
                      white
                    </Link>
                  </div>
                </footer>
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

export default BlogPage;
