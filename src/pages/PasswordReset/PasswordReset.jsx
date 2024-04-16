import React, { useState, useEffect } from "react";
import { WrapperContainerLeft, WrapperContainerRight,WrapperButton } from "./style";
import imageLogo from "../../assets/images/logo.jpg";
import { Image } from "antd";
import InputForm from "../../components/InputForm/InputForm";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { resetPassword } from "../../services/UserService";

const PasswordReset = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Sử dụng useLocation để lấy thông tin từ URL

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState(""); // Thêm state để lưu email

  const mutation = useMutationHooks((data) => UserService.resetPassword(data));

  const { isLoading, isSuccess, isError, errorMessage } = mutation;

  useEffect(() => {
    // Lấy giá trị của tham số token từ URL khi component được tạo
    const searchParams = new URLSearchParams(location.search);
    const tokenParam = searchParams.get("token");
    const email = tokenParam.split("=")[1];
    setEmail(email);
  }, [location.search]);
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const handleResetPassword = async () => {
    // Check if passwords match
    if (password !== confirmPassword && password !=="") {
      message.error("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }
    try {
      // Gọi hàm resetPassword với tham số email
      await resetPassword(email, password, confirmPassword);
      message.success("Thay đổi thành công!");
      navigate("/sign-in");
    } catch (error) {
      // Xử lý lỗi nếu cần
      console.error("Lỗi khi đổi mật khẩu:", error);
      message.error("Đã xảy ra lỗi khi đổi mật khẩu. Vui lòng thử lại sau.");
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
          <h1 style={{ fontSize: "32px", marginBottom: "10px", color: "#16A085", fontWeight: "bold" }}>Đổi mật khẩu</h1>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <InputForm
              placeholder="Nhập mật khẩu mới"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
            />
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          </div>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <InputForm
              placeholder="Nhập lại mật khẩu mới"
              type={isShowPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleOnchangeConfirmPassword}
            />
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          </div>
          {isError && (
            <span style={{ color: "red", marginBottom: "20px" }}>{errorMessage}</span>
          )}
          <Loading isLoading={isLoading}>
            <WrapperButton
              disabled={!password || !confirmPassword || isLoading}
              onClick={handleResetPassword}
            >
              Đổi mật khẩu
            </WrapperButton>
          </Loading>
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

export default PasswordReset;
