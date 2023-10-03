import React, { useRef } from "react";
import styled from "styled-components";
import { ScrollLottie } from "./lottie";
import { PageContainer } from "../ScrollStyles";
import { tab } from "../../../../deviceStyle";

export const WelcomeComponent = ({ opacity }) => {
  return (
    <Container opacity={opacity}>
      <ScrollLottie />
      <Text>Scroll to Explore.</Text>
    </Container>
  );
};

const Container = styled(PageContainer)`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: white;
  color: black;
  padding: 2rem 3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h2`
  text-align: center;
  font-size: 45px;
  font-weight: 800;
  ${tab({
    width: "20%",
    fontSize: "60px"
  })}
`;
