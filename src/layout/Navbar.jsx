import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { t } from "i18next";

const Navbar = () => {

  const {
    shoppingCart,
    data: { credit, firstName },
  } = useSelector((state) => state.user);

  return (
    <Container>
      <Link to="/">
        <Text bold>{t("navBar.title")}</Text>
      </Link>

      <DataUserContainer>
        <Text>{firstName}</Text>
        <Link to="/cart">
          <Text bold>{t("navBar.cart",{number:shoppingCart.length})}</Text>
        </Link>
        <Text>{t("navBar.cart",{number:credit})}</Text>
      </DataUserContainer>
    </Container>
  );
};

const Container = styled.div`
  background: black;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DataUserContainer = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-around;
`;

const Text = styled.p`
  font-size: 16px;
  color: white;
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
`;

export default Navbar;
