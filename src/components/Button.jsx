import React from "react";
import styled from "styled-components";

const Button = ({ placeholder, onClick }) => <StyledButton onClick={onClick}>{placeholder}</StyledButton>
export default Button;

const StyledButton = styled.button`
  color: white;
  padding: 10px;
  justify-content: center;
  border-radius: 5;
  align-items: center;
  width: 100%;
  background: black;
  border-radius: 5px;
`;
