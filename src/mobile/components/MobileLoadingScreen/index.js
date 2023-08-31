import { useProgress } from "@react-three/drei";
import React from "react";
import styled from "styled-components";

export const MobileLoadingScreen = () => {
  const { progress } = useProgress();

  console.log(progress);
  return <Container></Container>;
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
`;
