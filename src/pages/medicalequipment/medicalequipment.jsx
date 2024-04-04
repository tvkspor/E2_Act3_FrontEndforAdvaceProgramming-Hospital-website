import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// import { useDebounce } from "../../hooks/useDebounce";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import * as ItemService from "../../services/ItemService"
// import CardComponent from "../../components/CardComponent/CardComponent";

import hinh1 from "../../assets/images/maydohuyetap.jpg"
import { WrapperProducts } from "./style";
// import ItemCardComponent from "../../components/ItemCardComponent/ItemCardComponent";

function MedicalEquipment(){
  // const searchProduct = useSelector((state) => state?.product?.search);
  // const searchDebounce = useDebounce(searchProduct, 500);
  // const [loading, setLoading] = useState(false);
  // const [limit, setLimit] = useState(6);
  // const [typeProducts, setTypeProducts] = useState([]);

  // const fetchProductAll = async (context) => {
  //   const limit = context?.queryKey && context?.queryKey[1];
  //   const search = context?.queryKey && context?.queryKey[2];
  //   const res = await ItemService.getAllItem(search, limit);

  //   return res;
  // };

  // const fetchAllTypeProduct = async () => {
  //   const res = await ItemService.getAllTypeItem();
  //   if (res?.status === "OK") {
  //     setTypeProducts(res?.data);
  //   }
  // };

  // const {
  //   isLoading,
  //   data: items,
  //   isPreviousData,
  // } = useQuery(["items", limit, searchDebounce], fetchProductAll, {
  //   retry: 3,
  //   retryDelay: 1000,
  //   keepPreviousData: true,
  // });

  // useEffect(() => {
  //   fetchAllTypeProduct();
  // }, []);
    return (
      <section className="blogs" id="blogs">
      <h1 className="heading">
        {" "}
        DỤNG CỤ <span>Y TẾ</span>{" "}
      </h1>
      <div className="box-container">
      {/* <WrapperProducts>
            {items?.data?.map((items) => {
              return (
                <ItemCardComponent
                  name={items.name}
                  price={items.price}
                  component={items.component}
                  availability={items.image}
                  importDate={items.importDate}
                />
              );
            })}
          </WrapperProducts> */}
        {/* <Wrappe14pidov>
            <WrapperProductCard>
                <WrapperA title="Máy đo huyết áp cổ tay tự động AND UB-525  hỗ trợ đo huyết áp, cảnh báo đột quỵ" href="/trang-thiet-bi-y-te/may-do-huyet-ap-co-tay-tu-dong-and-ub-525-afib-canh-bao-dot-quy.html">
                    <WrapperImg>
                        <Img>
                            <picture className="h-[112px] w-[112px] md:h-[128px] md:w-[128px] ">
                                <source srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09773_55963348d2.jpg" type="image/webp" width="128" height="128" />
                                <source srcSet="/static/images/img-product.svg" type="image/webp" width="128" height="128" />
                                <img loading="lazy" decoding="async" alt="Máy đo huyết áp cổ tay tự động AND UB-525  hỗ trợ đo huyết áp, cảnh báo đột quỵ" className="h-[112px] w-[112px] md:h-[128px] md:w-[128px] " src="/estore-images/fallback-images/error/img-error-1_1.svg" />
                            </picture>
                        </Img>
                    </WrapperImg>
                </WrapperA>
                <WrapperRibbon>
                    <WrapperTopLeft>
                        <a href="/trang-thiet-bi-y-te/may-do-huyet-ap">
                            <WrapperRibbonx2>Máy đo huyết áp</WrapperRibbonx2>
                        </a>
                    </WrapperTopLeft>
                </WrapperRibbon>
                <WrapperContent>
                    <WrapperLink>
                        <a title="Máy đo huyết áp AND-UB-525 " href="/trang-thiet-bi-y-te/may-do-huyet-ap-co-tay-tu-dong-and-ub-525-afib-canh-bao-dot-quy.html">
                            <h3 className="title text-body2 font-semibold line-clamp-3">Máy đo huyết áp cổ tay tự động AND UB-525</h3>
                        </a>
                    </WrapperLink>
                    <div className="attention">
                        <div className="product-price">
                            <div className="new">
                                <div className="price text-body1 font-semibold">792.000đ</div>
                                <div className="product_unit text-body2 font-normal"> <span style={{ margin: "0px 4px" }}>/</span>Hộp</div>
                            </div>
                            <div className="text-caption font-normal text-text-tertiary line-through">990.000đ</div>
                        </div>
                    </div>
                    <div className="specifications !mt-2">
                        <div className="w-fit rounded-xl bg-layer-gray px-2 py-1">
                            <p className="w-fit text-caption font-medium text-text-secondary line-clamp-2">Hộp</p>
                        </div>
                    </div>
                    <WrapperProductIngredient>
                        <div className="product-ingredient">
                            <div className="text-caption font-normal line-clamp-3 md:line-clamp-2">Thành phần: <span className="ingredient-content"> Máy đo</span></div>
                        </div>
                    </WrapperProductIngredient>
                </WrapperContent>
            </WrapperProductCard>
        </Wrappe14pidov> */}

        
        <div className="box">
          <div className="image">
            <img src={hinh1} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
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
            <h3>Máy đo huyết áp</h3>
            {/* <p>Lorem, ipsum dolor.</p> */}
            <ul style={{listStyleType: 'disc'}}>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Tình trạng</p>
                  <p style={{backgroundColor: '#C0FFAA', borderRadius: '10px', color: 'green', fontWeight: 'bold', padding: '10px'}}>Còn hàng</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Ngày nhập kho</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>10/12/2023</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Thành phần</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>Nhựa</p>
                </div>
              </li>
            </ul>


            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={hinh1} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
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
            <h3>Máy đo huyết áp</h3>
            {/* <p>Lorem, ipsum dolor.</p> */}
            <ul style={{listStyleType: 'disc'}}>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Tình trạng</p>
                  <p style={{backgroundColor: '#FFAAAA', borderRadius: '10px', color: 'red', fontWeight: 'bold', padding: '10px'}}>Hết hàng</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Ngày nhập kho</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>10/12/2023</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Thành phần</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>Nhựa</p>
                </div>
              </li>
            </ul>


            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={hinh1} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
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
            <h3>Máy đo huyết áp</h3>
            {/* <p>Lorem, ipsum dolor.</p> */}
            <ul style={{listStyleType: 'disc'}}>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Tình trạng</p>
                  <p style={{backgroundColor: '#FFAAAA', borderRadius: '10px', color: 'red', fontWeight: 'bold', padding: '10px'}}>Hết hàng</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Ngày nhập kho</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>10/12/2023</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Thành phần</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>Nhựa</p>
                </div>
              </li>
            </ul>


            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={hinh1} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
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
            <h3>Máy đo huyết áp</h3>
            {/* <p>Lorem, ipsum dolor.</p> */}
            <ul style={{listStyleType: 'disc'}}>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Tình trạng</p>
                  <p style={{backgroundColor: '#FFAAAA', borderRadius: '10px', color: 'red', fontWeight: 'bold', padding: '10px'}}>Hết hàng</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Ngày nhập kho</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>10/12/2023</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Thành phần</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>Nhựa</p>
                </div>
              </li>
            </ul>


            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={hinh1} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
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
            <h3>Máy đo huyết áp</h3>
            {/* <p>Lorem, ipsum dolor.</p> */}
            <ul style={{listStyleType: 'disc'}}>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Tình trạng</p>
                  <p style={{backgroundColor: '#FFAAAA', borderRadius: '10px', color: 'red', fontWeight: 'bold', padding: '10px'}}>Hết hàng</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Ngày nhập kho</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>10/12/2023</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Thành phần</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>Nhựa</p>
                </div>
              </li>
            </ul>


            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={hinh1} alt="" style={{width: "100%", height: "100%", objectFit: "contain"}}/>
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
            <h3>Máy đo huyết áp</h3>
            {/* <p>Lorem, ipsum dolor.</p> */}
            <ul style={{listStyleType: 'disc'}}>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Tình trạng</p>
                  <p style={{backgroundColor: '#FFAAAA', borderRadius: '10px', color: 'red', fontWeight: 'bold', padding: '10px'}}>Hết hàng</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Ngày nhập kho</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>10/12/2023</p>
                </div>
              </li>
              <li>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Thành phần</p>
                  <p style={{color: 'black', fontWeight: 'bold'}}>Nhựa</p>
                </div>
              </li>
            </ul>


            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"><FontAwesomeIcon icon={faChevronRight}/></span>
            </a>
          </div>
        </div>

        {/* <div className="box">
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
        </div> */}
      </div>
    </section>
    );   
}
export default MedicalEquipment;

