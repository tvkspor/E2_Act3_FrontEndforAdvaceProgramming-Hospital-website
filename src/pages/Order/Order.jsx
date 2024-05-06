import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperButtonMore,
  WrapperProducts,
  WrapperTypeProduct,
} from "./style";
import hinh1 from "../../assets/images/hinh1.webp";
import hinh2 from "../../assets/images/hinh2.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductService";
import { useSelector } from "react-redux";
import { useState } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect } from "react";
import NavMenu from "../../components/NavMenu/NavMenu";
import Home from "../../components/Home/Home";

import ProductSearchComponent from "../../components/ProductSearchComponent/ProductSearchComponent";


const Order = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(9);
  const [typeProducts, setTypeProducts] = useState([]);

  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await ProductService.getAllProduct(search, limit);

    return res;
  };

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    if (res?.status === "OK") {
      setTypeProducts(res?.data);
    }
  };

  const {
    isLoading,
    data: product,
    isPreviousData,
  } = useQuery(["products", limit, searchDebounce], fetchProductAll, {
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  useEffect(() => {
    fetchAllTypeProduct();
  }, []);

  const [sortOrderPrice, setSortOrderPrice] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [sortOrderDate, setSortOrderDate] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [sortOrderName, setSortOrderName] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const sortedItems = React.useMemo(() => {
    if (Array.isArray(product?.data)) {
      return [...product.data].sort((a, b) => {
        if (sortOrderPrice === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      }).sort((a, b) => {
        const dateA = new Date(a.importDate);
        const dateB = new Date(b.importDate);
        if (sortOrderDate === 'asc') {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      }).sort((a, b) => {
        if (sortOrderName === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    } else {
      return [];
    }
  }, [product, sortOrderPrice, sortOrderDate, sortOrderName]);

  const loadMore = () => {
    setLimit(prevLimit => prevLimit + 3); // Increase limit by 3 each time
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (

               
          

<section className="blogs" id="blogs">
      <h1 className="heading">
        {" "}
        LIỆU TRÌNH <span>ĐIỀU TRỊ</span>{" "}
      </h1>
      <ProductSearchComponent/> 
      {/* <div className="sort-container" style={sortContainerStyle}>
      <label style={labelStyle}>Sắp xếp theo giá: </label>
      <select style={selectStyle} value={sortOrderPrice} onChange={(e) => setSortOrderPrice(e.target.value)}>
        <option value="asc">Giá tăng dần</option>
        <option value="desc">Gía giảm dần</option>
      </select>

      <label style={labelStyle}>Sắp xếp theo ngày: </label>
      <select style={selectStyle} value={sortOrderDate} onChange={(e) => setSortOrderDate(e.target.value)}>
        <option value="asc">Tăng dần</option>
        <option value="desc">Giảm dần</option>
      </select>

      <label style={labelStyle}>Sắp xếp theo tên: </label>
        <select style={selectStyle} value={sortOrderName} onChange={(e) => setSortOrderName(e.target.value)}>
          <option value="asc">Từ A-Z</option>
          <option value="desc">Từ Z-A</option>
        </select>
    </div>   */}
      <div className="box-container">
              {sortedItems.map((product) => {
                return (
                 <CardComponent
                  //key={product._id}
                  countInStock={product.countInStock}
                  description={product.description}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  selled={product.selled}
                  discount={product.discount}
                  id={product._id}
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
          Load More
        </button>
      </div>
    </section>
  );
};

export default Order;
