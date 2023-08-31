import React from "react";
import styled from "styled-components";
import { WelcomeMessage } from "./welcomeMessage";
import { ScrollLottie } from "./lottie";
import { PageContainer } from "../ScrollStyles";

export const WelcomeComponent = ({ opacity }) => {
  return (
    <Container opacity={opacity}>
      <Message>
        <WelcomeMessage />
      </Message>
      <ScrollLottie />
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
`;

const Message = styled.h2`
  margin-top: 10%;
  text-align: center;
  font-size: 3vh;
  font-weight: 800;
  height: 50vh;
`;
