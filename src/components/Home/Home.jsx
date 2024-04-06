import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faNotesMedical,
  faAmbulance,
  faUserMd,
  faPills,
  faProcedures,
  faHeartbeat,
  faUserNurse,
  faStethoscope,
  faHospital,
  faUserFriends,
  faStar,
  faStarHalfAlt,
  faCalendar,
  faUser,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faUserCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"
import logo from "../../assets/images/logo.jpg";
import doctor from "../../assets/images/doc_1.jpg"
import blog1 from "../../assets/images/blog_1.jpg"
import blog2 from "../../assets/images/blog_2.jpg"
import blog3 from "../../assets/images/blog_3.jpg"
import homeimg from "../../assets/images/homeimg.webp"
import hospital from "../../assets/images/hospital.jpg"
import home from "../../assets/images/home.jpg"

import thanhtuu1 from "../../assets/images/thanhtuu1.jpg"
import thanhtuu2 from "../../assets/images/thanhtuu2.png"
import thanhtuu3 from "../../assets/images/thanhtuu3.jpg"
import thanhtuu4 from "../../assets/images/thanhtuu4.jpg"
import thanhtuu5 from "../../assets/images/thanhtuu5.jpg"
import thanhtuu6 from "../../assets/images/thanhtuu6.jpeg"
import booking from "../../assets/images/booking.jpg"
import intro from "../../assets/images/intro.jpg"
import introhome from "../../assets/images/introhome.jpg"
import ronaldo from "../../assets/images/ronaldo.jpg"
import messi from "../../assets/images/messi.webp"
import mbappe from "../../assets/images/mbappe.webp"


function Home() {
  return (
    <>
        


      <section className="home" id="home">
        <div className="image">
          <img src={introhome} alt="" />
        </div>
        <div className="content">
          <h3>stay safe, stay healthy</h3>
          {/* <p>Everything is Daijoubu</p> */}
          <a href="#" className="btn">
            {" "}
            liên hệ <span className="fas fa-chevron-right" > <FontAwesomeIcon icon={faChevronRight}/> </span> 
          </a>
        </div>
      </section>
      {/* home section*/}
      <section className="icons-container">
        <div className="icons">
          <i className="fas fa-user-md"><FontAwesomeIcon icon={faUserMd}/></i>
          <h3>140+</h3>
          <p>bác sĩ</p>
        </div>
        <div className="icons">
          <i className="fas fa-users"><FontAwesomeIcon icon={faUserFriends}/></i>
          <h3>1040+</h3>
          <p>bệnh nhân hài lòng</p>
        </div>
        <div className="icons">
          <i className="fas fa-procedures"><FontAwesomeIcon icon={faProcedures}/></i>
          <h3>500+</h3>
          <p>giường bệnh</p>
        </div>
        <div className="icons">
          <i className="fas fa-hospital"><FontAwesomeIcon icon={faHospital}/></i>
          <h3>80+</h3>
          <p>cơ sở</p>
        </div>
      </section>
      {/* services section starts*/}
      <section className="services" id="services">
        <h1 className="heading">
          DỊCH <span>VỤ</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-notes-medical"><FontAwesomeIcon icon={faNotesMedical}/></i>
            <h3>TƯ VẤN MIỄN PHÍ</h3>
            {/* <p>Everything is Daijoubu</p> */}
            <a href="#" className="btn">
              {" "}
              xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
          <div className="box">
            <i className="fas fa-ambulance"><FontAwesomeIcon icon={faAmbulance}/></i>
            <h3>CẤP CỨU 24/7</h3>
            {/* <p>Everything is Daijoubu</p> */}
            <a href="#" className="btn">
              {" "}
              xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
          <div className="box">
            <i className="fas fa-user-md"><FontAwesomeIcon icon={faUserMd}/></i>
            <h3>BÁC SĨ CHUYÊN KHOA</h3>
            {/* <p>Everything is Daijoubu</p> */}
            <a href="#" className="btn">
              {" "}
              xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>{" "}
            </a>
          </div>
          <div className="box">
            <i className="fas fa-pills"><FontAwesomeIcon icon={faPills}/></i>
            <h3>THUỐC MỚI NHẤT</h3>
            {/* <p>Everything is Daijoubu</p> */}
            <a href="#" className="btn">
              {" "}
              xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>{" "}
            </a>
          </div>
          <div className="box">
            <i className="fas fa-procedures"><FontAwesomeIcon icon={faProcedures}/></i>
            <h3>CƠ SỞ VẬT CHẤT TỐT</h3>
            {/* <p>Everything is Daijoubu</p> */}
            <a href="#" className="btn">
              {" "}
              xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>{" "}
            </a>
          </div>
          <div className="box">
            <i className="fas fa-heartbeat"><FontAwesomeIcon icon={faHeartbeat}/></i>
            <h3>TẬN TÂM CHĂM SÓC</h3>
            {/* <p>Everything is Daijoubu</p> */}
            <a href="#" className="btn">
              {" "}
              xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
          {/* <div className="box">
            <i className="fas fa-user-nurse"><FontAwesomeIcon icon={faUserNurse}/></i>
            <h3>attentive nurse</h3>
            <p>Everything is Daijoubu</p>
            <a href="#" className="btn">
              {" "}
              xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
          <div className="box">
            <i className="fas fa-stethoscope"><FontAwesomeIcon icon={faStethoscope}/></i>
            <h3>TÂN TIẾN</h3>
            <p>Everything is Daijoubu</p>
            <a href="#" className="btn">
              {" "}
              xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div> */}
        </div>
      </section>
      {/* services section starts*/}
      {/* about section starts*/}
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>GIỚI</span> THIỆU{" "}
        </h1>
        <div className="row">
          <div className="image">
            <img src={intro} alt="" />
          </div>
          <div className="content">
            <h3>chúng tôi chăm sóc sức khoẻ của bạn</h3>
            <p>
            Dựa trên nền tảng truyền thống, các giá trị lớn của ngành y Việt Nam từ xưa đến nay, 
            đồng thời mong muốn mang lại cho người dân dịch vụ khám chữa bệnh chất lượng cao về y khoa, 
            tiếp cận phương pháp, kỹ thuật và phác đồ hiện đại, được hưởng các dịch vụ cao cấp như ở nước ngoài, 
            bệnh viện Đa Khoa Tâm Anh đã được thành lập. Ngay từ khi mới bắt đầu đi vào hoạt động, 
            bệnh viện Tâm Anh đã chú trọng việc xây dựng đội ngũ chuyên gia bác sĩ giỏi về chuyên môn, nhiều kinh nghiệm, 
            bệnh viện đã quy tụ được đội ngũ chuyên gia hàng đầu từ nhiều lĩnh vực.
            </p>
            
            <a href="#" className="btn">
              {" "}
              xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>{" "}
            </a>
          </div>
        </div>
      </section>
      {/* about section end*/}
      {/* doctor section starts*/}
      {/* <section className="doctors" id="doctors">
        <h1 className="heading">
          {" "}
          our <span>doctors</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={doctor} alt="" />
            <h3>join deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF}/></a>
              <a href="#" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="#" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="#" className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
          </div>
          <div className="box">
            <img src={doctor} alt="" />
            <h3>join deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF}/></a>
              <a href="#" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="#" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="#" className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
          </div>
          <div className="box">
            <img src={doctor} alt="" />
            <h3>join deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF}/></a>
              <a href="#" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="#" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="#" className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
          </div>
          <div className="box">
            <img src={doctor} alt="" />
            <h3>join deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF}/></a>
              <a href="#" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="#" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="#" className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
          </div>
          <div className="box">
            <img src={doctor} alt="" />
            <h3>join deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF}/></a>
              <a href="#" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="#" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="#" className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
          </div>
          <div className="box">
            <img src={doctor} alt="" />
            <h3>join deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF}/></a>
              <a href="#" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="#" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="#" className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
          </div>
          <div className="box">
            <img src={doctor} alt="" />
            <h3>join deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF}/></a>
              <a href="#" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="#" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="#" className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
          </div>
          <div className="box">
            <img src={doctor} alt="" />
            <h3>join deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF}/></a>
              <a href="#" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></a>
              <a href="#" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="#" className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
          </div>
        </div>
      </section> */}
      {/* doctor section ends*/}
      {/* booking section starts */}
      {/* <section className="book" id="book">
        <h1 className="heading">
          {" "}
          <span>ĐẶT</span> LỊCH{" "}
        </h1>
        <div className="row">
          <div className="image">
            <img src={booking} atl="" />
          </div>
          <form action="">
            <h3>ĐẶT LỊCH KHÁM</h3>
            <input type="text" placeholder="your name" className="box" />
            <input type="number" placeholder="your number" className="box" />
            <input type="email" placeholder="your email" className="box" />
            <input type="date" className="box" />
            <input type="submit" value="đặt ngay" className="btn" />
          </form>
        </div>
      </section> */}
      {/* booking section ends */}
      {/* review section starts */}
      <section className="review" id="review">
        <h1 className="heading">
          {" "}
          ĐÁNH<span> GIÁ</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={ronaldo} alt="" />
            <h3>Ronaldo</h3>
            <div className="stars">
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star-half-alt"><FontAwesomeIcon icon={faStarHalfAlt}/></i>
            </div>
            <p className="text">
              {" "}
              Tôi đã có trải nghiệm tuyệt vời tại Bệnh Viện. Đội ngũ y tế chuyên nghiệp và thân thiện, 
              dịch vụ chăm sóc bệnh nhân tận tình. Điều này khiến tôi cảm thấy an tâm và tin tưởng hoàn toàn trong quá trình điều trị.
            </p>
          </div>
          <div className="box">
            <img src={messi} alt="" />
            <h3>Messi</h3>
            <div className="stars">
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star-half-alt"><FontAwesomeIcon icon={faStarHalfAlt}/></i>
            </div>
            <p className="text">
              {" "}
              Bệnh Viện là một nơi tuyệt vời để nhận điều trị. Phòng khám sạch sẽ và tiện nghi, 
              đội ngũ y tế thân thiện và nhiệt tình. Tôi rất ấn tượng với cách họ xử lý và chăm sóc bệnh nhân. 
              Sẽ quay lại nếu cần.
            </p>
          </div>
          <div className="box">
            <img src={mbappe} alt="" />
            <h3>Mbappe</h3>
            <div className="stars">
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star-half-alt"><FontAwesomeIcon icon={faStarHalfAlt}/></i>
            </div>
            <p className="text">
              {" "}
              Tôi rất hài lòng với dịch vụ tại Bệnh Viện. Thời gian chờ đợi ngắn, bác sĩ và y tá rất chuyên nghiệp và tận tình. 
              Bên cạnh đó, hệ thống quản lý lịch hẹn của họ cũng rất hiệu quả. Sẽ giới thiệu cho bạn bè và gia đình của tôi.
            </p>
          </div>
        </div>
      </section>
      {/* review section ends */}
      {/* blogs section starts */}
      <section className="blogs" id="blogs">
        <h1 className="heading">
          {" "}
          TIN <span>TỨC</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={thanhtuu1} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  <i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar}/></i> 22th may, 2022{" "}
                </a>
                <a href="#">
                  <i className="fas fa-user"><FontAwesomeIcon icon={faUser}/></i> by admin{" "}
                </a>
              </div>
              <h3>2022 - TĂNG CƯỜNG HỒI PHỤC CHO NGƯỜI BỆNH SAU PHẪU THUẬT</h3>
              <p>CHƯƠNG TRÌNH TĂNG CƯỜNG HỒI PHỤC CHO NGƯỜI BỆNH SAU PHẪU THUẬT</p>
              <a href="#" className="btn">
                {" "}
                xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={thanhtuu5} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  <i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar}/></i> 1st april, 2021
                </a>
                <a href="#">
                  <i className="fas fa-user"><FontAwesomeIcon icon={faUser}/></i> by admin
                </a>
              </div>
              <h3>2021 - THỰC HIỆN GHÉP GAN TRẺ EM</h3>
              <p>Thành công của ca ghép gan trẻ em góp phần mở ra nhiều hi vọng cho bệnh nhi bị bệnh lý về gan nặng, có chỉ định ghép gan.</p>
              <a href="#" className="btn">
                {" "}
                xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={thanhtuu6} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  <i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar}/></i> 15th december, 2021
                </a>
                <a href="#">
                  <i className="fas fa-user"><FontAwesomeIcon icon={faUser}/></i> by admin
                </a>
              </div>
              <h3>2021 – CHẨN ĐOÁN, CAN THIỆP VÀ PHẪU THUẬT TIM MẠCH</h3>
              <p>Trung tâm Tim Mạch hoạt động điều trị - nghiên cứu – đào tạo bao quát, đồng bộ với Nội tim mạch, Phẫu thuật tim mạch, Can thiệp tim mạch và Nhịp tim học.</p>
              <a href="#" className="btn">
                {" "}
                xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={thanhtuu4} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  <i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar}/></i> 1st november, 2021
                </a>
                <a href="#">
                  <i className="fas fa-user"><FontAwesomeIcon icon={faUser}/></i> by admin
                </a>
              </div>
              <h3>2021 - BỆNH VIỆN ĐẠT GIẢI THÀNH TỰU Y KHOA VIỆT NAM</h3>
              <p>Giải thành tựu y khoa Việt Nam 2021 với mô hình “Chăm sóc F0 dựa vào cộng đồng” và “Phối hợp liên viện và ECMO cứu sống mẹ con sản phụ mắc COVID-19 nguy kịch”.</p>
              <a href="#" className="btn">
                {" "}
                xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={thanhtuu3} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  <i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar}/></i> 28th march , 2021
                </a>
                <a href="#">
                  <i className="fas fa-user"><FontAwesomeIcon icon={faUser}/></i> by admin
                </a>
              </div>
              <h3>2021 – KỸ THUẬT ECMO GIÚP CỨU SẢN PHỤ MẮC COVID-19
</h3>
              <p>ECMO là một trong những kỹ thuật chuyên sâu về hồi sức cấp cứu, như một bộ máy thay thế cho phổi và một phần cho tim khi phổi không hoạt động được.</p>
              <a href="#" className="btn">
                {" "}
                xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={thanhtuu2} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  <i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar}/></i> 17th july, 2022
                </a>
                <a href="#">
                  <i className="fas fa-user"><FontAwesomeIcon icon={faUser}/></i> by admin
                </a>
              </div>
              <h3>2022 – THÀNH TỰU QUẨN TRỊ - CHUYỂN ĐỔI SỐ</h3>
              <p>BV tiên phong triển khai ứng dụng Công nghệ thông tin (CNTT) từ khám, chữa bệnh tới quản trị hệ thống.</p>
              <a href="#" className="btn">
                {" "}
                xem thêm <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* blogs section ends */}
      {/* footer section stars */}
      
    </>
  );
}

export default Home;
