import React from "react";
import styled from "styled-components";
import {
  lovato,
  afterpay,
  unicef,
  firsthealth,
  interneuron,
} from "../../assets/index.js";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding-left: 12rem;
  padding-right: 12rem;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--greywrapper-color);
  height: 8rem;
`;

const ProductImage = styled.img`
  max-width: 10rem;
  filter: grayscale(100%);

  @media screen and (max-width: 1420px) {
    max-width: 8rem;
  }
  @media screen and (max-width: 720px) {
    max-width: 6rem;
  }
`;

export const IconBar = () => {
  return (
    <Wrapper>
      <ProductImage src={afterpay.default} />
      <ProductImage src={unicef.default} />
      <ProductImage src={firsthealth.default} />
      <ProductImage src={interneuron.default} />
      <ProductImage src={lovato.default} />
    </Wrapper>
  );
};
