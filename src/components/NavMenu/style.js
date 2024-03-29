import { css } from 'styled-components';
import styled from 'styled-components';
const NavbarStyles = css`
  /* Navbar */
  .navbar {
    padding-bottom: 1px;
    border-bottom: solid 1px #e8e8e8;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);

    position: sticky;
    top: 0;
    margin-bottom: 20px;
    z-index: 99990;
  }

  .nav-header {
    background-color: white;
    border-bottom: 0;
  }

  .logo {
    width: 200px;
    float: left;
    text-align: center;
  }

  .logo a {
    display: inline-block;
    font-size: 20px;
    text-transform: capitalize;
  }

  .navbar-menu {
    float: right;
  }

  .menuButton {
    float: right;
    height: 32px;
    padding: 6px;
    margin-top: 14px;
    display: none;
    background: none;
    margin-right: 10px;
  }

  .ant-drawer-body {
    padding: 0;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item,
  .ant-drawer-body .ant-menu-horizontal > .ant-menu-submenu {
    display: inline-block;
    width: 100%;
  }

  .ant-drawer-body .ant-menu-horizontal {
    border-bottom: none;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item:hover {
    border-bottom-color: transparent;
  }

  .username {
    display: none;
    margin-left: 8px;
  }

  /* Navbar.css */

  .nav-header {
    display: flex;
    justify-content: space-between; /* Đảm bảo các phần con được căn giữa và căn đều */
  }

  .logo {
    margin-right: auto; /* Đẩy logo sang bên trái cùng */
  }

  .navbar-menu {
    display: flex;
  }

  .right-menu {
    margin-left: auto; /* Đẩy các mục menu sang bên phải cùng */
  }

  .username {
    margin-left: 8px; /* Khoảng cách giữa avatar và tên người dùng */
  }

  

  @media (max-width: 767px) {
    .menuButton {
      display: block;
      margin-right: 10px;
    }

    .leftMenu,
    .rightMenu {
      display: none;
    }

    .logo a {
      margin-left: -10px;
    }

    .ant-drawer-title > .brand-font {
      margin-bottom: 0;
    }

    .username {
      display: inline-block;
    }
  }
`;

export default NavbarStyles;



export const WrapperHeaderAccout = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  max-width: 200px;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`;

export const WrapperContentPopup = styled.p`
  cursor: pointer;
  &:hover {
    color: rgb(26, 148, 255);
  }
`;

export const ImgContainer = styled.img`
  width: 1px;
  height: 1px;
  display: "flex";
`;
