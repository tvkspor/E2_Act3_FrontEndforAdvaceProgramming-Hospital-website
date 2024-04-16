import React from "react";
import HeaderComponent from "../HeaderCompoent/HeaderComponent";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";
// import { Wrapper } from './style'

const DefaultComponent = ({ children }) => {
  return (
    <div>
      {/* <HeaderComponent/> */}
      <NavMenu isHiddenCart/>
      {children}
      <Footer />
    </div>
  );
};

export default DefaultComponent;
