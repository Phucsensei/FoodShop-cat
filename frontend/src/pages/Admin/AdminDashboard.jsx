import Chart from "react-apexcharts";
import { useGetUsersQuery } from "../../redux/api/usersApiSlice";
import {
  useGetTotalOrdersQuery,
  useGetTotalSalesByDateQuery,
  useGetTotalSalesQuery,
} from "../../redux/api/orderApiSlice";

import { useState, useEffect } from "react";
import AdminMenu from "./AdminMenu";
import OrderList from "./OrderList";
import Loader from "../../components/Loader";
import { MdOutlinePointOfSale } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";

const AdminDashboard = () => {
  const { data: sales, isLoading } = useGetTotalSalesQuery();
  const { data: customers, isLoading: loading } = useGetUsersQuery();
  const { data: orders, isLoading: loadingTwo } = useGetTotalOrdersQuery();
  const { data: salesDetail } = useGetTotalSalesByDateQuery();

  const [state, setState] = useState({
    options: {
      chart: {
        type: "area",
      },
      tooltip: {
        theme: "dark",
      },
      colors: ["#00E396"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Sales Trend",
        align: "left",
      },
      grid: {
        borderColor: "#ccc",
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: [],
        title: {
          text: "Date",
        },
      },
      yaxis: {
        title: {
          text: "Sales",
        },
        min: 0,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
    series: [{ name: "Sales", data: [] }],
  });

  useEffect(() => {
    if (salesDetail) {
      const formattedSalesDate = salesDetail.map((item) => ({
        x: item._id,
        y: item.totalSales,
      }));

      setState((prevState) => ({
        ...prevState,
        options: {
          ...prevState.options,
          xaxis: {
            categories: formattedSalesDate.map((item) => item.x),
          },
        },

        series: [
          { name: "Sales", data: formattedSalesDate.map((item) => item.y) },
        ],
      }));
    }
  }, [salesDetail]);

  return (
    <>
      <AdminMenu />

      <section className="xl:ml-[4rem] md:ml-[0rem]">
        <div className="w-[80%] flex justify-around flex-wrap">
          <div
            className="rounded-lg bg-yellow-200 p-5 w-[25rem] mt-5"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <div className="font-bold rounded-full w-[3rem]  text-center p-3">
              <MdOutlinePointOfSale size={37} />
            </div>

            <p
              className="mt-5"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Sales
            </p>
            <h1
              className="text-xl font-bold"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {isLoading ? <Loader /> : sales.totalSales.toFixed(2)} ₫
            </h1>
          </div>
          <div
            className="rounded-lg bg-violet-400 p-5 w-[25rem] mt-5"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <div className="font-bold rounded-full w-[3rem] text-center p-3">
              <RiCustomerService2Fill size={37} />
            </div>

            <p
              className="mt-5"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Customers
            </p>
            <h1
              className="text-xl font-bold uppercase"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {isLoading ? <Loader /> : customers?.length} customers
            </h1>
          </div>
          <div
            className="rounded-lg bg-orange-300 p-5 w-[25rem] mt-5"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <div className="font-bold rounded-full w-[3rem]  text-center p-3">
              <AiOutlineShoppingCart size={37} />
            </div>

            <p
              className="mt-5"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              All Orders
            </p>
            <h1
              className="text-xl font-bold uppercase"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {isLoading ? <Loader /> : orders?.totalOrders} Order
            </h1>
          </div>
        </div>

        <div className="ml-[10rem] mt-[4rem]">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="70%"
          />
        </div>

        <div className="mt-[4rem]">
          <OrderList />
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
