import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import { BackButton } from "./BackButton";

export const Skill2D = ({ onClickOut, skillsInView }) => {
  const [show2D, setShow2D] = useState(false);
  useEffect(() => {
    if (skillsInView) {
      setTimeout(() => setShow2D(true), [1200]);
    } else {
      setShow2D(false);
    }
  }, [skillsInView]);

  return (
    <Container show={show2D.toString()}>
      <Body>
        <BackButton onClick={onClickOut} />
      </Body>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 30vw;
  width: 15vw;
  margin-right: 23vw;
  z-index: 100;
  opacity: ${(props) => (props.show === "true" ? 1 : 0)};
  transition: 0.6s ease all;
  justify-content: space-between;
  align-items: center;
`;

const Body = styled.div`
  width: 18vw;
  height: 20vw;
  transition: 0.6s ease all;
  background-color: rgba(255, 255, 255, 0);
  position: relative;
`;
