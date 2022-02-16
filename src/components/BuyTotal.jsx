import React from "react";
import Card from "./Card";
import styled from 'styled-components';
import { t } from "i18next";

const BuyTotal = ({total}) => {
  return (
    <Container>
      <Card>
        <CardContent>
            <Text>{t('cartScreen.total')}</Text>
            <Text>$ {total}</Text>
        </CardContent>
      </Card>
    </Container>
  );
}

export default BuyTotal;


const Container = styled.div`
margin-top: 20px;
`

const CardContent = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const Text = styled.p`
font-size: 20px;
font-weight: bold;
`
