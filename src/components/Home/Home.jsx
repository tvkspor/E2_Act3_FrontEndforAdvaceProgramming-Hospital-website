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

function Home() {
  return (
    <>
        


      <section className="home" id="home">
        <div className="image">
          <img src={home} alt="" />
        </div>
        <div className="content">
          <h3>stay safe, stay healthy</h3>
          <p>Everything is Daijoubu</p>
          <a href="#" className="btn">
            {" "}
            contact us <span className="fas fa-chevron-right" > <FontAwesomeIcon icon={faChevronRight}/> </span> 
          </a>
        </div>
      </section>
      {/* home section*/}
      <section className="icons-container">
        <div className="icons">
          <i className="fas fa-user-md"><FontAwesomeIcon icon={faUserMd}/></i>
          <h3>140+</h3>
          <p>doctors at work</p>
        </div>
        <div className="icons">
          <i className="fas fa-users"><FontAwesomeIcon icon={faUserFriends}/></i>
          <h3>1040+</h3>
          <p>satisfied patients</p>
        </div>
        <div className="icons">
          <i className="fas fa-procedures"><FontAwesomeIcon icon={faProcedures}/></i>
          <h3>500+</h3>
          <p>bed facility</p>
        </div>
        <div className="icons">
          <i className="fas fa-hospital"><FontAwesomeIcon icon={faHospital}/></i>
          <h3>80+</h3>
          <p>available hospitals</p>
        </div>
      </section>
      {/* services section starts*/}
      <section className="services" id="services">
        <h1 className="heading">
          our <span>services</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-notes-medical"><FontAwesomeIcon icon={faNotesMedical}/></i>
            <h3>free checkups</h3>
            <p>Everything is Daijoubu</p>
            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
          <div className="box">
            <i className="fas fa-ambulance"><FontAwesomeIcon icon={faAmbulance}/></i>
            <h3>24/7 ambulance</h3>
            <p>Everything is Daijoubu</p>
            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
          <div className="box">
            <i className="fas fa-user-md"><FontAwesomeIcon icon={faUserMd}/></i>
            <h3>expert doctors</h3>
            <p>Everything is Daijoubu</p>
            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>{" "}
            </a>
          </div>
          <div className="box">
            <i className="fas fa-pills"><FontAwesomeIcon icon={faPills}/></i>
            <h3>medicines</h3>
            <p>Everything is Daijoubu</p>
            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>{" "}
            </a>
          </div>
          <div className="box">
            <i className="fas fa-procedures"><FontAwesomeIcon icon={faProcedures}/></i>
            <h3>bed facility</h3>
            <p>Everything is Daijoubu</p>
            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>{" "}
            </a>
          </div>
          <div className="box">
            <i className="fas fa-heartbeat"><FontAwesomeIcon icon={faHeartbeat}/></i>
            <h3>total care</h3>
            <p>Everything is Daijoubu</p>
            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
          <div className="box">
            <i className="fas fa-user-nurse"><FontAwesomeIcon icon={faUserNurse}/></i>
            <h3>attentive nurse</h3>
            <p>Everything is Daijoubu</p>
            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
          <div className="box">
            <i className="fas fa-stethoscope"><FontAwesomeIcon icon={faStethoscope}/></i>
            <h3>Modernization</h3>
            <p>Everything is Daijoubu</p>
            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
        </div>
      </section>
      {/* services section starts*/}
      {/* about section starts*/}
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>about</span> us{" "}
        </h1>
        <div className="row">
          <div className="image">
            <img src={blog1} alt="" />
          </div>
          <div className="content">
            <h3>we take care of your healthy life</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              quibusdam reprehenderit? Nesciunt optio iusto officia tenetur sit
              consequuntur quod distinctio?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
              rem omnis aliquam provident repellat impedit tenetur suscipit
              tempora odit dolorem ratione amet pariatur. Facere provident
              dignissimos maiores ullam sed sunt?
            </p>
            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>{" "}
            </a>
          </div>
        </div>
      </section>
      {/* about section end*/}
      {/* doctor section starts*/}
      <section className="doctors" id="doctors">
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
      </section>
      {/* doctor section ends*/}
      {/* booking section starts */}
      <section className="book" id="book">
        <h1 className="heading">
          {" "}
          <span>book</span> now{" "}
        </h1>
        <div className="row">
          <div className="image">
            <img src={blog1} atl="" />
          </div>
          <form action="">
            <h3>book appointment</h3>
            <input type="text" placeholder="your name" className="box" />
            <input type="number" placeholder="your number" className="box" />
            <input type="email" placeholder="your email" className="box" />
            <input type="date" className="box" />
            <input type="submit" value="book now" className="btn" />
          </form>
        </div>
      </section>
      {/* booking section ends */}
      {/* review section starts */}
      <section className="review" id="review">
        <h1 className="heading">
          {" "}
          client's<span>review</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={doctor} alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star-half-alt"><FontAwesomeIcon icon={faStarHalfAlt}/></i>
            </div>
            <p className="text">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus laboriosam quaerat omnis rem dolores sapiente
              obcaecati dolor ducimus consequatur magnam nesciunt optio,
              deserunt alias, facilis error placeat? Facere, eligendi dolorum?
            </p>
          </div>
          <div className="box">
            <img src={doctor} alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star-half-alt"><FontAwesomeIcon icon={faStarHalfAlt}/></i>
            </div>
            <p className="text">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus laboriosam quaerat omnis rem dolores sapiente
              obcaecati dolor ducimus consequatur magnam nesciunt optio,
              deserunt alias, facilis error placeat? Facere, eligendi dolorum?
            </p>
          </div>
          <div className="box">
            <img src={doctor} alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star"><FontAwesomeIcon icon={faStar}/></i>
              <i className="fas fa-star-half-alt"><FontAwesomeIcon icon={faStarHalfAlt}/></i>
            </div>
            <p className="text">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus laboriosam quaerat omnis rem dolores sapiente
              obcaecati dolor ducimus consequatur magnam nesciunt optio,
              deserunt alias, facilis error placeat? Facere, eligendi dolorum?
            </p>
          </div>
        </div>
      </section>
      {/* review section ends */}
      {/* blogs section starts */}
      <section className="blogs" id="blogs">
        <h1 className="heading">
          {" "}
          our <span>blogs</span>{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={blog1} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  <i className="fas fa-calendar"><FontAwesomeIcon icon={faCalendar}/></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  <i className="fas fa-user"><FontAwesomeIcon icon={faUser}/></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>Lorem, ipsum dolor.</p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={blog2} alt="" />
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
              <h3>blog title goes here</h3>
              <p>Lorem, ipsum dolor.</p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={blog3} alt="" />
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
              <h3>blog title goes here</h3>
              <p>Lorem, ipsum dolor.</p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog3} alt="" />
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
              <h3>blog title goes here</h3>
              <p>Lorem, ipsum dolor.</p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog3} alt="" />
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
              <h3>blog title goes here</h3>
              <p>Lorem, ipsum dolor.</p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog3} alt="" />
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
              <h3>blog title goes here</h3>
              <p>Lorem, ipsum dolor.</p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* blogs section ends */}
      {/* footer section stars */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> home{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> services{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> about{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> doctors{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> book{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> review{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> blogs{" "}
            </a>
          </div>
          <div className="box">
            <h3>our services</h3>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> dental care{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> message therapy{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> cardioloty{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> diagnosis{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></i> ambulance service{" "}
            </a>
          </div>
          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i className="fas fa-phone"><FontAwesomeIcon icon={faPhone}/></i> +123-456-789{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-phone"><FontAwesomeIcon icon={faPhone}/></i> +789-456-123{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"><FontAwesomeIcon icon={faEnvelope}/></i> email@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"><FontAwesomeIcon icon={faEnvelope}/></i> email@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt"><FontAwesomeIcon icon={faMapMarkerAlt}/></i> TP HCM, Viet Nam{" "}
            </a>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF}/></i> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></i> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></i> linkedin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-pinterest"><FontAwesomeIcon icon={faPinterest}/></i> pinterest{" "}
            </a>
          </div>
        </div>
        <div className="credit">
          {" "}
          created by <span> designer </span> | all rights reserve{" "}
        </div>
      </section>
    </>
  );
}

export default Home;
