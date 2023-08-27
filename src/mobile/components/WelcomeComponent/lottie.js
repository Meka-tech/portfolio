import Lottie from "lottie-react";
import styled from "styled-components";
import scroll from "../../../lottie/scroll.json";

export const ScrollLottie = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Lottie animationData={scroll} loop={true} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;
