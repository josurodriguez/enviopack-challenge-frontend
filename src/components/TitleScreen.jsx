import React from "react";
import styled from 'styled-components';

const TitleScreen = ({title}) => <Text>{title}</Text>
export default TitleScreen;

const Text = styled.p`
font-size: 50px;
color: black;
text-align: center;
font-weight: bold;
`

