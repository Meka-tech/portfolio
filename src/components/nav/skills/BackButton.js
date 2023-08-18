import React from "react";
import Lottie from "lottie-react";
import styled from "styled-components";
import back from "../../../lottie/back_button.json";
import { useState } from "react";

export const BackButton = ({ onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <Container
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <Body hover={hover}>
        <Spinner>
          <Lottie animationData={back} loop={true} speed={0.1} />
        </Spinner>
        <Text>Go Back</Text>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  position: absolute;
  top: 0vw;
  left: -4vw;
  cursor: pointer;
  z-index: 500;
  overflow-x: hidden;
  transform: rotateY(50deg);
  font-family: "Rollbox", sans-serif;
`;
const Body = styled.div`
  transform: ${(props) => (props.hover ? `translateX(0)` : `translateX(7vw)`)};
  transition: ease-in-out 0.3s all;
  display: flex;
  align-items: center;
`;
const Spinner = styled.div`
  width: 4vw;
  cursor: pointer;
`;
const Text = styled.h2`
  color: red;
  font-size: 1.3vw;
  margin-left: 1vw;
`;
