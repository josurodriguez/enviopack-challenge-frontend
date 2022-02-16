import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router";
import styled from 'styled-components';
import { t } from "i18next";


const CartButtons = ({ onEndBuyPress }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handleNavigate} placeholder={t('cartScreen.buttonBackHome')} />
      </ButtonContainer>

      <ButtonContainer>
        <Button onClick={onEndBuyPress} placeholder={t('cartScreen.buttonEndBuy')} />
      </ButtonContainer>
    </Container>
  );
}

export default CartButtons;

const Container = styled.div`
display:flex;
justify-content: space-between;
margin-top:35px;
`
const ButtonContainer = styled.div`
width: 150px;
`