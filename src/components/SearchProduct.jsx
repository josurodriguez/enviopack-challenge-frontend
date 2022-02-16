import { t } from "i18next";
import React from "react";
import styled from 'styled-components';


export const SearchProduct = ({ filter, setFilter }) =>{
  return(
      <Input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        placeholder={t('homeScreen.search')}
      />
)}
  

const Input = styled.input`
background-color: #F2F2F2;
border-radius: 5px;
border: 2px solid #D8D8D8;
padding:5px;
width:200px;
font-size:12px;
height: 40px;
`
