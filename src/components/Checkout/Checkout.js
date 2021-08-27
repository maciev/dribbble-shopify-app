import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Checkout = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState([
      { total: 1, product: "product one" },
      { total: 2, product: "product 2" },
      { total: 3, product: "product 3" },
    ]);
  }, []);

  const CheckoutContainer = styled.div`
    position: fixed;
    width: 24rem;
    height: 20rem;
    background-color: whitesmoke;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;
    text-align: center;
  `;

  const CheckoutHeader = styled.h1`
    font-size: 1.5rem;
  `;

  const CheckoutRows = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    height: 2rem;
    align-items: center;

    & > div:nth-of-type(1) {
      font-weight: bold;
      font-size: 18px;
      margin-left: 10px;
      margin-right: 24px;
    }

    & > div:nth-of-type(2) {
      font-weight: bold;
      font-size: 18px;
      align-items: center;
      color: red;
      margin-right: 10px;
    }
  `;

  console.log(state.length);

  return (
    <div>
      <CheckoutContainer>
        <CheckoutHeader>Checkout</CheckoutHeader>
        {state.length >= 1
          ? state.map(function (i) {
              console.log("test");
              return <CheckoutRows key={i}>Hello123</CheckoutRows>;
            })
          : "hello"}
      </CheckoutContainer>
    </div>
  );
};

//{state.number === 1
//  ? `You have 1 bottle of kombucha`
//  : `You have ${state.number} bottles of kombucha`}
