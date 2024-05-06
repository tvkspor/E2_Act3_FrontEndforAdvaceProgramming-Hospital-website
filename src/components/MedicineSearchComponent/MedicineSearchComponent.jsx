import React from "react";
import { useNavigate } from "react-router-dom";
import ButttonInputSearch from "../ButtonInputSearch/ButttonInputSearch";
import { searchMedicine } from "../../redux/slides/medicineSlide";
import { useState } from "react";
import { useDispatch } from "react-redux";

const MedicineSearchComponent = (props) => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const onSearch = (e) => {  
      setSearch(e.target.value);
      dispatch(searchMedicine(e.target.value));
    };
  return (
    <div style={{marginBottom: '20px', border: '1px solid green'}}>
      <ButttonInputSearch
      size="large"
      bordered={false}
      textbutton="Tìm kiếm"
      placeholder="Nhập từ khóa"
      onChange={onSearch}
      backgroundcolorbutton="#16A085"
    />
    </div>
  );
};
export default MedicineSearchComponent;