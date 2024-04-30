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

const MedicineComponent = (props) => {
  const {
    name,
    price,
    description,
    selled,
    countInStock,
    image,
    type,
  } = props;
  const navigate = useNavigate();
  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`);
  };
  return (
      <div className="box-container" >
        <div className="box" >
          <div className="image">
            <img src={image} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
          </div>
          <div className="content">
            <h3>{name}</h3>
            {/* <p>Lorem, ipsum dolor.</p> */}
            <ul style={{listStyleType: 'disc'}}>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Loại mặt hàng</p>
                  <p style={{backgroundColor: '#eaeffa', borderRadius: '10px', color: 'green', fontWeight: 'bold', padding: '10px'}}>{type}</p>
                </div>
              </li> 
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Giá cả</p>
                  <p style={{color: 'black'}}>{price}</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Hạn sử dụng</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>
                  {moment(selled).format('DD/MM/YYYY')}</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Số lượng còn lại</p>
                  <p style={{color: 'black'}}>{countInStock}</p>
                </div>
              </li>
              <li>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <p style={{padding:'0',margin:'0'}}>Mô tả</p>
                <p style={{
                  color: 'black',
                }}>
                  {description}
                </p>
              </div>
            </li>
            </ul>


            {/* <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a> */}
          </div>
        </div>
      </div>
  );
};
export default MedicineComponent;