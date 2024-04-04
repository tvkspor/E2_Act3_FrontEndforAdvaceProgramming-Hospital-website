import React, { useState } from "react";
import booking from "../../assets/images/booking.jpg";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserService";

function BookingPage() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const mutation = useMutationHooks((data) => UserService.signupUser(data));

  const handleOnchangeName = (e) => {
    setName(e.target.value);
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

  const handleBooking = (e) => {
    e.preventDefault();
    mutation.mutate({ name, number, email, date });
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
            placeholder="your name"
            className="box"
            value={name}
            onChange={handleOnchangeName}
          />
          <input
            type="number"
            placeholder="your number"
            className="box"
            value={number}
            onChange={handleOnchangeNumber}
          />
          <input
            type="email"
            placeholder="your email"
            className="box"
            value={email}
            onChange={handleOnchangeEmail}
          />
          <input
            type="date"
            className="box"
            value={date}
            onChange={handleOnchangeDate}
          />
          <input type="submit" value="đặt ngay" className="btn" />
        </form>
      </div>
    </section>
  );
}

export default BookingPage;
