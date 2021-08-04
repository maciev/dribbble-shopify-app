import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  flex: flex-row;
  max-width: 1024px;
  margin: auto;
  background-color: red;
`;

const Image = styled.image`
  size: 10rem;
`;

const RightSide = styled.section``;

export function Hero() {
  return <Wrapper>test</Wrapper>;
}
