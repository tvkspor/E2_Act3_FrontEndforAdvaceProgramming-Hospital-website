import React, { useState, useEffect } from "react";
import { Layout, Button, Drawer, Menu, Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { WrapperNav } from "./style"
import logo from "../../assets/images/logo.jpg"
import MenuItem from "antd/lib/menu/MenuItem";

import ButttonInputSearch from "../ButtonInputSearch/ButttonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slides/userSlide";

import Loading from "../LoadingComponent/Loading";

import { searchProduct } from "../../redux/slides/productSlide";

import {
  WrapperAccount,
  WrapperHeader,
  WrapperHeaderAccout,
  WrapperTextHeader,
  WrapperDivMenu,
  WrapperTextSmall,
  WrapperPopup,
  ImgContainer,
} from "./style";
import { Badge, Col, Popover } from "antd";
import {
  
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";



const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const showDrawer = () => {
    setVisible(!visible);
  };

  const { pathname: location } = useLocation();

  useEffect(() => {
    setVisible(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Gọi hàm ngay lúc ban đầu để xác định isMobile
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [search, setSearch] = useState("");
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const order = useSelector((state) => state.order);
  const [loading, setLoading] = useState(false);
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };

  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
    setLoading(false);
  }, [user?.name, user?.avatar]);

  const handleClickNavigate = (type) => {
    if (type === "profile") {
      navigate("/profile-user");
    } else if (type === "admin") {
      navigate("/system/admin");
    } 
    else if(type === "khoa") {
      navigate("/khoa");
    }
    else if(type === "booking") {
      navigate("/booking");
    }
    else if(type === "/") {
      navigate("/");
    }
    else if(type === "doctor") {
      navigate("/doctor");
    }
    else if (type === "my-order") {
      navigate("/my-order", {
        state: {
          id: user?.id,
          token: user?.access_token,
        },
      });
    } else {
      handleLogout();
      navigate("/");
    }
    setIsOpenPopup(false);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchProduct(e.target.value));
  };

  const content = (
    <div>
      <WrapperPopup onClick={() => handleClickNavigate("profile")}>
        Thông tin người dùng
      </WrapperPopup>
      {user?.isAdmin && (
        <WrapperPopup onClick={() => handleClickNavigate("admin")}>
          Quản lí hệ thống
        </WrapperPopup>
      )}
      <WrapperPopup onClick={() => handleClickNavigate(`my-order`)}>
        Đơn hàng của tôi
      </WrapperPopup>
      <WrapperPopup onClick={() => handleClickNavigate("booking")}>
        Đặt khám
      </WrapperPopup>
      <WrapperPopup onClick={() => handleClickNavigate()}>
        Đăng xuất
      </WrapperPopup>
    </div>
  );

  return (
    <WrapperNav>
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo" style={{cursor: "pointer", fontWeight: "bold", fontSize: "16px"}} onClick={() => handleClickNavigate("/")}>
            <img src={logo} alt="Logo" style={{width: "50px", height: "50px"}}/>
            Hospital
          </div>

          {isMobile ? (
            <div className="navbar-menu">
              <Button className="menuButton" type="text" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <Drawer
                title={"Menu"}
                placement="right"
                closable={true}
                onClose={showDrawer}
                visible={visible}
                style={{ zIndex: 99999 }}
              >
                <Menu mode={"inline"}>
                  <Menu.Item key="home">Trang chủ</Menu.Item>
                  <Menu.Item key="specialist">Chuyên Khoa</Menu.Item>
                  <Menu.Item key="expert">Chuyên gia</Menu.Item>
                  <Menu.Item key="news">Tin tức</Menu.Item>
                  <Menu.Item key="book">Đặt khám</Menu.Item>
                  <Menu.Item key="bill">Hoá đơn</Menu.Item>
                  <Menu.Item key="contact">Liên Hệ</Menu.Item>
                  <Menu.Item key="login">
                  <Loading isLoading={loading}>
            <WrapperAccount>
              {userAvatar ? (
                <img
                  src={userAvatar}
                  alt="avatar"
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <UserOutlined style={{ fontSize: "30px" }} />
              )}
              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click" open={isOpenPopup}>
                    <div
                      style={{
                        cursor: "pointer",
                        maxWidth: 100,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      onClick={() => setIsOpenPopup((prev) => !prev)}
                    >
                      {userName?.length ? userName : user?.email}
                    </div>
                  </Popover>
                </>
              ) : (
                <div
                  onClick={handleNavigateLogin}
                  style={{ cursor: "pointer" }}
                >
                  <WrapperTextSmall>

                  </WrapperTextSmall>
                  <div>
                    <WrapperTextSmall>Tài khoản</WrapperTextSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
              )}
            </WrapperAccount>
          </Loading> </Menu.Item>
                  
                </Menu>
              </Drawer>
            </div>
          ) : (
            <Menu mode="horizontal" className="rightMenu">
              <Menu.Item key="home" onClick={() => handleClickNavigate("/")}>Trang chủ</Menu.Item>
              <Menu.Item key="specialist" onClick={() => handleClickNavigate("khoa")}>Chuyên Khoa</Menu.Item>
              <Menu.Item key="expert" onClick={() => handleClickNavigate("doctor")}>Chuyên gia</Menu.Item>
              <Menu.Item key="news">Tin tức</Menu.Item>
              <Menu.Item key="book">Đặt khám</Menu.Item>
              <Menu.Item key="bill">Hoá đơn</Menu.Item>
              <Menu.Item key="contact">Liên Hệ</Menu.Item>

              <Menu.Item key="login"> 

              <Loading isLoading={loading}>
            <WrapperAccount>
              {userAvatar ? (
                <img
                  src={userAvatar}
                  alt="avatar"
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <UserOutlined style={{ fontSize: "30px" }} />
              )}
              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click" open={isOpenPopup}>
                    <div
                      style={{
                        cursor: "pointer",
                        maxWidth: 100,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      onClick={() => setIsOpenPopup((prev) => !prev)}
                    >
                      {userName?.length ? userName : user?.email}
                    </div>
                  </Popover>
                </>
              ) : (
                <div
                  onClick={handleNavigateLogin}
                  style={{ cursor: "pointer" }}
                >
                  <WrapperTextSmall>

                  </WrapperTextSmall>
                  <div>
                    <WrapperTextSmall>Tài khoản</WrapperTextSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
              )}
            </WrapperAccount>
          </Loading> 
              </Menu.Item>
             
              
            </Menu>
          )}
        </Layout.Header>
      </Layout>
    </WrapperNav>
  );
};

export default Navbar;
