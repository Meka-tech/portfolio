import React from "react";
import styled from "styled-components";
import { PageContainer } from "../ScrollStyles";
import { useScroll } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

export const NavigationText = ({ opacity }) => {
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
  height: 150vh;
  padding-top: 5rem;
  padding-left: 5rem;
`;

const Tutorial = styled.div`
  color: black;
  background-color: white;
  h2 {
    font-size: 20px;
  }
`;
