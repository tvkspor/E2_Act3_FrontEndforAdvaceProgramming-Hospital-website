import React from "react";
import { useNavigate } from "react-router-dom";
import ButttonInputSearch from "../ButtonInputSearch/ButttonInputSearch";
import hinh1 from "../../assets/images/maydohuyetap.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { searchProduct } from "../../redux/slides/productSlide";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ProductSearchComponent = (props) => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const onSearch = (e) => {  
      setSearch(e.target.value);
      dispatch(searchProduct(e.target.value));
    };
  return (
    <div style={{marginBottom: '20px', border: '1px solid green'}}>
      <ButttonInputSearch
      size="large"
      bordered={false}
      textbutton="Tìm kiếm"
      placeholder="Nhập từ khóa"
      onChange={onSearch}
      backgroundcolorbutton="#3a97f4"
    />
    </div>
  );
};
export default ProductSearchComponent;