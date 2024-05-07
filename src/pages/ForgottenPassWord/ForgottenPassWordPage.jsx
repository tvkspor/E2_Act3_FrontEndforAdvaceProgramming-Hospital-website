import React, { useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperButton } from "./style";
import imageLogo from "../../assets/images/logo.jpg";
import { Image, message } from "antd";
import InputForm from "../../components/InputForm/InputForm";
import { forgotPassword } from "../../services/UserService";
const ForgottenPassWordPage = () => {
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const handleResetPass = async () => {
    try {
      // Gửi email thông qua UserService
      await forgotPassword(email);
      setMessageText("Vui lòng kiểm tra hộp thư đến của bạn.(Hoặc thư rác)");
      message.success("Email đã được gửi thành công!");
    } catch (error) {
      setMessageText("Đã xảy ra lỗi khi gửi email!");
      message.error("Đã xảy ra lỗi khi gửi email!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #e2e2e2, #c9d6ff)", // Màu nền
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "30px",
          background: "#fff",
          display: "flex",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)", // Đổ bóng
        }}
      >
        <WrapperContainerLeft
          style={{
            flex: "1", // Phần tử chiếm một phần tử
            padding: "30px", // Padding bên trong
          }}
        >
          <h1 style={{ fontSize: "32px", marginBottom: "10px", color: "#16A085", fontWeight: "bold" }}>Quên mật khẩu</h1>
          <p style={{ fontSize: "20px", marginBottom: "20px", color: "#000000" }}>
            Vui lòng nhập email chính xác
          </p>
          <InputForm
            style={{ marginBottom: "20px" }}
            placeholder="Nhập email của bạn"
            value={email}
            onChange={handleOnchangeEmail}
          />
          <WrapperButton onClick={handleResetPass}>
            Gửi Email
          </WrapperButton>
          <p style={{paddingTop:"20px", color:"blueviolet"}}>
            Lưu ý: Link nhận được chỉ có hiệu lực trong vòng 3 phút
          </p>
          <div
            style={{fontSize: "14", marginTop: "20px", color: "#ea4a4a"}}
          >
            {messageText}
          </div>
        </WrapperContainerLeft>
        <WrapperContainerRight
          style={{
            flex: "1", // Phần tử chiếm một phần tử
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px", // Padding bên trong
          }}
        >
          <Image
            src={imageLogo}
            preview={false}
            alt="iamge-logo"
            height="280px"
            width="280px"
            style={{ marginBottom: "20px" }}
          />
          <h4 style={{ fontSize: "24px", color: "#16A085", fontWeight: "bold" }}>
            YOUR HEALTH, OUR MISSION
          </h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default ForgottenPassWordPage;
