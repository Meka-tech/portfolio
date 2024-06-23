import { useProgress } from "@react-three/drei";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { LargeScreen, tab } from "../../../deviceStyle";
import { ExploreLottie, InfinityLottie } from "./lottie";
import Typewriter from "typewriter-effect";

export const MobileLoadingScreen = ({
  setStartExperience,
  startExperience
}) => {
  const { progress } = useProgress();
  const [rollUp, setRollUp] = useState(false);

  const Explore = () => {
    setRollUp(true);
    setTimeout(() => {
      setStartExperience(true);
    }, [1000]);
  };

  return (
    <Container startExperience={rollUp}>
      <Body>
        <Head>
          <Heading>Dive into my</Heading>
          <br />
          <TypeWriterBody>
            {" "}
            <Heading>
              {
                <Typewriter
                  options={{
                    strings: [
                      "Space.",
                      "World.",
                      "Story.",
                      "Reality.",
                      "Domain.",
                      "Realm."
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
              }
            </Heading>
          </TypeWriterBody>
        </Head>
        <Paragraph>
          I am Nnaemeka, a Passionate Software Developer with a relentless drive
          to create captivating and seamless user experiences.
        </Paragraph>
        <LoadingContainer onClick={progress === 100 ? Explore : null}>
          <TextContainer>
            <LoadText> {progress < 100 ? "Loading ..." : "Explore"}</LoadText>
            {progress === 100 ? <ExploreLottie /> : null}
          </TextContainer>
          <LoadFiller progress={progress} />
        </LoadingContainer>
        <Beckon show={progress < 100 ? "true" : "false"}>
          <h3>Please Wait</h3>
          <InfinityLottie />
        </Beckon>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  z-index: 100;
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: white;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  transform: ${(props) =>
    props.startExperience ? "translateY(-100%)" : "translateY(0)"};
  transition: 1s ease all;
  overflow: hidden;
  font-family: "HK Grotesk", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 0 20px;
  ${tab({
    padding: "0 100px"
  })}
`;
const Body = styled.div`
  width: fit-content;
  z-index: 10;
  max-height: fit-content;

  /* background-color: red; */
`;
const Head = styled.div`
  margin-bottom: 40px;
`;
const Heading = styled.h2`
  font-size: 45px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  font-weight: 900;
  display: inline-flex;
  ${tab({
    fontSize: "60px"
  })}
  ${LargeScreen({
    fontSize: "70px"
  })}
`;
const TypeWriterBody = styled.div`
  background-color: white;
  height: auto;
  width: max-content;
  color: black;
`;
const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: right;
  ${LargeScreen({
    fontSize: "30px",
    marginTop: "100px",
    width: "50%",
    marginLeft: "auto"
  })}
  ${tab({
    fontSize: "35px",
    width: "60%",
    marginLeft: "auto"
  })}
`;

const LoadingContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  box-sizing: border-box;
  padding: 0 30px;
  transition: all 0.1s ease;

  :hover {
    transform: scale(1.05);
  }

  ${LargeScreen({
    marginTop: "200px",
    height: "80px"
  })}
  ${tab({
    marginTop: "100px",
    height: "60px",
    width: "50%",
    justifyContent: "left"
  })}
`;
const LoadFiller = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: white;
  width: ${(props) => `${props.progress}%`};
  z-index: 1;
  border-radius: 8px;
  transition: all 0.1s ease-in;
  border-top-right-radius: ${(props) =>
    props.progress === 100 ? "8px" : "0px"};
  border-bottom-right-radius: ${(props) =>
    props.progress === 100 ? "8px" : "0px"};
`;
const TextContainer = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoadText = styled.h3`
  font-size: 25px;
  text-align: center;
  font-weight: 800;
  ${tab({
    fontSize: "30px",
    fontWeight: "900"
  })}
`;
const Beckon = styled.div`
  display: flex;
  align-items: center;
  transform: ${(props) =>
    props.show === "true" ? "translateX(0)" : "translateX(-200%)"};
  transition: all ease 0.2s;
  h3 {
    font-size: 16px;
    text-align: right;
    margin-right: 5px;
    ${tab({
      fontSize: "20px",
      marginRight: "10px"
    })}
  }
`;
