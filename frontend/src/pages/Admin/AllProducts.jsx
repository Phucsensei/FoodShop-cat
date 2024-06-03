import { Link } from "react-router-dom";
import moment from "moment";
import { useAllProductsQuery } from "../../redux/api/productApiSlice";
import AdminMenu from "./AdminMenu";

const AllProducts = () => {
  const { data: products, isLoading, isError } = useAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="flex flex-col md:flex-row md:w-full">
        <div className="md:w-3/4 p-3">
          <div className="ml-2 text-xl font-bold h-12 mb-4">
            All Products ({products.length})
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between product-card"
              >
                <Link to={`/admin/product/update/${product._id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover product-image"
                  />
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <h5 className="text-xl font-semibold mb-2">
                        {product.name.length > 20
                          ? `${product.name.substr(0, 20)}...`
                          : product.name}
                      </h5>

                      <p className="text-gray-400 text-xs mb-2">
                        {moment(product.createdAt).format("MMMM Do YYYY")}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {product.description.substring(0, 100)}...
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link
                        to={`/admin/product/update/${product._id}`}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                      >
                        Update Product
                        <svg
                          className="w-3.5 h-3.5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
                      <p className="text-lg font-bold"> {product.price} ₫</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/4 p-3 mt-2">
          <AdminMenu />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
