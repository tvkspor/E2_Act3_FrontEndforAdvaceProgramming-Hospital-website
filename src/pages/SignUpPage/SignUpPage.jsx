import React from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import imageLogo from "../../assets/images/logo.jpg";
import { Image } from "antd";
import { useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { useEffect } from "react";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [CCCD, setCCCD] = useState("");



  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const mutation = useMutationHooks((data) => UserService.signupUser(data));

  const {
    data,
    isLoading,
    aaa = data?.status === "OK",
    bbb = data?.status === "ERR",
  } = mutation;

  useEffect(() => {
    if (aaa) {
      message.success();
      handleNavigateSignIn();
    } else if (bbb) {
      message.error();
    }
  }, [aaa, bbb]);

  console.log("mutation", mutation);

  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };
  const handleOnchangeName = (value) => {
    setName(value);
  };
  const handleOnchangeCCCD = (value) => {
    setCCCD(value);
  };

  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };

  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword, name, CCCD });
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
          <h1 style={{ fontSize: "32px", marginBottom: "10px", color: "#16A085", fontWeight: "bold" }}>Xin chào</h1>
          <p style={{ fontSize: "14px", marginBottom: "20px", color: "#666" }}>
            Đăng nhập hoặc tạo tài khoản mới
          </p>
          <InputForm
            style={{ marginBottom: "20px" }}
            placeholder="Nhập họ tên của bạn"
            value={name}
            onChange={handleOnchangeName}
          />
          <InputForm
            style={{ marginBottom: "20px" }}
            placeholder="Nhập email của bạn"
            value={email}
            onChange={handleOnchangeEmail}
          />
          <InputForm
            style={{ marginBottom: "20px" }}
            placeholder="Nhập CCCD của bạn"
            value={CCCD}
            onChange={handleOnchangeCCCD}
          />
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <InputForm
              placeholder="Nhập mật khẩu"
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
              placeholder="Kiểm tra lại mật khẩu"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleOnchangeConfirmPassword}
            />
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          </div>
          {data?.status === "ERR" && (
            <span style={{ color: "red", marginBottom: "20px" }}>{data?.message}</span>
          )}
          <Loading isLoading={isLoading}>
            <ButtonComponent
              disabled={
                !email.length || !password.length || !confirmPassword.length
              }
              onClick={handleSignUp}
              size={40}
              styleButton={{
                background: "#16A085",
                height: "48px",
                width: "100%",
                border: "none",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
              textbutton={"Đăng ký"}
              styleTextButton={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
              }}
              onMouseEnter={(e) => { e.target.style.opacity = "0.8"; }}
              onMouseLeave={(e) => { e.target.style.opacity = "1"; }}
            ></ButtonComponent>
          </Loading>
          <p>
            Bạn đã có tài khoản?{" "}
            <WrapperTextLight 
              style={{ fontSize: "14px", color: "#16A085", cursor: "pointer" }}
              onClick={handleNavigateSignIn}
              onMouseEnter={(e) => { e.target.style.textDecoration = "underline"; }}
              onMouseLeave={(e) => { e.target.style.textDecoration = "none"; }}
            >
              {" "}
              Đăng nhập
            </WrapperTextLight>
          </p>
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

export default SignUpPage;
