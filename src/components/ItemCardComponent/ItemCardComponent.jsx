import React, { useState } from "react";
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
    id,
    name,
    price,
    availability,
    component,
    image,
    importDate,
    description,
  } = props;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = () => {
    // Open the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  // const handleClickNavigate = (type) => {
  //   if (type === "Learn more") {
  //     navigate("/item-details");

  //   } else {
  //     handleLogout();
  //     navigate("/");
  //   }
  //   setIsOpenPopup(false);
  // };
  return (
    <div className="box-container">
      <div className="box">
        <div className="image">
          <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
        <div className="content">
          <div className="icon">
            <a href="#">
              <i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar} /></i> 1st may, 2021
            </a>
            <a href="#">
              <i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i> by admin
            </a>
          </div>
          <h3>{name}</h3>
          <ul style={{ listStyleType: 'disc' }}>
            <li>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Giá</p>
                <p style={{ color: 'black', fontWeight: 'bold' }}>{price}</p>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Ngày nhập kho</p>
                <p style={{ color: 'black', fontWeight: 'bold' }}>
                  {moment(importDate).format('DD/MM/YYYY')}</p>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Thành phần</p>
                <p style={{ color: 'black', fontWeight: 'bold' }}>{component}</p>
              </div>
            </li>
            <li>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
            </li>
          </ul>
          <button onClick={handleDetailsClick} className="btn">
            {" "}
            Learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight} /></span>
          </button>
          {/* Modal */}
          {isModalOpen && (
            <div className="modal" style={{
              position: 'fixed', /* Stay in place */
              zIndex: 1, /* Sit on top */
              left: 0,
              top: 0,
              width: '100%', /* Full width */
              height: '100%', /* Full height */
              overflow: 'auto', /* Enable scroll if needed */
              backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
            }}>
              <div className="modal-content" style={{
                backgroundColor: '#fefefe',
                margin: '15% auto', /* 15% from the top and centered */
                padding: '20px',
                border: '1px solid #888',
                width: '80%', /* Could be more or less, depending on screen size */
              }}>
                <h2>Item Details</h2>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>Availability: {availability}</p>
                <p>Component: {component}</p>
                <p>Import Date: {moment(importDate).format('DD/MM/YYYY')}</p>
                <p>Description: {description}</p>
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemCardComponent;