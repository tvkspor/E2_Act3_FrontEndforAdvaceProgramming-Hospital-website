import React, { useEffect } from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import imageLogo from "../../assets/images/logo.jpg";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const { data, isLoading, aaa = data?.status === "OK" } = mutation;

  useEffect(() => {
    if (aaa) {
      if (location?.state) {
        navigate(location?.state);
      } else {
        navigate("/");
      }
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(data?.refresh_token)
      );
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [aaa]);

  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem("refresh_token");
    const refreshToken = JSON.parse(storage);
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken }));
  };

  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };

  const handleForgotPassw = () => {
    navigate("/forgotpassword");
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
    });
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
            placeholder="Nhập email của bạn"
            value={email}
            onChange={handleOnchangeEmail}
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
          {data?.status === "ERR" && (
            <span style={{ color: "red", marginBottom: "20px" }}>
              {data?.message}
            </span>
          )}
          <Loading isLoading={isLoading}>
            <ButtonComponent
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
              size={40}
              styleButton={{
                background: "#16A085",
                height: "48px",
                width: "100%",
                border: "none",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
              textbutton={"Đăng nhập"}
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
            <WrapperTextLight
              style={{ fontSize: "14px", color: "#666", cursor: "pointer" }}
              onClick={handleForgotPassw}
              onMouseEnter={(e) => { e.target.style.textDecoration = "underline"; }}
              onMouseLeave={(e) => { e.target.style.textDecoration = "none"; }}
            >
              Quên mật khẩu?
            </WrapperTextLight>
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Chưa có tài khoản?{" "}
            <WrapperTextLight
              style={{ color: "#16A085", cursor: "pointer" }}
              onClick={handleNavigateSignUp}
              onMouseEnter={(e) => { e.target.style.textDecoration = "underline"; }}
              onMouseLeave={(e) => { e.target.style.textDecoration = "none"; }}
            >
              Tạo tài khoản
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

export default SignInPage;
