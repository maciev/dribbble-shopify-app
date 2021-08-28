import { Header } from "components/Header";
import React, { useContext, useState } from "react";
import styled from "styled-components";

export const Checkout = () => {
  const [state, setState] = useState([
    { total: 1, product: "Orange Kombucha" },
    { total: 2, product: "Kiwi Kombucha" },
    { total: 3, product: "Strawberry Kombucha" },
    { total: 4, product: "Grapefruit Kombucha" },
    { total: 5, product: "Blackberry Kombucha" },
    { total: 6, product: "Mango Kombucha" },
    { total: 7, product: "Ginger Kombucha" },
  ]);

  // update state from parent component
  const CheckoutContainer = styled.div`
    position: fixed;
    width: 24rem;
    height: 20rem;
    left: 50%;
    background-color: #fafafa;
    transform: translate(-50%);
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    text-align: center;
  `;

  const CheckoutHeader = styled.h1`
    font-size: 1.5rem;
  `;

  const CheckoutRows = styled.div`
    display: flex;
    border-top: 1px solid #ccc;
    flex-direction: row;
    width: 100%;
    height: 2rem;
    align-items: center;

    &:last-child {
      border-bottom: 1px solid #ccc;
    }

    & > div:nth-of-type(1) {
      font-weight: bold;
      font-size: 18px;
      margin-left: 10px;
      margin-right: 48px;
    }

    & > div:nth-of-type(2) {
      font-weight: bold;
      font-size: 18px;
      align-items: center;
      color: red;
      margin-right: 10px;
    }
  `;

  return (
    <div>
      <Header />
      <CheckoutContainer>
        <CheckoutHeader>Checkout</CheckoutHeader>
        {state.length >= 1 && state.length <= 7
          ? state.map(function (index, i) {
              console.log(state);
              return (
                <CheckoutRows key={i}>
                  <div>{state[i].total + "x"}</div>
                  <div>{state[i].product}</div>
                </CheckoutRows>
              );
            })
          : "MAX ITEMS REACHED - Please remove items from cart"}
      </CheckoutContainer>
    </div>
  );
};
