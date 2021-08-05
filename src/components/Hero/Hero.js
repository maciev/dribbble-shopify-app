import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.section`
  margin-left: 3%;
  margin-right: 3%;
  height: 48rem;
  background-color: blue;
`;

//const Image = styled.image`
//  size: 5rem;
//  background-color: green;
//`;

const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: flex-row;
  flex: 50% 50%;

  color: ${(props) => props.color};
`;

//const RightSide = styled.section``;

export const Hero = () => {
  return (
    <Wrapper color="red">
      hello
      <FlexRow>
        <div>hello 1</div>
        <div>hello 2</div>
      </FlexRow>
    </Wrapper>
  );
};
