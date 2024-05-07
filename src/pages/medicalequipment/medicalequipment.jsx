import React from "react";

import { useDebounce } from "../../hooks/useDebounce";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as ItemService from "../../services/ItemService"
import ItemCardComponent from "../../components/ItemCardComponent/ItemCardComponent";
import ItemSearchComponent from "../../components/ItemSearchComponent/ItemSearchComponent";
import GojoLoader from '../../components/GojoLoader/GojoLoader';


function MedicalEquipment() {
  const searchItem = useSelector((state) => state?.item?.search);
  const searchDebounce = useDebounce(searchItem, 500);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(9);
  const [typeProducts, setTypeProducts] = useState([]);

  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [sortType, setSortType] = useState('price'); // 'price', 'date', 'name'


  const fetchItemAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await ItemService.getAllItem(search, limit);


    return res;
  };

  const fetchAllTypeProduct = async () => {
    const res = await ItemService.getAllTypeItem();
    if (res?.status === "OK") {
      setTypeProducts(res?.data);
    }
  };

  const {
    isLoading,
    data: items,
    isPreviousData,
  } = useQuery(["items", limit, searchDebounce], fetchItemAll, {
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  const sortedItems = React.useMemo(() => {
    if (Array.isArray(items?.data)) {
      return [...items.data].sort((a, b) => {
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
    } else {
      return [];
    }
  }, [items, sortOrder, sortType]);

  useEffect(() => {
    fetchAllTypeProduct();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup function to clear the timeout in case the component unmounts before the timeout finishes
    return () => clearTimeout(timer);
  }, []);

  const loadMore = () => {
    setLimit(prevLimit => prevLimit + 3); // Increase limit by 3 each time
  };
  if (isLoading) {
    return <GojoLoader />;
  }
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        {" "}
        DỤNG CỤ <span>Y TẾ</span>{" "}
      </h1>
      <ItemSearchComponent />

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


      <div className="box-container">
        {sortedItems.map((items) => {
          return (
            <ItemCardComponent
              name={items.name}
              price={items.price}
              component={items.component}
              availability={items.availability}
              importDate={items.importDate}
              image={items.image}
              description={items.description}
            />
          );
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
          xem thêm
        </button>
      </div>
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