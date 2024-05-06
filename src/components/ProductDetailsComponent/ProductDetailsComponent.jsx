import { Col, Image, Rate, Row } from "antd";
import React from "react";
import imageProductSmall from "../../assets/images/imagesmall.webp";
import {
  WrapperStyleImageSmall,
  WrapperStyleColImage,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
  WrapperBtnQualityProduct,
} from "./style";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import * as ProductService from "../../services/ProductService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../LoadingComponent/Loading";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addOrderProduct, resetOrder } from "../../redux/slides/orderSlide";
import { convertPrice, initFacebookSDK } from "../../utils";
import { useEffect } from "react";
import * as message from "../Message/Message";
import LikeButtonComponent from "../LikeButtonComponent/LikeButtonComponent";
import CommentComponent from "../CommentComponent/CommentComponent";
import { useMemo } from "react";
import TableUserComponent from "../../components/TableUserComponent/TableUserComponent";


const ProductDetailsComponent = ({ idProduct }) => {
  const [numProduct, setNumProduct] = useState(1);
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const [errorLimitOrder, setErrorLimitOrder] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const onChange = (value) => {
    setNumProduct(Number(value));
  };

  var newID;


  const fetchGetDetailsProduct = async (context) => {
    const id = context?.queryKey && context?.queryKey[1];
    newID =id;
    if (id) {
      const res = await ProductService.getDetailsProduct(id);
      return res.data;
    }
  };

  useEffect(() => {
    initFacebookSDK();
  }, []);

  const { isLoading, data: productDetails } = useQuery(
    ["product-details", idProduct],
    fetchGetDetailsProduct,
    { enabled: !!idProduct }
  );

  useEffect(() => {
    const orderRedux = order?.orderItems?.find(
      (item) => item.product === productDetails?._id
    );
    if (
      orderRedux?.amount + numProduct <= orderRedux?.countInstock ||
      (!orderRedux && productDetails?.countInStock > 0)
    ) {
      setErrorLimitOrder(false);
    } else if (productDetails?.countInStock === 0) {
      setErrorLimitOrder(true);
    }
  }, [numProduct]);

  useEffect(() => {
    if (order.isSucessOrder) {
      message.success("Đã thêm vào Thanh toán");
    }
    return () => {
      dispatch(resetOrder());
    };
  }, [order.isSucessOrder]);

  const handleChangeCount = (type, limited) => {
    if (type === "increase") {
      if (!limited) {
        setNumProduct(numProduct + 1);
      }
    } else {
      if (!limited) {
        setNumProduct(numProduct - 1);
      }
    }
  };

  const handleAddOrderProduct = () => {
    if (!user?.id) {
      navigate("/sign-in", { state: location?.pathname });
    } else {
      // {
      //     name: { type: String, required: true },
      //     amount: { type: Number, required: true },
      //     image: { type: String, required: true },
      //     price: { type: Number, required: true },
      //     product: {
      //         type: mongoose.Schema.Types.ObjectId,
      //         ref: 'Product',
      //         required: true,
      //     },
      // },
      const orderRedux = order?.orderItems?.find(
        (item) => item.product === productDetails?._id
      );
      if (
        orderRedux?.amount + numProduct <= orderRedux?.countInstock ||
        (!orderRedux && productDetails?.countInStock > 0)
      ) {
        dispatch(
          addOrderProduct({
            orderItem: {
              name: productDetails?.name,
              amount: numProduct,
              image: productDetails?.image,
              price: productDetails?.price,
              product: productDetails?._id,
              discount: productDetails?.discount,
              countInstock: productDetails?.countInStock,
            },
          })
        );
      } else {
        setErrorLimitOrder(true);
      }
    }
  };

  const fetchGetComment = async () => {
    const res = await ProductService.getAllComment(newID);
    return res;
  };
  
  const queryComment = useQuery({
    queryKey: "comment",
    queryFn: fetchGetComment,
  });
  const { isLoading: isLoadingComment, data: comment } = queryComment;


  const dataTable1 =
    comment?.data?.length &&
    comment?.data?.map((comment) => {
      return { ...comment, key: comment._id };
    });

  const columns1 = [
    {
      title: "Tên nhận xét",
      dataIndex: "comment",
    },
  ];

  return (
    <Loading isLoading={isLoading}>
      <h1 className="heading" style={{ marginTop: "30px" }}>
              CHI TIẾT <span>DỊCH VỤ</span>{" "}
            </h1>
      <Row
        gutter={[18,18]}
        style={{
          padding: "16px",
          background: "#fff",
          borderRadius: "4px",
          height: "100%",
        }}
      >
        <Col sm={10} xs={20}
          span={10}
          style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
        >
          <Image
            src={productDetails?.image}
            alt="image prodcut"
            preview={false}
          />
        </Col>

        <Col sm={14} xs={9}
          span={14} 
          style={{ paddingLeft: "10px" }}
        >
          <WrapperStyleNameProduct>
            {productDetails?.name}
          </WrapperStyleNameProduct>
          <div>
            <Rate
              allowHalf
              defaultValue={productDetails?.rating}
              value={productDetails?.rating}
            />
            <WrapperStyleTextSell> | Lượt dùng 100+</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>
              {convertPrice(productDetails?.price)}
            </WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            {/* <span>Giao đến </span>
            <span className="address">{user?.address}</span> -
            <span className="change-address">Đổi địa chỉ</span> */}
            <span> {productDetails?.description}</span>
          </WrapperAddressProduct>

          <div style={{ display: "flex", aliggItems: "center", gap: "12px" }}>
            <div>
              <ButtonComponent
                size={40}
                styleButton={{
                  background: "rgb(255, 57, 69)",
                  height: "48px",
                  width: "220px",
                  border: "none",
                  borderRadius: "4px",
                }}
                onClick={handleAddOrderProduct}
                textbutton={"Chọn mua dịch vụ   "}
                styleTextButton={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              ></ButtonComponent>
              {errorLimitOrder && (
                <div style={{ color: "red" }}>San pham het hang</div>
              )}
            </div>
          </div>
        </Col>
        {/* <CommentComponent
          dataHref={
            process.env.REACT_APP_IS_LOCAL
              ? "https://developers.facebook.com/docs/plugins/comments#configurator"
              : window.location.href
          }
          width="1270"
        /> */}
      </Row>
      <TableUserComponent
          columns={columns1}
          isLoading={isLoadingComment}
          data={dataTable1}
        />
    </Loading>
  );
};

export default ProductDetailsComponent;
