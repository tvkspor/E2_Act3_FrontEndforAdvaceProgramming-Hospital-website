import React, { useState } from "react";
import booking from "../../assets/images/booking.jpg";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserService";
import * as BookingService from "../../services/BookingService";

function BookingPage() {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [birth, setBirth] = useState("");
  const [cccd, setCccd] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [session, setSession] = useState("");
  const [symptom, setSymptom] = useState("");

  const mutation = useMutationHooks((data) => {
    BookingService.booking(data);
  });

  const handleOnchangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnchangeSex = (e) => {
    setSex(e.target.value);
  };
  const handleOnchangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const handleOnchangeCccd = (e) => {
    setCccd(e.target.value);
  };
  const handleOnchangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleOnchangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleOnchangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnchangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleOnchangeSession = (e) => {
    setSession(e.target.value);
  }
  const handleOnchangeSymptom = (e) => {
    setSymptom(e.target.value);
  }
  const handleBooking = () => {
    mutation.mutate({ name, sex, birth, cccd, address, number, email, date, session, symptom });
  };


  return (
    <section className="book" id="book">
      <h1 className="heading">
        {" "}
        <span>ĐẶT</span> KHÁM{" "}
      </h1>
      <div className="row">
        <div className="image">
          <img src={booking} alt="" />
        </div>
        <form onSubmit={handleBooking}>
          <h3>ĐẶT KHÁM</h3>
          <input
            type="text"
            placeholder="Họ và tên"
            className="box"
            value={name}
            onChange={handleOnchangeName}
          />
          <div className="box12">
          <div id="birth-day" onChange={handleOnchangeBirth} className="box1">
            <input id="birth-day-holder" placeholder="Ngày tháng năm sinh" type="text"  value={birth}/>
            <input id="birth-day-date" type="date" value={birth}/>
          </div>
          
          <select
            className="box2"
            value={sex}
            onChange={handleOnchangeSex}
          >
            <option value="">Chọn giới tính</option>
            <option value="true">Nam</option>
            <option value="false">Nữ</option>
          </select>
          </div>
          <input
            type="number"
            placeholder="Căn cước công dân"
            className="box"
            value={cccd}
            onChange={handleOnchangeCccd}
          />
          <input
            type="text"
            placeholder="Địa chỉ"
            className="box"
            value={address}
            onChange={handleOnchangeAddress}
          />
          <input
            type="number"
            placeholder="Số điện thoại"
            className="box"
            value={number}
            onChange={handleOnchangeNumber}
          />
          <input
            type="email"
            placeholder="Email"
            className="box"
            value={email}
            onChange={handleOnchangeEmail}
          />
          <div className="box12">
          <div id="birth-day" onChange={handleOnchangeDate} className="box1">
            <input id="date-text" placeholder="Ngày khám" type="text"  value={date}/>
            <input id="date-date" type="date" value={date}/>
          </div>
          <select
            className="box2"
            value={session}
            onChange={handleOnchangeSession}
          >
            <option value="">Chọn buổi khám</option>
            <option value="true">Sáng</option>
            <option value="false">Chiều</option>
          </select>
          </div>
          <input
            type="text"
            placeholder="Triệu chứng"
            className="box"
            value={symptom}
            onChange={handleOnchangeSymptom}
          />
          <input type="submit" value="Đặt ngay" className="btn" />
        </form>
      </div>
    </section>
  );
}

export default BookingPage;
