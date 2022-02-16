import React, { useEffect } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import TitleScreen from "../components/TitleScreen";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import "../translations/i18n";


const BuyState = ({ setShowBuyState, onHomeScreen}) => {
  const { t } = useTranslation();
  const { shoppingCart } = useSelector((state) => state.user);
  const [buy, setBuy] = React.useState(false);

  useEffect(() => {
    if (shoppingCart.length > 0) {
      setBuy(true);
    } else {
      setBuy(false);
    }
  }, [shoppingCart]);

  return (
    <Container>
      <Spacer height={2} />
      <TitleScreen title={t("cartScreen.buyState.title")} />
      <Spacer height={2} />
      <SubContainer>
        <Card>
          <CardContent>
            {buy ? (
              <>
                <Text>
                {t("cartScreen.buyState.error")}
                </Text>
                <Spacer height={2} />
                <Button
                  placeholder={t("cartScreen.buyState.errorButton")}
                  onClick={() => {setShowBuyState(false)}}
                />
              </>
            ) : (
              <>
                <Text>{t("cartScreen.buyState.success")}</Text>
                <Spacer height={2} />
                <Button
                  placeholder={t("cartScreen.buyState.successButton")}
                  onClick={onHomeScreen}
                />
              </>
            )}
          </CardContent>
        </Card>
      </SubContainer>
    </Container>
  );
}

export default BuyState;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Spacer = styled.div`
height: ${(props) => (props.height * 8)}px;
`
const SubContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const CardContent = styled.div`
display:flex;
flex-direction: column;
width: 700px;
align-items: center;
`
const Text = styled.p`
text-align: center;
`