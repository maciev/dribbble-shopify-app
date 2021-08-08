import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arielogo from "../../assets/arielogo.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  color: var(--purpleblue-color);
  justify-content: flex-start;
  margin-left: 3%;
  margin-right: 3%;
  height: 48px;
  font-size: 14px;
  font-weight: normal;
`;

const Thirds = styled.div`
  height: 100%;
  display: flex;
  margin-top: 16px;
  &:nth-child(1) {
    flex: 0.4;
    font-weight: bold;
    margin-top: 0px;
  }
  &:nth-child(2) {
    flex: 0.3;
    justify-content: space-between;
    @media screen and (max-width: 992px) {
      flex: 0.4;
    }
  }
  &:nth-child(3) {
    flex: 0.3;
    justify-content: center;

    @media screen and (max-width: 992px) {
      flex: 0.2;
    }
  }
`;

const Logo = styled.img`
  max-height: 48px;
`;

const HeaderLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: lowercase;

  &::nth-child(1) {
    border-bottom: 5px solid blue;
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <Thirds>
        <Logo src={arielogo} />
      </Thirds>
      <Thirds>
        <HeaderLink>Products </HeaderLink>
        <HeaderLink>Story </HeaderLink>
        <HeaderLink>Manufacturing </HeaderLink>
        <HeaderLink>Packaging </HeaderLink>
      </Thirds>
      <Thirds>third third</Thirds>
    </Wrapper>
  );
};
