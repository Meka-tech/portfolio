import React from "react";
import styled from "styled-components";
import { PageContainer } from "../ScrollStyles";

export const NavigationText = ({ opacity, height }) => {
  return (
    <Container opacity={opacity}>
      <Tutorial>
        <h2>Select your destination</h2>
      </Tutorial>
    </Container>
  );
};

const Container = styled(PageContainer)`
  box-sizing: border-box;
  /* height: 1230px; */
  height: 150vh;
  padding-top: 5rem;
  padding-left: 5rem;
`;

const Tutorial = styled.div`
  color: black;
  h2 {
    font-size: 20px;
  }
`;
