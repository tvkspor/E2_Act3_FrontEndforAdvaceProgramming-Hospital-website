import React from "react";
import ButttonInputSearch from "../ButtonInputSearch/ButttonInputSearch";
import { useState } from "react";
import { searchDoctor } from "../../redux/slides/doctorSlide";
import { useDispatch } from "react-redux";

const DoctorComponent = ()=> {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    const onSearch = (e) => {
        setSearch(e.target.value);
        dispatch(searchDoctor(e.target.value));
    };

    return (
        <ButttonInputSearch
              size="large"
              bordered={false}
              textbutton="Tìm kiếm"
              placeholder="Nhập từ khóa muốn tìm kiếm"
              onChange={onSearch}
              backgroundcolorbutton="#3a97f4"
        />
    )
}

export default DoctorComponent