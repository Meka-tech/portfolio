import Lottie from "lottie-react";
import styled from "styled-components";
import scroll from "../../../../lottie/scroll.json";
import { useRef } from "react";
import { tab } from "../../../../deviceStyle";

export const ScrollLottie = ({ onClick }) => {
  const ref = useRef();

  return (
    <Container onClick={onClick}>
      <Lottie lottieRef={ref} animationData={scroll} loop={true} />
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  ${tab({
    width: "10%"
  })}
`;
