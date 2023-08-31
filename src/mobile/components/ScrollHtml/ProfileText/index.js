import React from "react";
import styled from "styled-components";
import { PageContainer } from "../ScrollStyles";
import { useScroll } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";

export const ProfileText = ({ opacity }) => {
  const scroll = useScroll();
  const [firstTextInView, setFirstTextInView] = useState(false);
  const [SecondTextInView, setSecondTextInView] = useState(false);
  const [ThirdTextInView, setThirdTextInView] = useState(false);
  const [FourthTextInView, setFourthTextInView] = useState(false);

  useFrame(() => {
    // console.log(scroll.offset);
    if (scroll.offset > 0.245) {
      setFirstTextInView(true);
    } else {
      setFirstTextInView(false);
    }
    if (scroll.offset > 0.279) {
      setSecondTextInView(true);
    } else {
      setSecondTextInView(false);
    }
    if (scroll.offset > 0.335) {
      setThirdTextInView(true);
    } else {
      setThirdTextInView(false);
    }
    if (scroll.offset > 0.42) {
      setFourthTextInView(true);
    } else {
      setFourthTextInView(false);
    }
  });
  return (
    <Container opacity={opacity}>
      <FirstText view={firstTextInView.toString()}>
        <h2>
          I am Onyeji Nnaemeka, a passionate software developer with a vision
          for crafting immersive experiences. With a degree in Electronic and
          Computer Engineering from the University of Nigeria, Nsukka, I embark
          on a journey to bring code to life.
        </h2>
      </FirstText>
      <SecondText view={SecondTextInView.toString()}>
        <h2>
          From the interplay of logic and creativity, I forge the digital
          landscapes of websites, the functionality of apps, and the captivating
          realms of games. A harmonious blend of technical prowess and boundless
          imagination defines my approach.
        </h2>
      </SecondText>
      <ThirdText view={ThirdTextInView.toString()}>
        <h2>
          Beyond the lines of code, you'll find me immersed in virtual worlds
          and narratives. Gaming is more than just a hobby; it's an avenue to
          explore innovation. Movies and anime are my windows to inspiration,
          enriching my creativity.
        </h2>
      </ThirdText>
      <FourthText view={FourthTextInView.toString()}>
        <h2>
          Join me as we venture through the realms of coding, creation, and
          endless exploration. Let's turn ideas into reality, one pixel at a
          time.
        </h2>
      </FourthText>
    </Container>
  );
};

const Container = styled(PageContainer)`
  position: relative;
  height: 200vh;
  color: black;

  /* background-color: red; */
  /* opacity: 0.3; */
  padding: 1vh;
`;

const FirstText = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 1vh;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 10px;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(-150%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};

  transition: all 0.1s ease-in-out;
  h2 {
    text-align: left;
    font-size: 2.5vh;
  }
`;
const SecondText = styled.div`
  width: 80%;
  margin-left: auto;
  margin-top: 5vh;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 10px;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(150%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};

  transition: all 0.1s ease-in-out;
  h2 {
    text-align: right;
    font-size: 2.5vh;
  }
`;

const ThirdText = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 10vh;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 10px;
  transform: ${(props) =>
    props.view === "true" ? "translateY(0)" : "translateY(50%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};

  transition: all 0.1s ease-in-out;
  h2 {
    text-align: justify;
    font-size: 2.5vh;
  }
`;
const FourthText = styled.div`
  position: absolute;
  width: 90%;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(-150%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};

  transition: all 0.2s ease-in-out;
  h2 {
    font-weight: 800;
    text-align: center;
    font-size: 2.5vh;
  }
`;
