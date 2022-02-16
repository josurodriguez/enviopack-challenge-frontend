import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import Filters from "../components/Filters";
import ReactPaginate from "react-paginate";
import styled from 'styled-components';
import { t } from "i18next";

const Products = () => {

  const Products = useSelector((state) => state.product.Products);
  const [page, setPage] = useState(1);
  const [orderProducts, setOrderProducts] = useState(Products);
  const [filter, setFilter] = useState("");
  const [orderType, setOrderType] = useState("Seleccionar");

  useEffect(() => {
    if (orderType === "Seleccionar") {
      setOrderProducts(Products);
    }
    if (orderType === "Ascendente") {
      setOrderProducts(
        (prev) => [...prev].sort((a, b) => a.price - b.price) 
      );
    }
    if (orderType === "Descendente") {
      setOrderProducts(
        (prev) => [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [orderType, Products]);

  const productsPerPage = 6;

  const pagesVisited = page * productsPerPage;

  const indexOfFirstProduct = pagesVisited + productsPerPage;

  const productsFilter = orderProducts.filter((val) =>
    val.title.toLowerCase().includes(filter.toLowerCase())
  );

  const displayProducts = productsFilter
    .slice(pagesVisited, indexOfFirstProduct)
    .map((product, index) => {
      return <ProductCard key={index} product={product} />;
    });

  return (
    <>
      <Filters filter={filter} setFilter={setFilter} orderType={orderType} setOrderType={setOrderType} />
      <ProductsContainer>{displayProducts}</ProductsContainer>
      <ReactPaginate
        previousLabel={t('homeScreen.prev')}
        nextLabel={t('homeScreen.next')}
        pageCount={Math.ceil(orderProducts.length / productsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(e) => setPage(e.selected)}
        
        containerClassName={"border  items-center flex flex-row p-5"}
        pageClassName={"border p-1 m-1"}
        activeClassName={"bg-gray-500 text-white  p-2"}
        previousLinkClassName = {"bg-zinc-800  p-2 text-white"}
        nextLinkClassName = {"bg-zinc-800  p-2 text-white"}
      />
    
    </>
  );
}

export default Products;

const ProductsContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
