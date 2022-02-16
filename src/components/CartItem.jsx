import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { productRemove } from "../redux/slices/productosSlice";
import { removeToCart } from "../redux/slices/usuarioSlice";
import styled from "styled-components";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const HandleRemoveProduct = () => {
    dispatch(removeToCart(product));
    dispatch(productRemove(product));
  };

  return (
    <Container>
      <SubContainer>
        <Image
          alt="imagen_producto"
          src={require("../assets/image-product.jpg")}
        />
        <Text>{product.title}</Text>
      </SubContainer>
      <SubContainer>
        <Text>{`$ ${product.price}`}</Text>
        <ButtonContainer>
          <Button onClick={() => HandleRemoveProduct()} placeholder={"X"} />
        </ButtonContainer>
      </SubContainer>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0px;
  background-color: #f2f2f2;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;
const SubContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 70px;
  border-radius: 10px;
  margin-right: 10px;
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
width:34px;
margin: 0px 15px;
`