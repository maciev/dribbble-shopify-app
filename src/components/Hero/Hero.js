import React from "react";
import Kombucha from "../../assets/Kombucha.png";
import styled from "styled-components";

const Wrapper = styled.section`
  margin-left: 3%;
  margin-right: 3%;
  height: 48rem;
`;

const ProductImage = styled.img`
  max-height: 100%;

  @media screen and (max-width: 1420px) {
    max-height: 45%;
  }
  @media screen and (max-width: 720px) {
    max-height: 25%;
  }
`;

const FlexRow = styled.div`
  height: 100%;
  display: flex;
  flex-direction: flex-row;
  justify-content: space-between;
`;

const Halves = styled.div`
  margin: 0;
  justify-content: center;
  display: flex;
  &:nth-child(1) {
    flex: 0.5;
    align-items: center;

    @media screen and (max-width: 992px) {
      flex: 0.3;
    }
  }
  &:nth-child(2) {
    flex: 0.5;
    flex-direction: column;

    @media screen and (max-width: 992px) {
      flex: 0.7;
    }
  }
`;

const ProductName = styled.h1`
  font-size: 82px;
  font-weight: normal;
  margin: 0;

  text-transform: uppercase;

  &:nth-of-type(1) {
    color: var(--purpleblue-color);
  }

  &:nth-of-type(2) {
    color: var(--pink-color);
  }
`;

const BodyText = styled.h4`
  margin: 0;
  color: var(--purpleblue-color);

  &:nth-of-type(1) {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: semi-bold;
  }

  &:nth-of-type(2) {
    font-size: 12px;
    font-weight: normal;
  }
`;

const Button = styled.button`
  background-color: var(--purpleblue-color);
  color: white;
  margin-top: 18px;
  margin-bottom: 48px;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  height: 3rem;
  width: 10rem;
  border: none;
`;

const Price = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: var(--purpleblue-color);
`;

const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h3 {
    color: var(--pink-color);
  }
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: red;
  }
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
          <ProductName>Sparkling. Tea</ProductName>
          <ProductName>Kombucha</ProductName>
          <BodyText>
            Sparkling teas are essentially a mix of soda and tea, a cold,
            carbonated version of the healthy classic-- and health experts love
            them. "These beverages can provide the benefits of the tea in them,"
            says Jessica Cording, R.D.
          </BodyText>
          <Price>$ 89.99</Price>
          <Button>BUY NOW</Button>
          <DetailsRow>
            <DetailsContainer>
              <BodyText>Ingredients</BodyText>
              <h3>100% Organic</h3>
            </DetailsContainer>
            <DetailsContainer>
              <BodyText>Flavors</BodyText>
              <h3>5 variations</h3>
            </DetailsContainer>
            <DetailsContainer>
              <BodyText>Volume</BodyText>
              <h3>465ml</h3>
            </DetailsContainer>
          </DetailsRow>
        </Halves>
      </FlexRow>
    </Wrapper>
  );
};
