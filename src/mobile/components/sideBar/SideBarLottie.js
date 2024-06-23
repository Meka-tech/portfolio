import React from "react";
import styled from "styled-components";
import Point from "../../../lottie/pointUp.json";
import Lottie from "lottie-react";

export const PointLottie = () => {
  return (
    <Container>
      <Lottie animationData={Point} loop={true} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50px;
  right: 10px;
  width: 50px;
  z-index: 10000;
`;
