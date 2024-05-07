import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [isHovered, setIsHovered] = useState(false);

  const handleDetailsClick = () => {
    // Open the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

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
            xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight} /></span>
          </button>
          {/* Modal */}
          {isModalOpen && (
            <div className="modal" style={{
              position: 'fixed',
              zIndex: 1,
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              overflow: 'auto',
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}>
              <div className="modal-content" style={{
                margin: '2% auto',
                backgroundColor: '#fefefe',
                padding: '20px',
                border: '1px solid #888',
                width: '80%',
                position: 'relative',
              }}>               <button
                onClick={closeModal}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '10px',
                  background: isHovered ? 'red' : 'none',
                  border: `1px solid ${isHovered ? 'red' : 'black'}`,
                  borderRadius: '5px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: 'black',
                  padding: '2px 5px',
                }}
              >
                  X
                </button>
                <h2>Chi tiết sản phẩm</h2>
                <img src={image}></img>
                <p>Tên thiết bị: {name}</p>
                <p>Giá: {price}</p>
                <p>Tình trạng: {availability}</p>
                <p>Thành phần: {component}</p>
                <p>Ngày nhập: {moment(importDate).format('DD/MM/YYYY')}</p>
                <p>Mô tả: {description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemCardComponent;