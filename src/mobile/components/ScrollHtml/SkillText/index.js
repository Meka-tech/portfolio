import React from "react";
import styled from "styled-components";
import { PageContainer } from "../ScrollStyles";
import { useScroll } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { SkillLoader } from "./skillLoader";
import JSLogo from "../../../../images/skillImages/Javascript.png";
import TSLogo from "../../../../images/skillImages/typescript.png";
import ReactIcon from "../../../../images/skillImages/react.png";
import ReactNativeIcon from "../../../../images/skillImages/reactNative.png";
import NextIcon from "../../../../images/skillImages/Next.png";
import CIcon from "../../../../images/skillImages/C-sharp.png";
import UnityIcon from "../../../../images/skillImages/unity.png";
import BlenderIcon from "../../../../images/skillImages/blender.png";
import PhotoshopIcon from "../../../../images/skillImages/photoshop.png";

export const SkillText = ({ opacity }) => {
  const scroll = useScroll();
  const offset = 0.56;
  const [showSkills, setShowSkills] = useState(false);
  const [introOpacity, setIntoOpacity] = useState(1);

  useFrame(() => {
    // console.log(scroll.offset);

    // console.log(scroll.range(4 / 10, 1 / 10));
    setIntoOpacity(scroll.range(4 / 10, 1 / 10));
    if (scroll.offset > offset) {
      setShowSkills(true);
    } else {
      setShowSkills(false);
    }
  });

  return (
    <Container opacity={opacity}>
      <Intro opacity={introOpacity}>
        <h2>So what can I do ?</h2>
      </Intro>
      <Development view={showSkills.toString()}>
        <SkillLoader
          variant={true}
          logo={JSLogo}
          offsetEnter={0.58}
          offsetLeave={0.64}
          name={"Javascript"}
          percent={85}
        />
        <SkillLoader
          logo={TSLogo}
          offsetEnter={0.595}
          offsetLeave={0.66}
          name={"Typescript"}
          percent={80}
        />
        <SkillLoader
          logo={ReactIcon}
          offsetEnter={0.61}
          offsetLeave={0.68}
          name={"React js/ts"}
          percent={90}
        />
        <SkillLoader
          logo={ReactNativeIcon}
          offsetEnter={0.627}
          offsetLeave={0.7}
          name={"React Native"}
          percent={70}
        />
        <SkillLoader
          variant={true}
          logo={NextIcon}
          offsetEnter={0.645}
          offsetLeave={0.72}
          name={"Next js"}
          percent={60}
        />
        <SkillLoader
          logo={CIcon}
          offsetEnter={0.662}
          offsetLeave={0.74}
          name={"C-Sharp"}
          percent={50}
        />
        <SkillLoader
          logo={UnityIcon}
          offsetEnter={0.681}
          offsetLeave={0.76}
          name={"Unity"}
          percent={60}
        />
        <SkillLoader
          logo={BlenderIcon}
          offsetEnter={0.7}
          offsetLeave={0.78}
          name={"Blender"}
          percent={65}
        />
        <SkillLoader
          variant={true}
          logo={PhotoshopIcon}
          offsetEnter={0.718}
          offsetLeave={0.8}
          name={"Photoshop"}
          percent={90}
        />
      </Development>
    </Container>
  );
};

const Container = styled(PageContainer)`
  position: relative;
  height: 300vh;
  color: black;
  /* background-color: red;
  opacity: 0.3; */
  padding: 1vh;
`;
const Intro = styled.div`
  color: black;
  margin-top: 25vh;
  opacity: ${(props) => props.opacity};
  margin-left: 5vw;
  h2 {
    font-size: 24px;
  }
`;
const Development = styled.div`
  margin: 0 auto;
  margin-top: 120vh;
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
  height: fit-content;
  padding: 1vh 2vw;
  transition: all ease 0.2s;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(100vw)"};
`;
