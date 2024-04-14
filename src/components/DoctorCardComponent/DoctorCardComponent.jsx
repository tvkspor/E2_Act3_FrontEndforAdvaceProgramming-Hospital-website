import React from "react";
import {
    WrapperDoctorsBoxContainer, WrapperDoctorsBoxContainerBox, WrapperDoctorsBoxContainerBoxImg,
    WrapperDoctorsBoxContainerBoxH3, WrapperDoctorsBoxContainerBoxSpan, WrapperDoctorsBoxContainerBoxShare,
    WrapperDoctorsBoxContainerBoxShareA
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import doc_1 from "../../assets/images/doc_1.jpg";
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    LinkedinOutlined,
} from "@ant-design/icons";
import {
    faChevronRight,

} from "@fortawesome/free-solid-svg-icons";

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
        // <section className="doctors" id="doctors">
        // <WrapperDoctorsBoxContainer>

            // <WrapperDoctorsBoxContainerBox>
            <>
                <WrapperDoctorsBoxContainerBoxImg src={avatar} alt=""></WrapperDoctorsBoxContainerBoxImg>
                <WrapperDoctorsBoxContainerBoxH3>{name}</WrapperDoctorsBoxContainerBoxH3>
                <WrapperDoctorsBoxContainerBoxSpan>{address}</WrapperDoctorsBoxContainerBoxSpan>
                <WrapperDoctorsBoxContainerBoxShare>
                    <WrapperDoctorsBoxContainerBoxShareA href="/#"><FacebookOutlined /></WrapperDoctorsBoxContainerBoxShareA>
                    <WrapperDoctorsBoxContainerBoxShareA href="/#"><TwitterOutlined /></WrapperDoctorsBoxContainerBoxShareA>
                    <WrapperDoctorsBoxContainerBoxShareA href="/#"><InstagramOutlined /></WrapperDoctorsBoxContainerBoxShareA>
                    <WrapperDoctorsBoxContainerBoxShareA href="/#"><LinkedinOutlined /></WrapperDoctorsBoxContainerBoxShareA>
                    {/* <div>
                        <a href="/#" className="btn">
                            learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </a>

                        <a href="/#" className="btn">
                            learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </a>
                    </div> */}
                </WrapperDoctorsBoxContainerBoxShare>

                </>
            // </WrapperDoctorsBoxContainerBox>
        // </WrapperDoctorsBoxContainer>
        // </section>
    )
}
export default DoctorCardComponent;
