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
    setDatbr/>
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
