import React, { useState, useEffect } from "react";
import { Layout, Button, Drawer, Menu, Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.jpg"
import NavbarStyles from "./style"

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

  return (
    <div className="navbar" css={NavbarStyles}>
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo" style={{cursor: "pointer", fontWeight: "bold", fontSize: "16px"}}>
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
                  <Menu.Item key="project">Projects</Menu.Item>
                  <Menu.Item key="about-us">Profile</Menu.Item>
                  <Menu.Item key="log-out">Logout</Menu.Item>
                </Menu>
              </Drawer>
            </div>
          ) : (
            <Menu mode="horizontal" className="rightMenu">
              <Menu.Item key="home">Trang chủ</Menu.Item>
              <Menu.Item key="specialist">Chuyên Khoa</Menu.Item>
              <Menu.Item key="expert">Chuyên gia</Menu.Item>
              <Menu.Item key="news">Tin tức</Menu.Item>
              <Menu.Item key="book">Đặt khám</Menu.Item>
              <Menu.Item key="bill">Hoá đơn</Menu.Item>
              <Menu.Item key="contact">Liên Hệ</Menu.Item>

              <Menu.SubMenu
                title={
                  <>
                    <Avatar icon={<UserOutlined />} />
                    <span className="username">John Doe</span>
                  </>
                }
              >
                <Menu.Item key="project">Projects</Menu.Item>
                <Menu.Item key="about-us">Profile</Menu.Item>
                <Menu.Item key="log-out">Logout</Menu.Item>
              </Menu.SubMenu>

              
            </Menu>
          )}
        </Layout.Header>
      </Layout>
    </div>
  );
};

export default Navbar;
