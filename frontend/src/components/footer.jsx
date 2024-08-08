import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-center space-x-4">
          <span className="flex items-center space-x-2">
            <span className="font-bold">Tổng đài:</span>
            <a href="tel:0867167237" className="hover:underline">
              0867167237
            </a>
          </span>
          <span className="flex items-center space-x-2">
            <span className="font-bold">Gửi tin nhắn</span>
          </span>
          <span className="flex items-center space-x-2">
            <span className="font-bold">Liên hệ kinh doanh</span>
          </span>
          <a
            href="#top"
            className="font-bold bg-white text-blue-600 py-1 px-2 rounded-full hover:bg-gray-200"
          >
            Lên đầu trang
          </a>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="flex justify-center space-x-8">
          <a href="#" className="hover:underline">
            Giới thiệu
          </a>
          <a href="#" className="hover:underline">
            Khách hàng
          </a>
          <a href="#" className="hover:underline">
            Tuyển dụng
          </a>
          <a href="#" className="hover:underline">
            Giao hàng
          </a>
          <a href="#" className="hover:underline">
            Tích điểm
          </a>
          <a href="#" className="hover:underline">
            Đổi trả
          </a>
        </div>

        <div className="flex justify-center space-x-8 mt-4">
          <img
            src="https://www.petmart.vn/wp-content/uploads/2019/10/dmca-compliant.png"
            alt="DMCA Compliant"
            className="h-12"
          />
          <img
            src="https://www.petmart.vn/wp-content/uploads/2019/10/dmca-protecte.png?ID=785ceaee-9d79-4b8a-9ab1-a09991c670a3"
            alt="DMCA Protected"
            className="h-12"
          />
          <img
            src="https://www.petmart.vn/wp-content/uploads/2017/01/bo-cong-thuong.png"
            alt="Vietnam Quality"
            className="h-12"
          />
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaTiktok />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaTwitter />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaYoutube />
          </a>
        </div>

        <div className="text-center text-sm text-gray-600 mt-8">
          <p>
            Nội dung và hình ảnh các bài viết trên petmart.vn đã được đăng ký
            bản quyền
            <a href="#" className="text-blue-600 hover:underline">
              {" "}
              Digital Millennium Copyright Act (DMCA)
            </a>{" "}
            theo tiêu chuẩn
            <a href="#" className="text-blue-600 hover:underline">
              {" "}
              CC BY-ND 4.0 DEED.
            </a>{" "}
            Vui lòng dẫn nguồn khi sao chép các bài viết từ trang này.
          </p>
          <p className="mt-4">
            2024 © CÔNG TY PET MART VIỆT NAM - Giấy phép ĐKKD số 0106683363
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
