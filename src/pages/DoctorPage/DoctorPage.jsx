import React from "react";
import { useQuery } from "@tanstack/react-query";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import * as DoctorService from "../../services/DoctorService";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect } from "react";
import { Col } from "antd";
import DoctorComponent from "../../components/DoctorComponent/DoctorComponent";
import {
    WrapperDoctorsBoxContainer, WrapperDoctorsBoxContainerBox, WrapperHeading, WrapperHeadingSpan, WrapperTextCenter, WrapperH1,
    WrapperAfter, WrapperFilterForm, WrapperFilterChuyenGIa, WrapperContainer, WrapperContainerRow, WrapperContainerRowDiv,
    WrapperLabel, WrapperContainerRowDiv2, WrapperContainerRowFlexMobile, WrapperContainerRowFlexMobileDiv, WrapperSelect,
    WrapperDivDoiTac, WrapperDivHeThong, WrapperHeThongImg, WrapperImgInf, WrapperInfTP, WrapperInfTPA, WrapperInfTPI,
    WrapperInfTPIDiv, WrapperInfTPIDivA, WrapperProducts, WrapperButtonMore, WrapperSection,
    WrapperSearch,sortContainerStyle
} from "./style";
import doctor_background from "../../assets/images/doctor_background.jpg";
import ButtonInputSearch from "../../components/ButtonInputSearch/ButttonInputSearch"
import {
    faChevronRight,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg_ta1 from "../../assets/images/bg_ta1.jpg"
import bg_ta2 from "../../assets/images/bg_ta2.jpg"
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import DoctorCardComponent from "../../components/DoctorCardComponent/DoctorCardComponent";

const DoctorPage = () => {

    const searchDoctor = useSelector((state) => state?.doctor?.search);
    const searchDebounce = useDebounce(searchDoctor, 500);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(4);
    const [typeDoctors, setTypeDoctors] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState("");
    
    const fetchDoctorAll = async (context) => {
        const limit = context?.queryKey && context?.queryKey[1];
        const search = context?.queryKey && context?.queryKey[2];
        const res = await DoctorService.getAllDoctor(search, limit);

        return res;
    };

    const fetchAllTypeDoctor = async () => {
        const res = await DoctorService.getAllDoctor();
        if (res?.status === "OK") {
            setTypeDoctors(res?.data);
        }
    };

    const {
        isLoading,
        data: doctors,
        isPreviousData,
    } = useQuery(["doctors", limit, searchDebounce], fetchDoctorAll, {
        retry: 3,
        retryDelay: 1000,
        keepPreviousData: true,
    });

    useEffect(() => {
        fetchAllTypeDoctor();
    }, []);

    const loadMore = () => {
        setLimit(prevLimit => prevLimit + 4); // Increase limit by 3 each time
    };


    return (
        <WrapperSection className="doctors" id="doctors">

            <WrapperHeading> CHUYÊN <WrapperHeadingSpan>GIA</WrapperHeadingSpan> </WrapperHeading>

            < div>
                <img src={doctor_background} alt="" style={{ height: "auto", display: "block", width: "100%", align: "center" }}></img>
            </div>
            
            <WrapperFilterForm className="filter-Form">
                <WrapperHeading>
                    <WrapperTextCenter>
                        <WrapperH1>
                            Chuyên gia - bác sĩ
                        </WrapperH1>
                    </WrapperTextCenter>
                </WrapperHeading>
                <WrapperSearch>
                 <DoctorComponent />   
                </WrapperSearch>
                <WrapperFilterChuyenGIa className="filter_chuyengia">
                    <WrapperContainer className="container">
                        <WrapperContainerRowDiv2>
                            <WrapperContainerRowFlexMobile className="row div_flex_mobile" style={{justifyContent:"center"}}>
                                 <div className="sort-container" style={sortContainerStyle}>
                                    <WrapperSelect id="filter_chuyenkhoa" name="filter_chuyenkhoa" onChange={(e) => setSelectedDepartment(e.target.value)} style={{marginRight:"30px"}}>
                                        <option value="">CHUYÊN KHOA</option>
                                        {typeDoctors.map((typeDoctor) => (
                                            <option key={typeDoctor.id} value={typeDoctor.department}>
                                                {typeDoctor.department}
                                            </option>
                                        ))}
                                    </WrapperSelect>
                                </div>
                            </WrapperContainerRowFlexMobile>
                        </WrapperContainerRowDiv2>
                    </WrapperContainer>
                </WrapperFilterChuyenGIa>

            </WrapperFilterForm>
            <div >
                <WrapperProducts>
                    <WrapperDoctorsBoxContainer>
                        {doctors?.data?.filter(doctor => doctor.department === selectedDepartment || !selectedDepartment).map((doctor) => {
                            return (
                                <WrapperDoctorsBoxContainerBox>
                                    <DoctorCardComponent
                                        avatar={doctor.avatar}
                                        name={doctor.name}
                                        address={doctor.address}
                                        department={doctor.department}
                                        sex={doctor.sex}
                                        dateofbirth={doctor.dateofbirth}
                                        phone={doctor.phone}
                                    />
                                </WrapperDoctorsBoxContainerBox>
                            );
                        })}

                    </WrapperDoctorsBoxContainer>
                </WrapperProducts>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button onClick={loadMore} style={{
                        border: '2px solid green',
                        borderRadius: '5px',
                        padding: '10px 20px',
                        color: 'green',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = 'green';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'green';
                        }}
                    >
                        Load More
                    </button>
                </div>
            </div>
        </WrapperSection >
    )
}
export default DoctorPage
