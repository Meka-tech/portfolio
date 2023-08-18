import React from "react";
import styled from "styled-components";
import Spinner from "../../../lottie/bio_spinner.json";
import Lottie from "lottie-react";

export const BioLoader = () => {
  return (
    <Container>
      {" "}
      <Lottie animationData={Spinner} loop={true} speed={0.1} />
    </Container>
  );
};

const Container = styled.div`
  width: 10vw;
  position: absolute;
  bottom: -25vw;
  left: 14vw;
  zindex: 100;
`;
