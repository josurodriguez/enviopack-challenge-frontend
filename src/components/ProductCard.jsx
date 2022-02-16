import React from "react";
import "../App.css";
import Button from "./Button";
import Card from "./Card";
import { useDispatch } from "react-redux";

import { productAdd } from "../redux/slices/productosSlice";
import { addToCart } from "../redux/slices/usuarioSlice";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { t } from "i18next";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleAddProduct = () => {
    dispatch(addToCart(product));
    dispatch(productAdd(product));
  };

  return (
    <CardContainer>
      <Card>
        <CardContent>
          <Image
            alt="imagen_producto"
            src={require("../assets/image-product.jpg")}
          />
          <Spacer height={2} />
          <Text>{product.title}</Text>
          <Spacer height={2} />
          <Text>{product.price}</Text>
          <Spacer height={2} />
          {product.isAdd ? (
            <Button
              placeholder={t('homeScreen.productCard.buttonSeeCart')}
              onClick={() => navigate("/cart")}
            />
          ) : (
            <Button
              placeholder={t('homeScreen.productCard.buttonAddCart')}
              onClick={() => HandleAddProduct()}
            />
          )}
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default ProductCard;

const CardContainer = styled.div`
  width: 300px;
  margin: 10px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 75%;
`;
const Spacer = styled.div`
  height: ${(props) => props.height * 8}px;
`;

const Text = styled.p`
  font-size: 20px;
  color: black;
  text-align: center;
  font-weight: 600;
`;
