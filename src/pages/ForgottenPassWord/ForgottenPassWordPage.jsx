import React, { useEffect } from "react";
import { WrapperContainerLeft, WrapperContainerRight } from "./style";
import imageLogo from "../../assets/images/flogo.png";
import { Image } from "antd";

const ForgottenPassWordPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>
            Xin chào, hãy kiểm tra hòm mail của bạn để nhận mail tạo mới mật
            khẩu nhé.
          </h1>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="iamge-logo"
            height="203px"
            width="203px"
          />
          <h4>Chăm sóc sức khỏe cùng chúng tôi</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default ForgottenPassWordPage;
