import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import CartButtons from "../components/CartButtons";
import TitleScreen from "../components/TitleScreen";
import BuyTotal from "../components/BuyTotal";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { resetProducts } from "../redux/slices/productosSlice";
import { debitCredit } from "../redux/slices/usuarioSlice";
import { useNavigate } from "react-router";
import styled from 'styled-components';
import BuyState from "../layout/BuyState"
import { t } from "i18next";

const CartScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [showBuyState, setShowBuyState] = useState(false)

  const {
    shoppingCart,
    data: { credit },
  } = useSelector((state) => state.user);

const handleTotal = () => {
  setTotal(
    shoppingCart.reduce((total, product) => {
      return total + product.price;
    }, 0)
  );
}

  useEffect(() => {
    handleTotal()
  },);

  const handleEndBuy = () => {
    if (credit >= total) {
      dispatch(debitCredit(credit - total));
      dispatch(resetProducts());
    }
    setShowBuyState(true)
  };

  const handleHomeScreen = () => {
    navigate("/");
  };
  
  return (
    !showBuyState ? 
    <Container>
      {shoppingCart.length > 0 ? (
        <SubContainer>
          <TitleScreen title={t('cartScreen.cart')} />
          <Card>
            <CardContent>
              {shoppingCart.map((product, index) => (
                <CartItem product={product} key={index}/>
              ))}
            </CardContent>
          </Card>
          <BuyTotal total={total} />
          <CartButtons onEndBuyPress={handleEndBuy} />
        </SubContainer>
      ) : (
        <TitleScreen title={t("cartScreen.reminderNotProduct")} />
      )}
    </Container>
    : <BuyState setShowBuyState={setShowBuyState}  onHomeScreen={handleHomeScreen}/>
  );
}

export default CartScreen;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const SubContainer = styled.div`
width:65%;
`
const CardContent = styled.div`
display:flex;
flex-direction: column;
width: 100%;
`