import React, { forwardRef } from "react";
import styled from "styled-components";
import { PageContainer } from "../ScrollStyles";
import { useScroll } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { SmallMobile, Smallmobile, tab } from "../../../../deviceStyle";

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
    if (scroll.offset > 0.3) {
      setThirdTextInView(true);
    } else {
      setThirdTextInView(false);
    }
    if (scroll.offset > 0.4) {
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
          for crafting immersive experiences in both traditional and Web3
          realms. With my imagination, a flare for creation and coding, I embark
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
          explore innovation. Movies, books and anime are my windows to
          inspiration, enriching my creativity.
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

  /* background-color: red;
  opacity: 0.3; */

  /* height: 1648px; */

  padding: 10px;

  ${tab({
    padding: "0 150px"
  })}
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
  ${tab({
    width: "60%",
    marginTop: "10px"
  })}

  h2 {
    font-weight: 500;
    text-align: left;
    font-size: 2.5vh;
    ${tab({
      fontSize: "30px"
    })}
  }
`;
const SecondText = styled.div`
  width: 80%;
  margin-left: auto;
  margin-top: 4.5vh;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 10px;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(150%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};

  transition: all 0.1s ease-in-out;
  ${tab({
    width: "60%"
  })}
  h2 {
    font-weight: 500;
    text-align: right;
    font-size: 2.5vh;
    ${tab({
      fontSize: "30px"
    })}
  }
`;

const ThirdText = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 1vh;
  background-color: rgba(255, 255, 255, 0.01);
  padding: 10px;
  transform: ${(props) =>
    props.view === "true" ? "translateY(0)" : "translateY(50%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};

  transition: all 0.1s ease-in-out;
  ${tab({
    width: "80%"
  })}
  h2 {
    font-weight: 500;
    text-align: justify;
    font-size: 2.5vh;
    ${tab({
      fontSize: "30px"
    })}
  }
`;
const FourthText = styled.div`
  position: absolute;
  width: 90%;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 10vh;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(-150%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};

  transition: all 0.2s ease-in-out;
  ${tab({
    width: "50%"
  })}
  h2 {
    font-weight: 600;
    text-align: center;
    font-size: 2.5vh;

    ${tab({
      fontSize: "30px"
    })}
  }
`;
