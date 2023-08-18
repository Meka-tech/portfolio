import Lottie from "lottie-react";
import styled from "styled-components";
import grid_lottie from "../../../lottie/grid_lottie.json";

export const SpinningGrid = () => {
  return (
    <Container>
      <Lottie animationData={grid_lottie} loop={true} />
    </Container>
  );
};

const Container = styled.div`
  width: 10vw;
  position: absolute;
  bottom: -25vw;
  left: 2vw;
`;
