import Lottie from "lottie-react";
import styled from "styled-components";
import scroll from "../../../../lottie/scroll.json";

export const ScrollLottie = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Lottie animationData={scroll} loop={true} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: auto;
  width: 100%;
  max-height: 30vh;
`;
