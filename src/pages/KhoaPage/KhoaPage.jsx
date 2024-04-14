import React from "react";
import background from '../../assets/images/background.jpg';
import pattern from '../../assets/images/pattern-5.png';
import logo from "../../assets/images/KhoaNoiTM (1).jpeg"
import KhoaNgoaiTK from "../../assets/images/KhoaNgoaiTK.jpeg"
import Noi2 from "../../assets/images/Noi(2).jpg"
import LienChuyenKhoa from '../../assets/images/LienChuyenKhoa.jpg';
import KhoaKhamBenh from '../../assets/images/KhoaKhamBenh.jpeg';
import CapCuu from '../../assets/images/CapCuu.jpeg';
import KhuVip from '../../assets/images/KhuVip.jpeg';
import NgoaiTQ from '../../assets/images/KhoaNgoaiTQ.jpeg';
import NoiTK from '../../assets/images/KhoaNoiTK.jpeg';
import KhoaNhi from '../../assets/images/KhoaNhi.jpg';
import KhoaNoiTiet from '../../assets/images/KhoaNoiTiet.jpg';
// import KhoaUngBuou from '../../assets/images/KhoaNoiTiet.jpg';
// import KhoaSan from '../../assets/images/KhoaSan.jpg';
// import KhoaSanChau from '../../assets/images/KhoaSanChau.jpg';
import KhoaTietNieu from '../../assets/images/KhoaTietNieu.jpg';
import {
    PageTitle, AutoContainer, TitleOuter, PageTitleh1, ServicesTow, CarouselOuter, BlockTwo, InnerBox, Roww,
    ImageBox, Image, LowerContent, TitleBox, Text,Img
} from './index.js';


// import KhoaNgoaiThanKinh from "./components/KhoaNgoaiThanKinh";
// import KhoaNhi from "./components/KhoaNhi";
// import KhoaTimMach from "./components/KhoaTimMach";

function KhoaPage() {
    return (
        <>
            <PageTitle className="page-title" style={{backgroundImage: `url(${background})`}}>
                <AutoContainer className="auto-container">
                    <TitleOuter className="title-outer">
                        <PageTitleh1>CHUYÊN KHOA</PageTitleh1>
                        
                    </TitleOuter>
                </AutoContainer>
            </PageTitle>
            <section className="blogs" id="blogs">
            <ServicesTow className="services-section-two" style={{backgroundImage :`url(${pattern})`}}>
                    <AutoContainer className="auto-container">
                        <CarouselOuter className="carousel-outer">
                        <div className="box-container">
                            <div className="box">
                                <div className="image">
                                    <a href="/chuyen-khoa/khoa-tim-mach-1"><img src={logo} alt="Khoa Tim M&#x1EA1;ch" style={{width: "100%", height: "100%", objectFit: "contain"}}/></a>
                                </div>
                                <div className="content">
                                    <span className="icon flaticon-heart-2"></span>
                                    <h4><a href="/chuyen-khoa/khoa-tim-mach-1">Khoa tim mạch - Cardiology </a></h4>
                                        
                                    <Text className="text"></Text>
                                    <span className="icon-right flaticon-heart-2"></span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image">
                                    <a href="/chuyen-khoa/khoa-ngoai-than-kinh-2"><img src={KhoaNgoaiTK} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/></a>
                                </div>
                                <div className="content">
                                    <span className="icon flaticon-heart-2"></span>
                                    <h4><a href="/chuyen-khoa/khoa-tim-mach-1">Khoa thần kinh - Nerve surgery</a></h4>
                                        
                                    <Text className="text">L&#xE0; m&#x1ED9;t trong nh&#x1EEF;ng chuy&#xEA;n khoa s&#xE2;u ph&#xE1;t tri&#x1EC3;n m&#x1EA1;nh c&#x1EE7;a b&#x1EC7;nh vi&#x1EC7;n Tri&#x1EC1;u An</Text>
                                    <span className="icon-right flaticon-brain"></span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image">
                                    <a href="/chuyen-khoa/khoa-noi-tong-hop-3"><img src={Noi2} alt="Khoa N&#x1ED9;i T&#x1ED5;ng H&#x1EE3;p" style={{width: "100%", height: "100%", objectFit: "contain"}}/></a>
                                </div>
                                <div className="content">
                                    <span className="icon flaticon-kidney"></span>
                                    <h4><a href="/chuyen-khoa/khoa-noi-tong-hop-3">Khoa hồi sức - Intensive care</a></h4>

                                    <Text className="text"></Text>
                                    <span className="icon-right flaticon-kidney"></span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image">
                                    <a href="/chuyen-khoa/khoa-lien-chuyen-khoa-4"><img src={LienChuyenKhoa} alt="Khoa Li&#xEA;n Chuy&#xEA;n Khoa" style={{width: "100%", height: "100%", objectFit: "contain"}}/></a>
                                </div>
                                <div className="content">
                                    <span className="icon flaticon-eye"></span>
                                    <h4><a href="/chuyen-khoa/khoa-lien-chuyen-khoa-4">Khoa xương khớp - Musculoskeletal</a></h4>

                                    <Text className="text">Khoa Li&#xEA;n Chuy&#xEA;n Khoa t&#x1EA1;i b&#x1EC7;nh vi&#x1EC7;n</Text>
                                    <span className="icon-right flaticon-eye"></span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image">
                                    <a href="/chuyen-khoa/khoa-kham-benh-5"><img src={KhoaKhamBenh} alt="Khoa Kh&#xE1;m B&#x1EC7;nh" style={{width: "100%", height: "100%", objectFit: "contain"}}/></a>
                                </div>
                                <div className="content">
                                    <span className="icon"></span>
                                    <h4><a href="/chuyen-khoa/khoa-kham-benh-5">Khoa tai mũi họng - Otorhinolaryngology</a></h4>

                                    <Text className="text">Khoa Kh&#xE1;m b&#x1EC7;nh B&#x1EC7;nh vi&#x1EC7;n Tri&#x1EC1;u An</Text>
                                    <span className="icon-right"></span>
                                </div>
                            </div>
                            <div className="box">
                                <div className="image">
                                    <a href="/chuyen-khoa/khoa-hoi-suc-cap-cuu-6"><img src={CapCuu} alt="Khoa H&#x1ED3;i S&#x1EE9;c C&#x1EA5;p C&#x1EE9;u" style={{width: "100%", height: "100%", objectFit: "contain"}}/></a>
                                </div>
                                <div className="content">
                                    <span className="icon"></span>
                                    <h4><a href="/chuyen-khoa/khoa-hoi-suc-cap-cuu-6">Khoa nhi - Pediatrics</a></h4>

                                    <Text className="text">Nhanh ch&#xF3;ng &#x2013; K&#x1ECB;p th&#x1EDD;i &#x2013; Hi&#x1EC7;u qu&#x1EA3;</Text>
                                    <span className="icon-right"></span>
                                </div>
                            </div>
                        </div>
                        </CarouselOuter>
                    </AutoContainer>
                </ServicesTow>
                
            </section>
            {/* <body>
                <ServicesTow className="services-section-two" style={{backgroundImage :`url(${pattern})`}}>
                    <AutoContainer className="auto-container">

                        <CarouselOuter className="carousel-outer">
                            <Roww className="row">
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image className="image">
                                                <a href="/chuyen-khoa/khoa-tim-mach-1" ><Img src={logo} alt="Khoa Tim M&#x1EA1;ch" /></a>
                                            </Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon flaticon-heart-2"></span>
                                                <h4><a href="/chuyen-khoa/khoa-tim-mach-1">Khoa Tim M&#x1EA1;ch</a></h4>
                                            </TitleBox>
                                            <Text className="text"></Text>
                                            <span className="icon-right flaticon-heart-2"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image className="image"><a href="/chuyen-khoa/khoa-ngoai-than-kinh-2"><img src={KhoaNgoaiTK} alt="Khoa Ngo&#x1EA1;i Th&#x1EA7;n Kinh" width="370" /></a></Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon flaticon-brain"></span>
                                                <h4><a href="/chuyen-khoa/khoa-ngoai-than-kinh-2">Khoa Ngo&#x1EA1;i Th&#x1EA7;n Kinh</a></h4>
                                            </TitleBox>
                                            <Text className="text">L&#xE0; m&#x1ED9;t trong nh&#x1EEF;ng chuy&#xEA;n khoa s&#xE2;u ph&#xE1;t tri&#x1EC3;n m&#x1EA1;nh c&#x1EE7;a b&#x1EC7;nh vi&#x1EC7;n Tri&#x1EC1;u An</Text>
                                            <span className="icon-right flaticon-brain"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image classNameName="image"><a href="/chuyen-khoa/khoa-noi-tong-hop-3"><img src={Noi2} alt="Khoa N&#x1ED9;i T&#x1ED5;ng H&#x1EE3;p" width="370" /></a></Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon flaticon-kidney"></span>
                                                <h4><a href="/chuyen-khoa/khoa-noi-tong-hop-3">Khoa N&#x1ED9;i T&#x1ED5;ng H&#x1EE3;p</a></h4>
                                            </TitleBox>
                                            <Text className="text"></Text>
                                            <span className="icon-right flaticon-kidney"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image className="image"><a href="/chuyen-khoa/khoa-lien-chuyen-khoa-4"><img src={LienChuyenKhoa} alt="Khoa Li&#xEA;n Chuy&#xEA;n Khoa" width="370" /></a></Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon flaticon-eye"></span>
                                                <h4><a href="/chuyen-khoa/khoa-lien-chuyen-khoa-4">Khoa Li&#xEA;n Chuy&#xEA;n Khoa</a></h4>
                                            </TitleBox>
                                            <Text className="text">Khoa Li&#xEA;n Chuy&#xEA;n Khoa t&#x1EA1;i b&#x1EC7;nh vi&#x1EC7;n</Text>
                                            <span className="icon-right flaticon-eye"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image className="image"><a href="/chuyen-khoa/khoa-kham-benh-5"><img src={KhoaKhamBenh} alt="Khoa Kh&#xE1;m B&#x1EC7;nh" width="370" /></a></Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon"></span>
                                                <h4><a href="/chuyen-khoa/khoa-kham-benh-5">Khoa Kh&#xE1;m B&#x1EC7;nh</a></h4>
                                            </TitleBox>
                                            <Text className="text">Khoa Kh&#xE1;m b&#x1EC7;nh B&#x1EC7;nh vi&#x1EC7;n Tri&#x1EC1;u An</Text>
                                            <span className="icon-right"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image className="image"><a href="/chuyen-khoa/khoa-hoi-suc-cap-cuu-6"><img src={CapCuu} alt="Khoa H&#x1ED3;i S&#x1EE9;c C&#x1EA5;p C&#x1EE9;u" width="370" /></a></Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon"></span>
                                                <h4><a href="/chuyen-khoa/khoa-hoi-suc-cap-cuu-6">Khoa H&#x1ED3;i S&#x1EE9;c C&#x1EA5;p C&#x1EE9;u</a></h4>
                                            </TitleBox>
                                            <Text className="text">Nhanh ch&#xF3;ng &#x2013; K&#x1ECB;p th&#x1EDD;i &#x2013; Hi&#x1EC7;u qu&#x1EA3;</Text>
                                            <span className="icon-right"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image className="image"><a href="/chuyen-khoa/khu-%C4%91ieu-tri-cap-cao-(v.i.p)-7"><img src={KhuVip} alt="Khu &#x110;i&#x1EC1;u Tr&#x1ECB; C&#x1EA5;p Cao (V.I.P)" width="370" /></a></Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon"></span>
                                                <h4><a href="/chuyen-khoa/khu-%C4%91ieu-tri-cap-cao-(v.i.p)-7">Khu &#x110;i&#x1EC1;u Tr&#x1ECB; C&#x1EA5;p Cao (V.I.P)</a></h4>
                                            </TitleBox>
                                            <Text className="text">M&#xF4; h&#xEC;nh &#x201C;B&#x1EC7;nh vi&#x1EC7;n &#x2013; Kh&#xE1;ch s&#x1EA1;n&#x201D;</Text>
                                            <span className="icon-right"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image className="image"><a href="/chuyen-khoa/khoa-ngoai-tong-quat-8"><img src={NgoaiTQ} alt="Khoa Ngo&#x1EA1;i T&#x1ED5;ng Qu&#xE1;t" width="370" /></a></Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon"></span>
                                                <h4><a href="/chuyen-khoa/khoa-ngoai-tong-quat-8">Khoa Ngo&#x1EA1;i T&#x1ED5;ng Qu&#xE1;t</a></h4>
                                            </TitleBox>
                                            <Text className="text">S&#x1EE9;c kh&#x1ECF;e c&#x1EE7;a b&#x1EA1;n l&#xE0; h&#x1EA1;nh ph&#xFA;c c&#x1EE7;a ch&#xFA;ng t&#xF4;i</Text>
                                            <span className="icon-right"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image className="image"><a href="/chuyen-khoa/khoa-noi-than-kinh-9"><img src={NoiTK} alt="Khoa N&#x1ED9;i Th&#x1EA7;n Kinh" width="370" /></a></Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon"></span>
                                                <h4><a href="/chuyen-khoa/khoa-noi-than-kinh-9">Khoa N&#x1ED9;i Th&#x1EA7;n Kinh</a></h4>
                                            </TitleBox>
                                            <Text className="text">S&#x1EF1; h&#xE0;i l&#xF2;ng c&#x1EE7;a b&#x1EC7;nh nh&#xE2;n l&#xE0; m&#x1EE5;c ti&#xEA;u c&#x1EE7;a ch&#xFA;ng t&#xF4;i</Text>
                                            <span className="icon-right"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image className="image"><a href="/chuyen-khoa/khoa-nhi-10"><img src={KhoaNhi} alt="Khoa Nhi" width="370" /></a></Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon"></span>
                                                <h4><a href="/chuyen-khoa/khoa-nhi-10">Khoa Nhi</a></h4>
                                            </TitleBox>
                                            <Text className="text">Chung tay v&#xEC; s&#x1EE9;c kh&#x1ECF;e tr&#x1EBB; em</Text>
                                            <span className="icon-right"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image className="image"><a href="/chuyen-khoa/khoa-noi-tiet-11"><img src={KhoaNoiTiet} alt="Khoa N&#x1ED9;i Ti&#x1EBF;t" width="370" /></a></Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon"></span>
                                                <h4><a href="/chuyen-khoa/khoa-noi-tiet-11">Khoa N&#x1ED9;i Ti&#x1EBF;t</a></h4>
                                            </TitleBox>
                                            <Text className="text">C&#xF9;ng ng&#x1B0;&#x1EDD;i b&#x1EC7;nh &#x1ED5;n &#x111;&#x1ECB;nh b&#x1EC7;nh n&#x1ED9;i ti&#x1EBF;t</Text>
                                            <span className="icon-right"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>
                                <BlockTwo className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                    <InnerBox className="inner-box">
                                        <ImageBox className="image-box">
                                            <Image className="image"><a href="/chuyen-khoa/khoa-tiet-nieu-15"><img src={KhoaTietNieu} alt="Khoa Ti&#x1EBF;t Ni&#x1EC7;u" width="370" /></a></Image>
                                        </ImageBox>
                                        <LowerContent className="lower-content">
                                            <TitleBox className="title-box">
                                                <span className="icon"></span>
                                                <h4><a href="/chuyen-khoa/khoa-tiet-nieu-15">Khoa Ti&#x1EBF;t Ni&#x1EC7;u</a></h4>
                                            </TitleBox>
                                            <Text className="text">Khoa Ti&#x1EBF;t Ni&#x1EC7;u</Text>
                                            <span className="icon-right"></span>
                                        </LowerContent>
                                    </InnerBox>
                                </BlockTwo>


                            </Roww>

                          


                        </CarouselOuter>
                    </AutoContainer>
                </ServicesTow>
            </body> */}
        </>
    )
}


export default KhoaPage;