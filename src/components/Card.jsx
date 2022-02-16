import React from "react";
import styled from "styled-components";

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;
export default Card;

const StyledCard = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 5px;
`;
