import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "../../utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from 'moment';
import {
  faChevronRight,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const CardComponent = (props) => {
  const {
    countInStock,
    description,
    image,
    name,
    price,
    rating,
    type,
    discount,
    selled,
    id,
  } = props;
  const navigate = useNavigate();
  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`);
  };
  return (
    // <WrapperCardStyle
    //   hoverable
    //   headStyle={{ width: "200px", height: "200px" }}
    //   style={{ width: 200 }}
    //   bodyStyle={{ padding: "10px" }}
    //   cover={<img alt="example" src={image} />}
    //   onClick={() => handleDetailsProduct(id)}
    // >
    //   <img
    //     src={logo}
    //     style={{
    //       width: "68px",
    //       height: "14px",
    //       position: "absolute",
    //       top: -1,
    //       left: -1,
    //       borderTopLeftRadius: "3px",
    //     }}
    //   />
    //   <StyleNameProduct>{name}</StyleNameProduct>
    //   <WrapperReportText>
    //     <span style={{ marginRight: "4px" }}>
    //       <span>{rating} </span>{" "}
    //       <StarFilled
    //         style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
    //       />
    //     </span>
    //     <WrapperStyleTextSell>
    //       {" "}
    //       | Lượt dùng {selled || 100}+
    //     </WrapperStyleTextSell>
    //   </WrapperReportText>
    //   <WrapperPriceText>
    //     <span style={{ marginRight: "8px" }}>{convertPrice(price)}</span>
    //     <WrapperDiscountText>- {discount || 5} %</WrapperDiscountText>
    //   </WrapperPriceText>
    // </WrapperCardStyle>

    <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={image} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
          </div>
          <div className="content">
          
            <h3>{name}</h3>
            {/* <p>Lorem, ipsum dolor.</p> */}
            <ul style={{listStyleType: 'disc'}}>
             
              {/* <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Mã sản phẩm</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>{id}</p>
                </div>
              </li> */}
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Giá</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>{price}</p>
                </div>
              </li>


              
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Loại</p>

                  <p style={{color: 'black', fontWeight: 'bold'}}>{type}</p>
                  

                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Lượt mua</p>

                  <p style={{color: 'black', fontWeight: 'bold'}}>{selled}</p>
                  

                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Giảm giá</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>-{discount}%</p>
                </div>
              </li>
              {/* <li>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Tình trạng</p>
                <p style={{
                  backgroundColor: (availability === 'Unavailable' || availability === 'Hết hàng') ? '#FFAAAA' : '#AAFFAA',
                  borderRadius: '10px',
                  color: (availability === 'Unavailable' || availability === 'Hết hàng') ? 'red' : 'green',
                  fontWeight: 'bold',
                  padding: '10px'
                }}>
                  {availability}
                </p>
              </div>
            </li> */}
            </ul>


            <a className="btn" onClick={() => handleDetailsProduct(id)}>
              {" "}
              xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>

              </a>
              </div>
        </div>
      </div>
  );
};

export default CardComponent;
