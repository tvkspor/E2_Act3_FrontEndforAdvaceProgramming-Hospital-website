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
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"

import {
    WrapperDoctorsBoxContainer, WrapperDoctorsBoxContainerBox, WrapperHeading, WrapperHeadingSpan, WrapperTextCenter, WrapperH1,
    WrapperAfter, WrapperFilterForm, WrapperFilterChuyenGIa, WrapperContainer, WrapperContainerRow, WrapperContainerRowDiv,
    WrapperLabel, WrapperContainerRowDiv2, WrapperContainerRowFlexMobile, WrapperContainerRowFlexMobileDiv, WrapperSelect,
    WrapperDivDoiTac, WrapperDivHeThong, WrapperHeThongImg, WrapperImgInf, WrapperInfTP, WrapperInfTPA, WrapperInfTPI,
    WrapperInfTPIDiv, WrapperInfTPIDivA, WrapperProducts, WrapperButtonMore, WrapperSection,
} from "./style";

import bg_ta1 from "../../assets/images/bg_ta1.jpg"
import bg_ta2 from "../../assets/images/bg_ta2.jpg"



function Footer() {
    return (
    <section className="footer">
            <div className="box-container">
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
                <i className="fas fa-phone"><FontAwesomeIcon icon={faPhone}/></i> +115{" "}
                </a>
                <a href="#">
                {" "}
                <i className="fas fa-envelope"><FontAwesomeIcon icon={faEnvelope}/></i> tuyen060204@gmail.com{" "}
                </a>
                <a href="#">
                {" "}
                <i className="fas fa-map-marker-alt"><FontAwesomeIcon icon={faMapMarkerAlt}/></i> TP HCM, Viet Nam{" "}
                </a>
                <a href="#">
                {" "}
                <i className="fas fa-map-marker-alt"><FontAwesomeIcon icon={faMapMarkerAlt}/></i> 766 Võ Văn Kiệt, Phường 1, Quận 5, TP. HCM{" "}
                </a>
            </div>
            <div className="box">
                <h3>follow us</h3>
                <a href="https://www.facebook.com/profile.php?id=61558353060924">
                {" "}
                <i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF}/></i> Fanpage{" "}
                </a>
                {/* <a href="#">
                {" "}
                <i className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></i> twitter{" "}
                </a> */}
                <a href="#">
                {" "}
                <i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram}/></i> instagram{" "}
                </a>
                <a href="#">
                {" "}
                <i className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}/></i> linkedin{" "}
                </a>
                {/* <a href="#">
                {" "}
                <i className="fab fa-pinterest"><FontAwesomeIcon icon={faPinterest}/></i> pinterest{" "}
                </a> */}
            </div>
            </div>
            {/* <div className="credit">
            {" "}
            created by <span> designer </span> | all rights reserve{" "}
            </div> */}
        </section>
    );

    
}

export default Footer;