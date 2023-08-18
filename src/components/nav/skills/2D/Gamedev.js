import React from "react";
import styled from "styled-components";
import game from "../../../../lottie/game_devIcon.json";
import Lottie from "lottie-react";
import { Loader } from "../../../loader";

const LottieIcon = () => {
  return (
    <LogoDiv>
      <Lottie animationData={game} loop={true} />
    </LogoDiv>
  );
};

export const Gamedev = () => {
  return (
    <Container>
      <Body>
        <Loader lable={"Unity"} percent={80} />
        <Loader lable={"C#"} percent={50} />
        <Loader lable={"Blender"} percent={65} />
        <Loader lable={"Photoshop"} percent={90} />
      </Body>
      <LottieIcon />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgb(217, 30, 24);
  background-color: rgba(217, 30, 24, 0.1);
  overflow: none;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 2vw 4vw;
`;
const LogoDiv = styled.div`
  width: 15vw;
  position: absolute;
  bottom: 0.5vw;
  right: 0.5vw;
`;
