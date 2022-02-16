import React from "react";
import styled from "styled-components";
import { t } from "i18next";

const SortBy = ({ orderType, setOrderType }) => {

  return (
    <div>
      <Text>{t('homeScreen.sortBy.order')}</Text>
      <Select
        onChange={(e) => setOrderType(e.target.value)}
        value={orderType}
        name="ordenar"
        id="ordenar"
      >
        <option value="Seleccionar">{t('homeScreen.sortBy.select')}</option>
        <option value="Ascendente">{t('homeScreen.sortBy.lessExpensive')}</option>
        <option value="Descendente">{t('homeScreen.sortBy.moreExpensive')}</option>
      </Select>
    </div>
  );
};

export default SortBy;

const Text = styled.p`
  font-size: 14px;
  color: #848484;
`;
const Select = styled.select`
  background-color: #f2f2f2;
  border-radius: 5px;
  border: 2px solid #d8d8d8;
  padding: 5px;
  width: 120px;
  font-size: 14px;
  height: 40px;
`;
