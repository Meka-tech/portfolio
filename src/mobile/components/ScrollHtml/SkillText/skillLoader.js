import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ProgressBar } from "../../progressBar";

export const SkillLoader = ({
  name,
  logo,
  percent,
  offsetEnter,
  offsetLeave,
  variant
}) => {
  const scroll = useScroll();

  const [showSkill, setShowSkill] = useState(false);

  useFrame(() => {
    if (scroll.offset > offsetEnter && scroll.offset < offsetLeave) {
      setShowSkill(true);
    } else {
      setShowSkill(false);
    }
  });
  return (
    <Container view={showSkill.toString()}>
      <TopPart>
        <Icon src={logo} alt={name} />
        <Title>{name}</Title>
      </TopPart>
      <ProgressBar
        percent={percent}
        offsetEnter={offsetEnter}
        offsetLeave={offsetLeave}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1vh;
  height: 15vh;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  width: 100%;
  border-top: 1px solid white;
  transition: all ease 0.2s;
  box-sizing: border-box;
  padding: 1vh 3vw;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(100vw)"};

  :hover {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const TopPart = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
`;
const Icon = styled.img`
  width: 10vw;
  height: 10vw;
  object-fit: fill;
  border-radius: 8px;
`;
const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 20px;
  margin-left: 3vw;
`;
