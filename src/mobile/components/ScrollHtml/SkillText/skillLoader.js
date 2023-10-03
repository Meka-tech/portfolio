import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ProgressBar } from "../../progressBar";
import { LargeScreen, fourK, tab } from "../../../../deviceStyle";

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
  height: 120px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  width: 100%;
  border-top: 1px solid white;
  transition: all ease 0.2s;
  box-sizing: border-box;
  padding: 10px 15px;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(100vw)"};

  :hover {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
  }
  ${tab({
    height: "120px",
    marginBottom: "10px",
    padding: "10px 40px"
  })}
  ${LargeScreen({
    height: "140px",
    marginBottom: "30px",
    padding: "10px 50px"
  })}
`;
const TopPart = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: fill;
  border-radius: 8px;
  ${LargeScreen({
    height: "50px",
    width: "50px"
  })}
  ${tab({
    height: "40px",
    width: "40px"
  })}
`;
const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 20px;
  margin-left: 15px;
  ${tab({
    marginLeft: "10px",
    fontSize: "20px"
  })}
  ${LargeScreen({
    marginLeft: "10px",
    fontSize: "24px"
  })}
`;
