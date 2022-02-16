import React from "react";
import { SearchProduct } from "./SearchProduct";
import SortBy from "./SortBy";
import styled from 'styled-components';

const Filters = ({ filter, setFilter, orderType, setOrderType }) => {
  return (
    <Container>
      <SearchProduct filter={filter} setFilter={setFilter} />
      <SortBy orderType={orderType} setOrderType={setOrderType} />
    </Container>
  );
};

export default Filters;

const Container = styled.div`
display: flex;
justify-content: space-between;
width:100%;
align-items: center;
padding: 0px 10px;
`