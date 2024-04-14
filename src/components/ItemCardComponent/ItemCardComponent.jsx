import React from "react";
import { useNavigate } from "react-router-dom";
import hinh1 from "../../assets/images/maydohuyetap.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const ItemCardComponent = (props) => {
  const {
    name,
    price,
    availability,
    component,
    image,
    importDate,
  } = props;
  const navigate = useNavigate();
  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`);
  };
  return (
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={image} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
          </div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar}/></i> 1st may, 2021
              </a>
              <a href="#">
                <i className="fas fa-user"><FontAwesomeIcon icon={faUser}/></i> by admin
              </a>
            </div>
            <h3>{name}</h3>
            {/* <p>Lorem, ipsum dolor.</p> */}
            <ul style={{listStyleType: 'disc'}}>
              {/* <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Tình trạng</p>
                  <p style={{backgroundColor: '#FFAAAA', borderRadius: '10px', color: 'red', fontWeight: 'bold', padding: '10px'}}>{availability}</p>
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
                  <p>Ngày nhập kho</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>
                  {moment(importDate).format('DD/MM/YYYY')}</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Thành phần</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>{component}</p>
                </div>
              </li>
              <li>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Tình trạng</p>
                <p style={{
                  backgroundColor: availability === 'Unavailable' ? '#FFAAAA' : '#AAFFAA',
                  borderRadius: '10px',
                  color: availability === 'Unavailable' ? 'red' : 'green',
                  fontWeight: 'bold',
                  padding: '10px'
                }}>
                  {availability}
                </p>
              </div>
            </li>
            </ul>


            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
        </div>
      </div>
  );
};
export default ItemCardComponent;