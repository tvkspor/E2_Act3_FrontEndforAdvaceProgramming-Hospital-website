import React from "react"
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


function Footer() {
    return (
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
    );
}

export default Footer;