import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arielogo from "../../assets/arielogo.png";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "@material-ui/core";
import { render } from "@testing-library/react";

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

  &:nth-child(1) {
    border-bottom: 5px solid blue;
  }
`;

const burgerMenu = styled.ul`
  overflow-y: scroll;
  list-style: none;
  top: 0;
  background: darkcyan;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 0;
  overflow: hidden;
  max-width: 290px;
  z-index: 9;

  & .showMenu {
    color: red;
    width: 100%;
    background-color: red;
  }
`;

export const Header = () => {
  const handleToggle = () => {
    setBurgerOpen((prev) => !prev);
  };
  // implement burger state inspiration from https://ibaslogic.com/how-to-add-hamburger-menu-in-react/
  const [burgerOpen, setBurgerOpen] = useState(false);
  //inspiration from levelup.gitconnected.com/using-breakpoints-and-media-queries-in-material-ui-47470d3c43d9
  const showBurger = useMediaQuery("(max-width:720px)");
  return (
    <Wrapper>
      <Thirds>
        <Logo src={arielogo} />
      </Thirds>
      <Thirds>
        {showBurger && (
          <burgerMenu className={`burgerMenu ${burgerOpen ? "showMenu" : ""}`}>
            {burgerOpen && (
              <div>
                <HeaderLink>Products </HeaderLink>
                <HeaderLink>Story </HeaderLink>
                <HeaderLink>Manufacturing </HeaderLink>
                <HeaderLink>Packaging </HeaderLink>
              </div>
            )}

            <button onClick={handleToggle}>
              {burgerOpen ? "Close" : "Open"}
            </button>
          </burgerMenu>
        )}
        {!showBurger && (
          <div>
            <HeaderLink>Products </HeaderLink>
            <HeaderLink>Story </HeaderLink>
            <HeaderLink>Manufacturing </HeaderLink>
            <HeaderLink>Packaging </HeaderLink>
          </div>
        )}
      </Thirds>
      <Thirds>third third</Thirds>
    </Wrapper>
  );
};