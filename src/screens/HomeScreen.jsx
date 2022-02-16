import React from "react";
import Products from "../layout/Products";

import TitleScreen from "../components/TitleScreen";
import styled from "styled-components";
import { t } from "i18next";

const HomeScreen = () => {

  return (
    <Container>
      <SubContainer>
        <TitleScreen title={t("homeScreen.title")} />
        <Products />
      </SubContainer>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
`;
