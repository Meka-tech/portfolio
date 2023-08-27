import React from "react";
import styled from "styled-components";
import { WelcomeMessage } from "./welcomeMessage";
import { ScrollLottie } from "./lottie";

export const WelcomeComponent = () => {
  return (
    <Container>
      <Message>
        <WelcomeMessage />
      </Message>
      <ScrollLottie />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: white;
  color: black;
  padding: 2rem 3rem;
  box-sizing: border-box;
`;

const Message = styled.h2`
  margin-top: 50%;
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
`;
