import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const BlogPage1 = () => {
  return (
    <section className="blog-page-section with-sidebar py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-8/12 xl:w-9/12 mb-10 lg:mb-0 pr-0 lg:pr-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Link to="/blog-details" className="block">
                <img
                  src="uploads/unnamed.jpg"
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
                      Chăm sóc hậu triệt sản cho mèo
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
                    Cung cấp một không gian yên tĩnh, thoải mái nhất cho con mèo
                    của bạn. Mèo của bạn có thể sẽ cảm thấy buồn nôn và đi ngoài
                    các loại trong vòng 18-24 giờ đầu sau khi gây mê. Vì vậy
                    cung cấp một không gian yên tĩnh nơi con mèo của bạn có thể
                    nghỉ ngơi là rất quan trọng. Hãy chắc chắn rằng bạn vẫn có
                    thể quan sát con mèo của bạn từ nơi nghỉ ngơi của nó. Ngăn
                    chặn bất kỳ sự kích thích hoặc tác động mạnh nào từ môi
                    trường lên thú cưng của bạn Giữ trẻ em và vật nuôi khác
                    tránh xa con mèo. Mèo của bạn cần phải nghỉ ngơi và hồi
                    phục, và điều này khó để làm nếu nó liên tục bị gián đoạn
                    hoặc làm phiền bởi những người khác.
                  </p>

                  <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
                    <p>
                      Hãy chắc chắn rằng con mèo của bạn có một nơi thoải mái để
                      ngủ. Nếu con mèo của bạn thường xuyên nghỉ ngơi ở những
                      nơi khác nhau hãy thử lót một chiếc hộp với gối hoặc chăn
                      mềm. Nếu có thể, đặt chỗ nằm của mèo trong một khu vực
                      bằng gạch hoặc sàn gỗ. Mèo thích làm mát bụng của chúng
                      bằng cách kéo dài trên sàn nhà mát mẻ, và điều này có thể
                      giúp làm dịu các vết phẫu thuật. Nếu có thể, cố gắng giữ
                      cho giường ở độ cao phù hợp và tránh cho họ phải nhảy
                      nhiều.
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

export default BlogPage1;
