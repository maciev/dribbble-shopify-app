import React from "react";
import Kombucha from "../../assets/Kombucha.png";
import styled from "styled-components";

const Wrapper = styled.section`
  margin-left: 3%;
  margin-right: 3%;
  height: 48rem;
`;

const ProductImage = styled.img`
  max-height: 48rem;
`;

const FlexRow = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: flex-row;
  justify-content: space-between;
`;

const Halves = styled.div`
  margin: 0;
  justify-content: center;
  display: flex;
  &:nth-child(1) {
    flex: 0.4;
  }
  &:nth-child(2) {
    flex: 0.6;
  }

  &:nth-child(2) {
    flex-direction: column;
  }
`;

const ProductName = styled.h1`
  font-size: 82px;
  font-weight: lighter;
  margin: 0;
`;

const BodyText = styled.h4`
  font-weight: normal;
  margin: 0;
`;

export const Hero = () => {
  return (
    <Wrapper>
      <FlexRow>
        <Halves>
          <ProductImage src={Kombucha} />
        </Halves>
        <Halves>
          <BodyText>Organic tea</BodyText>
          <ProductName>Sparkling. Tea Kombucha</ProductName>
          <BodyText>
            Sparkling teas are essentially a mix of soda and tea, a cold,
            carbonated version of the healthy classic-- and health experts love
            them. "These beverages can provide the benefits of the tea in them,"
            says Jessica Cording, R.D.
          </BodyText>
          <button>Click me</button>
        </Halves>
      </FlexRow>
    </Wrapper>
  );
};
