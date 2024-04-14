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

const ForgottenPassWordPage = () => {
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
            flex: "1",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "32px", marginBottom: "10px", color: "#16A085", fontWeight: "bold" }}>Xin chào</h1>
          <h1 style={{ fontSize: "32px", marginBottom: "10px", color: "#16A085", fontWeight: "bold" }}>Bạn hãy kiểm tra email để đặt lại mật khẩu nhé!</h1>
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
