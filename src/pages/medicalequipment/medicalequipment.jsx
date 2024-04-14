import React, { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import * as ItemService from "../../services/ItemService";
import ItemCardComponent from "../../components/ItemCardComponent/ItemCardComponent";
import ItemSearchComponent from "../../components/ItemSearchComponent/ItemSearchComponent";

function MedicalEquipment() {
  const searchItem = useSelector((state) => state?.item?.search);
  const searchDebounce = useDebounce(searchItem, 500);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(3);
  const [typeProducts, setTypeProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("price");

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

  useEffect(() => {
    fetchAllTypeProduct();
  }, []);

  const sortFunctions = {
    price: (a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price),
    date: (a, b) => {
      const dateA = new Date(a.importDate);
      const dateB = new Date(b.importDate);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    },
    name: (a, b) => (sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)),
  };

  const sortedItems = React.useMemo(() => {
    if (Array.isArray(items?.data)) {
      return [...items.data].sort(sortFunctions[sortBy]);
    } else {
      return [];
    }
  }, [items, sortOrder, sortBy]);

  const handleSortChange = (criteria) => {
    setSortBy(criteria);
  };

  const handleOrderChange = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const loadMore = () => {
    setLimit((prevLimit) => prevLimit + 3); // Increase limit by 3 each time
  };

  if (isLoading) {
    return <div>Loading...</div>;
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
        <select
          style={{ ...selectStyle, cursor: "pointer" }}
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="price">Giá</option>
          <option value="date">Ngày</option>
          <option value="name">Tên</option>
        </select>

        <button style={{ ...buttonStyle, cursor: "pointer" }} onClick={handleOrderChange}>
          {sortOrder === "asc" ? "Tăng dần" : "Giảm dần"}
        </button>
      </div>
      <div className="box-container">
        {sortedItems.map((item) => {
          return (
            <ItemCardComponent
              key={item.ID}
              name={item.name}
              ID={item.ID}
              price={item.price}
              component={item.component}
              availability={item.availability}
              importDate={item.importDate}
              image={item.image}
            />
          );
        })}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button
          onClick={loadMore}
          style={{
            border: "2px solid green",
            borderRadius: "5px",
            padding: "10px 20px",
            color: "green",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "green";
            e.currentTarget.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "green";
          }}
        >
          Load More
        </button>
      </div>
    </section>
  );
}

const sortContainerStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f8f9fa",
  padding: "10px",
  borderRadius: "5px",
  margin: "20px 0",
};

const labelStyle = {
  marginRight: "20px",
  fontWeight: "bold",
};

const selectStyle = {
  padding: "5px",
  marginRight: "20px",
  border: "none",
  borderRadius: "5px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
};

const buttonStyle = {
  borderWidth: '2px', 
  borderRadius: '5px', 
}

export default MedicalEquipment;
