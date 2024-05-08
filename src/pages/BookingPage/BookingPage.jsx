import React, { useState } from "react";
import booking from "../../assets/images/booking.jpg";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserService";
import * as BookingService from "../../services/BookingService";
import * as message from "../../components/Message/Message";


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
    message.success("Đặt khám thành công!");
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
            required
          />
          <div className="box12">
          <div id="birth-day" onChange={handleOnchangeBirth} className="box1">
            Ngày sinh <br/>
            <input id="birth-day-date" type="date" value={birth} required/>
          </div>
          
          <select
            className="box2"
            value={sex}
            onChange={handleOnchangeSex}
            required
          >
            <option value="" disabled>Chọn giới tính</option>
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
            required
          />
          <input
            type="text"
            placeholder="Địa chỉ"
            className="box"
            value={address}
            onChange={handleOnchangeAddress}
            required
          />
          <input
            type="number"
            placeholder="Số điện thoại"
            className="box"
            value={number}
            onChange={handleOnchangeNumber}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="box"
            value={email}
            onChange={handleOnchangeEmail}
            required
          />
          <div className="box12">
          <div id="birth-day" onChange={handleOnchangeDate} className="box1">
            Ngày khám <br/>
            <input id="date-date" type="date" value={date}required/>
          </div>
          <select
            className="box2"
            value={session}
            onChange={handleOnchangeSession}
            required
          >
            <option value="" disabled>Chọn buổi khám</option>
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
            required
          />
          <input type="submit" value="Đặt ngay" className="btn" />
        </form>
      </div>
    </section>
  );
}

export default BookingPage;
