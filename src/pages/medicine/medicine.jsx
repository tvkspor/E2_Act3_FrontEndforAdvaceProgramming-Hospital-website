import React, {memo} from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as MedicineService from "../../services/Medicine"
import MedicineComponent from "../../components/MedicineComponent/MedicineComponent";
import { WrapperBoLoc, WrapperChuDoiTuongSuDung, WrapperDoiTuongSuDung, WrapperFilter, WrapperIcon, WrapperKhungBen, WrapperKhungBenBenTrong, WrapperKhungChinh, WrapperKhungDuoiBoLoc, WrapperNutDoiTuongSuDung, WrapperPhanLoaiDoiTuongSuDung, WrapperPhanLoaiDoiTuongSuDungA} from "./style"
import MedicineSearchComponent from "../../components/MedicineSearchComponent/MedicineSearchComponent"
import { Checkbox } from "antd";

function MedicalEquipment(){
  const [isOpen, setIsOpen] = useState(false);
  const [filteredMedicine, setFilteredMedicine] = useState([]);
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [updatedTypes, setUpdatedTypes] = useState([]);
 const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [sortType, setSortType] = useState('price'); // 'price', 'date', 'name'

  const handleTypeCheckboxChange = (type) => {
    setSelectedTypes(prevSelectedTypes => {
      const updatedTypes = prevSelectedTypes.includes(type)
          ? prevSelectedTypes.filter(t => t !== type)
          : [...prevSelectedTypes, type];
      console.log("Updated types:", updatedTypes);
      return updatedTypes;
    });
  };

  const searchMedicine = useSelector((state) => state?.medicine?.search);
  const searchDebounce = useDebounce(searchMedicine, 500);
  const [loading, setLoading] = useState(false);
  
  const [limit, setLimit] = useState(4);
  const [typeProducts, setTypeProducts] = useState([]);

  const fetchMedicineAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await MedicineService.getAllMedicine(search, limit, selectedTypes);
    return res;
  };

  const fetchAllTypeProduct = async () => {
    const res = await MedicineService.getAllTypeMedicine();
    if (res?.status === "OK") {
      setTypeProducts(res?.data);
    }
  };

  const {
    isLoading,isLoadingFiltered,
    data: medicine,
    isPreviousData,
  } = useQuery(["medicine", limit, searchDebounce], fetchMedicineAll, 
    async (context) => {
      const limit = context?.queryKey && context?.queryKey[1];
      const search = context?.queryKey && context?.queryKey[2];
      const res = await MedicineService.getAllMedicine(search, limit);
    },
    {
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });
  useEffect(() => {
    fetchAllTypeProduct();
  }, [medicine, selectedTypes]);
  // First, apply the filter to all medicines
  const filteredItems = React.useMemo(() => {
    if (Array.isArray(medicine?.data)) {
      return medicine.data.filter(med => selectedTypes.length === 0 || selectedTypes.includes(med.type));
    } else {
      return [];
    }
  }, [medicine, selectedTypes]);

  // Then, sort the filtered items
  const sortedItems = React.useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      let compareA, compareB;

      switch (sortType) {
        case 'price':
          compareA = a.price;
          compareB = b.price;
          break;
        case 'date':
          compareA = new Date(a.importDate);
          compareB = new Date(b.importDate);
          break;
        case 'name':
          compareA = a.name;
          compareB = b.name;
          break;
        default:
          compareA = a.price;
          compareB = b.price;
      }

      if (sortOrder === 'asc') {
        return compareA > compareB ? 1 : -1;
      } else {
        return compareA < compareB ? 1 : -1;
      }
    });
  }, [filteredItems, sortOrder, sortType]);

  useEffect(() => {
    fetchMedicineAll();
  }, [selectedTypes]);
  
  useEffect(() => {
    if (selectedTypes.length > 0 && sortedItems) {
      const filteredMedicine = sortedItems.filter(med => selectedTypes.includes(med.type));
      setFilteredMedicine(filteredMedicine);
    } else {
      // Nếu không có loại được chọn, hiển thị tất cả sản phẩm
      setFilteredMedicine(sortedItems || []);
    }
  }, [sortedItems, selectedTypes]);

  {isLoading && <div>Loading...</div>}

  const loadMore = () => {
    setLimit(prevLimit => prevLimit + 2); // Increase limit by 3 each time
  };
  
    return (
      <section className="blogs" id="blogs">
      <h1 className="heading">
        {" "}
        DỤNG CỤ <span>Y TẾ</span>{" "}
      </h1>
      <MedicineSearchComponent/> 
      <div className="sort-container" style={sortContainerStyle}>
        <label style={labelStyle}>Sắp xếp theo: </label>
        <select style={selectStyle} value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="price">Giá</option>
          <option value="date">Ngày</option>
          <option value="name">Tên</option>
        </select>
        <label style={labelStyle}>Thứ tự: </label>
        <select style={selectStyle} value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Tăng dần</option>
          <option value="desc">Giảm dần</option>
        </select>
      </div>
      <WrapperKhungChinh>
        <WrapperKhungBen style={{backgroundColor:'white'}}>
         <WrapperKhungBenBenTrong>
         <div className="BolocNangcao" style={{
              color: 'var(--gray-1000)',
              paddingTop: '.75rem',
              paddingBottom: '.5rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              borderColor: 'var(--gray-200)',
              borderBottomWidth: '5px',
              alignItems: 'center',
              display: 'flex',
              borderRadius: '10px',
            }}>
             <WrapperIcon>
               <svg>
                 <path d="M10 16H14C14.5523 16 15 16.4477 15 17C15 17.5128 14.614 17.9355 14.1166 17.9933L14 18H10C9.44772 18 9 17.5523 9 17C9 16.4872 9.38604 16.0645 9.88338 16.0067L10 16H14H10ZM8 11H16C16.5523 11 17 11.4477 17 12C17 12.5128 16.614 12.9355 16.1166 12.9933L16 13H8C7.44772 13 7 12.5523 7 12C7 11.4872 7.38604 11.0645 7.88338 11.0067L8 11H16H8ZM5 6H19C19.5523 6 20 6.44772 20 7C20 7.51284 19.614 7.93551 19.1166 7.99327L19 8H5C4.44772 8 4 7.55228 4 7C4 6.48716 4.38604 6.06449 4.88338 6.00673L5 6H19H5Z" fill="currentColor"></path>
               </svg>
             </WrapperIcon>
             <h3 className="css-jey85n">Bộ lọc nâng cao</h3>
           </div>
           <WrapperKhungDuoiBoLoc>
             <WrapperDoiTuongSuDung>
             <WrapperChuDoiTuongSuDung>
                <div className="dropdown-relative" style={{display:"flex", justifyContent:"space-between"}}>
                  <p className="loai-thuoc" style={{flex: "0 0 auto"}}>Loại thuốc</p>
                  <div className="Button" style={{flex: "0 0 auto", cursor:"pointer"}}>
                  <button type="button" onClick={handleToggleDropdown} className="dropdown-toggle" style={{justifyContent:"right",cursor: "pointer"}}>
                    <svg
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className={`transition-[transform] rotate-${isOpen ? 180 : 0}`}
                    ><path d="M5.25383 8.29289C5.64435 7.90237 6.27752 7.90237 6.66804 8.29289L12.9609 14.5858L19.2538 8.29289C19.6444 7.90237 20.2775 7.90237 20.668 8.29289C21.0586 8.68342 21.0586 9.31658 20.668 9.70711L13.668 16.7071C13.2775 17.0976 12.6444 17.0976 12.2538 16.7071L5.25383 9.70711C4.86331 9.31658 4.86331 8.68342 5.25383 8.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              </div>
            </div>

            {isOpen && (
              <div className={`dropdown-content ${isOpen ? 'dropdown-content-open' : ''}`}>
                     <WrapperBoLoc>
                     {typeProducts.map((type) => (
                      <Checkbox
                        key={type}
                        onChange={() => handleTypeCheckboxChange(type)}
                        checked={selectedTypes.includes(type)}
                      >
                        {type}
                      </Checkbox>
                    ))}
                    </WrapperBoLoc>
              </div>
            )}
          </WrapperChuDoiTuongSuDung>
         </WrapperDoiTuongSuDung>
       </WrapperKhungDuoiBoLoc>
     </WrapperKhungBenBenTrong>
   </WrapperKhungBen> 
   <div> 
   <div className="box-container">
   {sortedItems.map((medicine) => {
        return (
          <MedicineComponent
            name={medicine.name}
            price={medicine.price}
            description={medicine.description}
            selled={medicine.selled}
            countInStock={medicine.countInStock}
            image={medicine.image}
            type={medicine.type}
          />
        )
      })}
  </div>
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
  </WrapperKhungChinh>
  
</section>
);   
}
const sortContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f8f9fa',
  padding: '10px',
  borderRadius: '5px',
  margin: '20px 0',
};

const labelStyle = {
  marginRight: '10px',
  fontWeight: 'bold',
};

const selectStyle = {
  padding: '5px',
  border: 'none',
  borderRadius: '5px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
};
export default MedicalEquipment;