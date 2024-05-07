import React from "react";
import { useNavigate } from "react-router-dom";
import moment from 'moment'

const DoctorCardComponent = (props) => {
  const {
    name,
    phone,
    address,
    avatar,
    sex,
    dateofbirth,
    department
  } = props;
  const navigate = useNavigate();
  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`);
  };
  return (
    <div className="box">
      <div className="image" style={{ marginBottom: "15px" }}>
        <img src={avatar} alt="" style={{ width: "100%", height: "20rem", objectFit: "contain" }} />
      </div>
      <div className="content" style={{ fontFamily: 'Times New Roman' }}>
        <h2><strong>{name.toUpperCase()}</strong></h2>
        {/* <p>Lorem, ipsum dolor.</p> */}
        <ul style={{ listStyleType: 'disc' }}>
          <li>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Số điện thoại</p>
              <p style={{ color: 'black', fontWeight: 'bold' }}>{phone}</p>
            </div>
          </li>
          <li>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Ngày sinh</p>
              <p style={{ color: 'black', fontWeight: 'bold' }}>
                {moment(dateofbirth).format('DD/MM/YYYY')}</p>
            </div>
          </li>
          <li>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Giới tính</p>
              <p style={{ color: 'black', fontWeight: 'bold' }}>{sex}</p>
            </div>
          </li>
          <li>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Khoa</p>
              <p style={{ backgroundColor: '#eaeffa', borderRadius: '10px', color: 'green', fontWeight: 'bold', padding: '10px' }}>{department}</p>
            </div>
          </li>
          <li>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <p style={{ padding: '0', margin: '0' }}>Địa chỉ</p>
              <p style={{
                color: 'black',
                fontWeight: 'bold',
              }}>
                {address}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default DoctorCardComponent;
