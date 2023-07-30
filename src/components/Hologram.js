import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import useClickOutside from "../hooks/useClickOutside";
import Fade from "react-reveal/Fade";
import BG from "../images/background.jpg";

export const Hologram = ({ onClickOut, child }) => {
  const ref = useRef();
  useClickOutside(ref, onClickOut);

  return (
    <Body ref={ref}>
      <Fade effect="fadeInDown">
        <Container>
          <Image img={BG} />
          <TextDiv>{child}</TextDiv>
        </Container>
        <Triangle />
      </Fade>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 999;
  background-color: transparent;
`;

const Container = styled.div`
  background-color: rgba(30, 144, 255, 0.1);
  box-sizing: border-box;
  width: 45vw;
  height: 18vw;
  transform: rotate3d(0.5, -0.866, 0, 15deg) rotate(1deg);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  backdrop-filter: blur(5.1px);
  overflow: hidden;

  :hover {
    transform: rotate3d(0, 0, 0, 0deg) rotate(0deg) perspective(75em);
    border-bottom: none;
    background-color: rgba(30, 144, 255, 0.15);
    -webkit-box-shadow: 0px 0px 146px 24px rgba(46, 206, 255, 0.12);
    -moz-box-shadow: 0px 0px 146px 24px rgba(46, 206, 255, 0.12);
    box-shadow: 0px 0px 146px 24px rgba(46, 206, 255, 0.12);
  }
  padding: 4vh;
`;
const Image = styled.div`
  width: 45vw;
  height: 18vw;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) => props.img});
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.15;
`;
const TextDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(30, 144, 255, 0);
  border-radius: 10px;
  color: rgba(30, 144, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Triangle = styled.div`
  width: 45vw;
  height: 12vh;
  background-image: linear-gradient(
      to bottom right,
      transparent 50%,
      rgba(30, 144, 255, 0.1) 0
    ),
    linear-gradient(to top right, rgba(30, 144, 255, 0.1) 50%, transparent 0);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-position: left, right;
  z-index: 999;
  transform: rotateX(180deg) rotate3d(0.5, -0.866, 0, 15deg) rotate(1deg);
  margin-top: -0.4vh;
  filter: blur(1px);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  opacity: 0.8;
`;
