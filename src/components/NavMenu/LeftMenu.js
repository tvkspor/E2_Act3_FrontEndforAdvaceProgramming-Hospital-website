import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const LeftMenu = ({ mode }) => {
  const navigate = useNavigate();

  return (
    <Menu mode={mode}>
      <Menu.Item key="explore" onClick={() => navigate(`/`)}>
        Explore
      </Menu.Item>
      <Menu.Item key="features">Features</Menu.Item>
      <Menu.Item key="about">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
      <Menu.Item key="cont">Con Us</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
