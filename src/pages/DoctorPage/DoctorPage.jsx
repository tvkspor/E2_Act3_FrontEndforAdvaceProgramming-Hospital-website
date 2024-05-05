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
            <DoctorComponent />

            <WrapperFilterForm className="filter-Form">
                <WrapperHeading>
                    <WrapperTextCenter>
                        <WrapperH1>
                            Chuyên gia - bác sĩ
                        </WrapperH1>
                    </WrapperTextCenter>
                </WrapperHeading>

                <WrapperFilterChuyenGIa className="filter_chuyengia">
                    <WrapperContainer className="container">
                        <WrapperContainerRow className="row">
                            <WrapperContainerRowDiv>
                                <WrapperLabel className="click_location">
                                    Toàn hệ thống
                                </WrapperLabel>
                                <WrapperLabel className="click_location">
                                    Hà Nội
                                </WrapperLabel>
                                <WrapperLabel className="click_location">
                                    TP HCM
                                </WrapperLabel>
                                <WrapperLabel className="click_location">
                                    Hệ thống
                                </WrapperLabel>
                            </WrapperContainerRowDiv>
                        </WrapperContainerRow>
                        <WrapperContainerRowDiv2>
                            <WrapperContainerRowFlexMobile className="row div_flex_mobile">
                                <WrapperContainerRowFlexMobileDiv class="col-sm-3 col-xs-4 mb_10 filter_item">
                                    <WrapperSelect id="filter_chuyenkhoa" name="filter_chuyenkhoa" onChange={(e) => setSelectedDepartment(e.target.value)}>
                                        <option value="">CHUYÊN KHOA</option>
                                        {typeDoctors.map((typeDoctor) => (
                                            <option key={typeDoctor.id} value={typeDoctor.department}>
                                                {typeDoctor.department}
                                            </option>
                                        ))}
                                    </WrapperSelect>


                                </WrapperContainerRowFlexMobileDiv>
                                <WrapperContainerRowFlexMobileDiv class="col-sm-3 col-xs-4 mb_10 filter_item">
                                    <WrapperSelect id="filter_chucvu" name="filter_chucvu">
                                        <option value="">CHỨC VỤ</option>
                                        <option value="231">Dược sĩ</option>
                                        <option value="243">Kỹ thuật viên trưởng</option>
                                        <option value="250">Cố vấn chuyên môn</option>
                                        <option value="262">Trưởng LAB</option>
                                        <option value="349">Giám đốc</option>
                                        <option value="409">Phó Khoa</option>
                                        <option value="419">Trưởng Đơn Vị</option>
                                        <option value="208">Phụ trách chuyên môn</option>
                                        <option value="464">Bác sĩ cao cấp</option>
                                        <option value="228">Giám đốc chuyên môn</option>
                                        <option value="501">Chuyên viên</option>
                                        <option value="42">Giám đốc trung tâm</option>
                                        <option value="206">Phó giám đốc</option>
                                        <option value="168">Trưởng khoa</option>
                                        <option value="164">Phó trưởng khoa</option>
                                        <option value="169">Bác sĩ</option>
                                    </WrapperSelect>
                                </WrapperContainerRowFlexMobileDiv>
                                <WrapperContainerRowFlexMobileDiv class="col-sm-3 col-xs-4 mb_10 filter_item">
                                    <WrapperSelect id="filter_hocham" name="filter_hocham">
                                        <option value="">HỌC HÀM</option>
                                        <option value="b">Phó Giáo Sư</option>
                                        <option value="a">Giáo Sư</option>


                                    </WrapperSelect>
                                </WrapperContainerRowFlexMobileDiv>
                                <WrapperContainerRowFlexMobileDiv class="col-sm-3 col-xs-4 mb_10 filter_item">
                                    <WrapperSelect id="filter_hocvi" name="filter_hocvi">
                                        <option value="">HỌC VỊ</option>
                                        <option value="395">BSNT. CKII</option>
                                        <option value="502">Chuyên viên</option>
                                        <option value="503">Cử nhân</option>
                                        <option value="529">BSNT.CKI</option>
                                        <option value="173">Tiến sĩ</option>
                                        <option value="180">Thạc sĩ</option>
                                        <option value="183">Bác sĩ Nội trú</option>
                                        <option value="184">Bác sĩ</option>
                                        <option value="196">Bác sĩ CKI</option>
                                        <option value="197">Bác sĩ CKII</option>
                                        <option value="200">Bác sĩ cao cấp</option>
                                        <option value="232">Dược sĩ</option>
                                    </WrapperSelect>
                                </WrapperContainerRowFlexMobileDiv>
                                <WrapperContainerRowFlexMobileDiv class="col-sm-3 col-xs-4 mb_10 filter_item">
                                    <WrapperSelect id="filter_ngonngu" name="filter_ngonngu">
                                        <option value="">NGÔN NGỮ</option>
                                        <option value="333">Tiếng Việt(Vietnamese)</option>
                                        <option value="334">English(United States)</option>
                                        <option value="334">English(United Kingdom)</option>
                                    </WrapperSelect>
                                </WrapperContainerRowFlexMobileDiv>
                                <WrapperContainerRowFlexMobileDiv class="col-sm-2 col-xs-4 mb_10 filter_item">
                                    <WrapperSelect id="filter_diadiem" name="filter_diadiem">
                                        <option value="0">ĐỊA ĐIỂM</option>
                                        <option value="35">Bệnh viện Đa khoa Tâm Anh Hà Nội</option>
                                        <option value="36">Bệnh viện Đa khoa Tâm Anh TP.HCM</option>
                                        <option value="509">Hệ thống Bệnh viện Đa khoa Tâm Anh</option>
                                    </WrapperSelect>
                                </WrapperContainerRowFlexMobileDiv>
                                <WrapperContainerRowFlexMobileDiv class="col-sm-2 col-xs-4 mb_10 filter_item">
                                    <WrapperSelect id="filter_diadiem" name="filter_diadiem">
                                        <option value="0">CƠ SỞ</option>
                                        <option value="35">Bệnh viện Đa khoa Tâm Anh Hà Nội 1</option>
                                        <option value="35">Bệnh viện Đa khoa Tâm Anh Hà Nội 2</option>
                                        <option value="36">Bệnh viện Đa khoa Tâm Anh TP.HCM 1</option>
                                        <option value="36">Bệnh viện Đa khoa Tâm Anh TP.HCM 2</option>
                                        <option value="36">Bệnh viện Đa khoa Tâm Anh TP.HCM 3</option>
                                        <option value="509">Hệ thống Bệnh viện Đa khoa Tâm Anh</option>
                                    </WrapperSelect>
                                </WrapperContainerRowFlexMobileDiv>
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