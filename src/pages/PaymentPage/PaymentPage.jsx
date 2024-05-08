import { Form, Radio } from "antd";
import React, { useEffect, useState } from "react";
import {
  Lable,
  WrapperInfo,
  WrapperLeft,
  WrapperRadio,
  WrapperRight,
  WrapperTotal,
} from "./style";

import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { convertPrice } from "../../utils";
import { useMemo } from "react";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserService";
import * as OrderService from "../../services/OrderService";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { updateUser } from "../../redux/slides/userSlide";
import { useNavigate } from "react-router-dom";
import { removeAllOrderProduct } from "../../redux/slides/orderSlide";
import * as PaymentService from "../../services/PaymentService";

const PaymentPage = () => {
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);

  const [payment, setPayment] = useState("later_money");
  const navigate = useNavigate();
  const [sdkReady, setSdkReady] = useState(false);

  const [isOpenModalUpdateInfo, setIsOpenModalUpdateInfo] = useState(false);
  const [stateUserDetails, setStateUserDetails] = useState({
    name: "",
    BHXH: "",
    CCCD: "",
  });
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    form.setFieldsValue(stateUserDetails);
  }, [form, stateUserDetails]);

  useEffect(() => {
    if (isOpenModalUpdateInfo) {
      setStateUserDetails({
        name: user?.name,
        BHXH: user?.BHXH,
        CCCD: user?.CCCD,
      });
    }
  }, [isOpenModalUpdateInfo]);

  const handleChangeAddress = () => {
    setIsOpenModalUpdateInfo(true);
  };
  // Tính toán tiền bạc các thứ
  const priceMemo = useMemo(() => {
    const result = order?.orderItemsSlected?.reduce((total, cur) => {
      return total + cur.price * cur.amount;
    }, 0);
    return result;
  }, [order]);

  const priceDiscountMemo = useMemo(() => {
    const result = order?.orderItemsSlected?.reduce((total, cur) => {
      const totalDiscount = cur.discount ? cur.discount : 0;
      return total + (priceMemo * (totalDiscount * cur.amount)) / 100;
    }, 0);
    if (Number(result)) {
      return result;
    }
    return 0;
  }, [order]);

  const totalPriceMemo = useMemo(() => {
    return Number(priceMemo) - Number(priceDiscountMemo);
  }, [priceMemo, priceDiscountMemo]);

  const handleAddOrder = () => {
    if (
      user?.access_token &&
      order?.orderItemsSlected &&
      user?.name &&
      user?.address &&
      user?.phone &&
      priceMemo &&
      user?.id &&
      user?.BHXH &&
      user?.CCCD
    ) {
      mutationAddOrder.mutate({
        token: user?.access_token,
        orderItems: order?.orderItemsSlected,
        fullName: user?.name,
        address: user?.address,
        phone: user?.phone,
        paymentMethod: payment,
        itemsPrice: priceMemo,
        totalPrice: totalPriceMemo,
        user: user?.id,
        email: user?.email,
        BHXH: user?.BHXH,
        CCCD: user?.CCCD,
      });
    } else {
      message.error(
        "Vui lòng cung cấp đầy đủ thông tin trước khi đặt liệu trình"
      );
    }
  };

  const mutationUpdate = useMutationHooks((data) => {
    const { id, token, ...rests } = data;
    const res = UserService.updateUser(id, { ...rests }, token);
    return res;
  });

  const mutationAddOrder = useMutationHooks((data) => {
    const { token, ...rests } = data;
    const res = OrderService.createOrder({ ...rests }, token);
    return res;
  });

  const { isLoading, data } = mutationUpdate;
  const {
    data: dataAdd,
    isLoading: isLoadingAddOrder,
    isSuccess,
    isError,
  } = mutationAddOrder;

  useEffect(() => {
    if (isSuccess && dataAdd?.status === "OK") {
      const arrayOrdered = [];
      order?.orderItemsSlected?.forEach((element) => {
        arrayOrdered.push(element.product);
      });
      dispatch(removeAllOrderProduct({ listChecked: arrayOrdered }));
      message.success("Đặt dịch vụ thành công");
      // navigate("/orderSuccess", {
      //   state: {
      //     payment,
      //     orders: order?.orderItemsSlected,
      //     totalPriceMemo: totalPriceMemo,
      //   },
      // });
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const handleCancleUpdate = () => {
    setStateUserDetails({
      name: "",
      email: "",
      phone: "",
      isAdmin: false,
    });
    form.resetFields();
    setIsOpenModalUpdateInfo(false);
  };

  const handleUpdateInforUser = () => {
    const { name, BHXH, CCCD } = stateUserDetails;
    if (name && BHXH && CCCD) {
      mutationUpdate.mutate(
        { id: user?.id, token: user?.access_token, ...stateUserDetails },
        {
          onSuccess: () => {
            dispatch(updateUser({ name, BHXH, CCCD }));
            setIsOpenModalUpdateInfo(false);
          },
        }
      );
    }
  };

  const handleOnchangeDetails = (e) => {
    setStateUserDetails({
      ...stateUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  return (
    <div style={{ background: "#f5f5fa", with: "100%", height: "100vh" }}>
      <Loading isLoading={isLoadingAddOrder}>
        <div style={{ height: "100%", width: "1270px", margin: "0 auto" }}>
          <h3>
            Thanh toán (Thanh toán sau khi hoàn thành chương trình điều trị)
          </h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <WrapperLeft>
              <WrapperInfo>
                <div>
                  <Lable>Chọn phương thức thanh toán</Lable>
                  <WrapperRadio onChange={handlePayment} value={payment}>
                    <Radio value="later_money"> Thanh toán đầy đủ</Radio>
                    <Radio value="paypal">
                      {" "}
                      Thanh toán có BHYT(liên hệ bệnh viện)
                    </Radio>
                  </WrapperRadio>
                </div>
              </WrapperInfo>
            </WrapperLeft>
            <WrapperRight>
              <div style={{ width: "100%" }}>
                <WrapperInfo>
                  <div>
                    <span>Thông tin bổ sung(CCCD, BHXH): </span>

                    <span
                      onClick={handleChangeAddress}
                      style={{ color: "#9255FD", cursor: "pointer" }}
                    >
                      Thay đổi
                    </span>
                  </div>
                </WrapperInfo>
                <WrapperInfo>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Tạm tính</span>
                    <span
                      style={{
                        color: "#000",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {convertPrice(priceMemo)}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Giảm giá</span>
                    <span
                      style={{
                        color: "#000",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {convertPrice(priceDiscountMemo)}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  ></div>
                </WrapperInfo>
                <WrapperTotal>
                  <span>Tổng tiền</span>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        color: "rgb(254, 56, 52)",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      {convertPrice(totalPriceMemo)}
                    </span>
                    <span style={{ color: "#000", fontSize: "11px" }}>
                      (Đã bao gồm VAT nếu có)
                    </span>
                  </span>
                </WrapperTotal>
              </div>
              {/* {payment === 'paypal' && sdkReady ? (
                <div style={{width: '320px'}}>
                  <PayPalButton
                    amount={Math.round(totalPriceMemo / 30000)}
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={onSuccessPaypal}
                    onError={() => {
                      alert('Error')
                    }}
                  />
                </div>
              ) : ( */}
              <ButtonComponent
                onClick={() => handleAddOrder()}
                size={40}
                styleButton={{
                  background: "rgb(255, 57, 69)",
                  height: "48px",
                  width: "320px",
                  border: "none",
                  borderRadius: "4px",
                }}
                textbutton={"Đặt dịch vụ"}
                styleTextButton={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              ></ButtonComponent>
              {/* )} */}
            </WrapperRight>
          </div>
        </div>
        <ModalComponent
          title="Cập nhật thông tin người dùng"
          open={isOpenModalUpdateInfo}
          onCancel={handleCancleUpdate}
          onOk={handleUpdateInforUser}
        >
          <Loading isLoading={isLoading}>
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              // onFinish={onUpdateUser}
              autoComplete="on"
              form={form}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <InputComponent
                  value={stateUserDetails["name"]}
                  onChange={handleOnchangeDetails}
                  name="name"
                />
              </Form.Item>
              <Form.Item
                label="Bảo hiểm xã hội"
                name="BHXH"
                rules={[
                  { required: true, message: "Please input your insurance!" },
                ]}
              >
                <InputComponent
                  value={stateUserDetails["BHXH"]}
                  onChange={handleOnchangeDetails}
                  name="BHXH"
                />
              </Form.Item>
              <Form.Item
                label="Căn cước công dân"
                name="CCCD"
                rules={[
                  { required: true, message: "Please input your credential!" },
                ]}
              >
                <InputComponent
                  value={stateUserDetails.phone}
                  onChange={handleOnchangeDetails}
                  name="CCCD"
                />
              </Form.Item>
            </Form>
          </Loading>
        </ModalComponent>
      </Loading>
    </div>
  );
};

export default PaymentPage;
