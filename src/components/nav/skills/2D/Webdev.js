import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import web from "../../../../lottie/web_devIcon.json";
import { Loader } from "../../../loader";

const LottieIcon = () => {
  return (
    <LogoDiv>
      <Lottie animationData={web} loop={true} />
    </LogoDiv>
  );
};
export const Webdev = () => {
  return (
    <Container>
      <Body>
        <Loader lable={"Javascript"} percent={85} variant />
        <Loader lable={"TypeScript"} percent={80} variant />
        <Loader lable={"React"} percent={90} variant />
        <Loader lable={"React Native"} percent={70} variant />
        <Loader lable={"Next js"} percent={60} variant />
      </Body>
      <LottieIcon />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgb(45, 85, 255);
  background-color: rgba(45, 85, 255, 0.01);
  position: relative;
`;
const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vw 4vw;
`;
const LogoDiv = styled.div`
  width: 15vw;
  position: absolute;
  bottom: 0;
  right: 0;
`;
