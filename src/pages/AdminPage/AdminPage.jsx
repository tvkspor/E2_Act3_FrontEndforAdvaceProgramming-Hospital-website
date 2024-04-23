import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { getItem } from "../../utils";
import {
  UserOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import HeaderComponent from "../../components/HeaderCompoent/HeaderComponent";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import OrderAdmin from "../../components/OrderAdmin/OrderAmin";
import AdminDoctor from "../../components/AdminDoctor/AdminDoctor";
import AdminItem from "../../components/AdminItem/AdminItem"
import AdminMedicine from "../../components/AdminMedicine/AdminMedicine";
import AdminBooking from "../../components/AdminBooking/AdminBooking"
import * as OrderService from "../../services/OrderService";
import * as ProductService from "../../services/ProductService";
import * as UserService from "../../services/UserService";
import * as DoctorService from "../../services/DoctorService"
import * as ItemService from "../../services/ItemService"
import * as MedicineService from "../../services/MedicineService";
import * as BookingService from "../../services/BookingService"


import CustomizedContent from "./components/CustomizedContent";
import { useSelector } from "react-redux";
import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";
import Loading from "../../components/LoadingComponent/Loading";

const AdminPage = () => {
  const user = useSelector((state) => state?.user);

  const items = [
    getItem("Người dùng", "users", <UserOutlined />),
    getItem("Liệu trình", "products", <AppstoreOutlined />),
    getItem("Đơn khám", "orders", <ShoppingCartOutlined />),
    getItem("Bác sĩ", "doctors", <UserOutlined />),
    getItem("Thiết bị", "items", <AppstoreOutlined />),
    getItem("Thuốc", "medicines", <AppstoreOutlined />),
    getItem("Đặt khám", "bookings", <UserOutlined />),
  ];

  const [keySelected, setKeySelected] = useState("");
  const getAllOrder = async () => {
    const res = await OrderService.getAllOrder(user?.access_token);
    return { data: res?.data, key: "orders" };
  };

  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct();
    return { data: res?.data, key: "products" };
  };

  const getAllUsers = async () => {
    const res = await UserService.getAllUser(user?.access_token);
    return { data: res?.data, key: "users" };
  };

  const getAllDoctor = async () => {
    const res = await DoctorService.getAllDoctor();
    return { data: res?.data, key: "doctors" };
  };

  const getAllItem = async () => {
    const res = await ItemService.getAllItem();
    return { data: res?.data, key: "items" };
  };
  const getAllMedicine = async () => {
    const res = await MedicineService.getAllItem();
    return { data: res?.data, key: "medicines" };
  };
  const getAllBooking = async () => {
    const res = await BookingService.getAllBooking();
    return { data: res?.data, key: "bookings" };
  };

  const queries = useQueries({
    queries: [
      { queryKey: ["products"], queryFn: getAllProducts, staleTime: 1000 * 60 },
      { queryKey: ["users"], queryFn: getAllUsers, staleTime: 1000 * 60 },
      { queryKey: ["orders"], queryFn: getAllOrder, staleTime: 1000 * 60 },
      { queryKey: ["doctors"], queryFn: getAllDoctor, staleTime: 1000 * 60 },
      { queryKey: ["items"], queryFn: getAllItem, staleTime: 1000 * 60 },
      { queryKey: ["medicines"], queryFn: getAllMedicine, staleTime: 1000 * 60 },
      { queryKey: ["bookings"], queryFn: getAllBooking, staleTime: 1000 * 60 },
    ],
  });
  const memoCount = useMemo(() => {
    const result = {};
    try {
      if (queries) {
        queries.forEach((query) => {
          result[query?.data?.key] = query?.data?.data?.length;
        });
      }
      return result;
    } catch (error) {
      return result;
    }
  }, [queries]);

  const COLORS = {
    users: ["#e66465", "#9198e5"],
    products: ["#a8c0ff", "#3f2b96"],
    orders: ["#11998e", "#38ef7d"],
    doctors: ["#a8c0ff", "#3f2b96"],
    // items: ["#a8c0ff", "#3f2b96"],
    // medicines: ["#a8c0ff", "#3f2b96"],
    // bookings: ["#a8c0ff", "#3f2b96"],
  };

  const renderPage = (key) => {
    switch (key) {
      case "users":
        return <AdminUser />;
      case "products":
        return <AdminProduct />;
      case "orders":
        return <OrderAdmin />;
      case "doctors":
        return <AdminDoctor />;
      case "items":
        return <AdminItem />;
      case "medicines":
        return <AdminMedicine />;
      case "bookings":
        return <AdminBooking />;
      default:
        return <></>;
    }
  };

  const handleOnCLick = ({ key }) => {
    setKeySelected(key);
  };
  return (
    <>
      {/* <HeaderComponent isHiddenCart /> */}
      <div style={{ display: "flex", overflowX: "hidden" }}>
        <Menu
          mode="inline"
          style={{
            width: 180,
            boxShadow: "1px 1px 2px #ccc",
            height: "100vh",
          }}
          items={items}
          onClick={handleOnCLick}
        />
        <div style={{ flex: 1, padding: "15px 0 15px 15px" }}>
          <Loading isLoading={false}>

            
            
          </Loading>
          {renderPage(keySelected)}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
