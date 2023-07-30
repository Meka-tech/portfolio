import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import useClickOutside from "../hooks/useClickOutside";
import Fade from "react-reveal/Fade";
import BG from "../images/background.jpg";
import { useHologram, useTransition } from "../Context/context";

export const Hologram = ({ onClickOut, child }) => {
  const ref = useRef();
  useClickOutside(ref, onClickOut);

  const Hologram = useHologram();

  return (
    <Body ref={ref} hologram={Hologram}>
      <Fade effect="fadeInDown">
        <Container>
          <Image img={BG} />
          <TextDiv>{child}</TextDiv>
        </Container>
        <Triangle></Triangle>
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
  transform: ${(props) => (props.hologram ? `scaleX(0.01)` : `scaleX(1)`)};
  transition: all 0.4s;
  border-radius: 15px;
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
  border-radius: 15px;
  transition: all 0.5s ease;

  :hover {
    transform: rotate3d(0, 0, 0, 0deg) rotate(0deg) perspective(75em);
    border-bottom: none;
    background-color: rgba(30, 144, 255, 0.15);
    -webkit-box-shadow: 0px 0px 146px 24px rgba(46, 206, 255, 0.12);
    -moz-box-shadow: 0px 0px 146px 24px rgba(46, 206, 255, 0.12);
    box-shadow: 0px 0px 146px 24px rgba(46, 206, 255, 0.12);
    border-left: 1px solid white;
    border-right: 1px solid white;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
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
  border-radius: 15px;
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
const Holographic = keyframes`
  from {
   will-change: box-shadow;
   box-shadow:
   0 -75px 5px rgba(#00FCFC, .15),
   0 -1px 2px rgba(#00FCFC, .5),
   0 -45px 5px rgba(#00FCFC, .15),
   0 -2px 3px rgba(#00FCFC, .5),
   0 -3px 4px rgba(#00FCFC, .5),
   0 -4px 6px rgba(#00FCFC, .5),
   0 -5px 10px rgba(#00FCFC, .75),
   0 -7px 20px rgba(#00FCFC, .75),
   0 -10px 30px rgba(#00FCFC, .75),
   0 -15px 40px rgba(#00FCFC, .75),
   0 -25px 50px rgba(#00FCFC, .75),
   0 -35px 60px rgba(#00FCFC, .85),
   0 -45px 70px rgba(#00FCFC, .95),
   0 -65px 80px rgba(#00FCFC, 1),
   0 -75px 90px rgba(#00FCFC, 1),
   ;
  } to {
   will-change: unset;
   box-shadow:
   0 -1px 5px rgba(#00FCFC, .15),
   0 -1px 2px rgba(#00FCFC, .5),
   0 -1px 5px rgba(#00FCFC, .15),
   0 -2px 3px rgba(#00FCFC, .5),
   0 -3px 4px rgba(#00FCFC, .5),
   0 -4px 6px rgba(#00FCFC, .5),
   0 -5px 7px rgba(#00FCFC, .75),
   0 -7px 10px rgba(#00FCFC, .75),
   0 -10px 15px rgba(#00FCFC, .75),
   0 -15px 20px rgba(#00FCFC, .75),
   0 -25px 25px rgba(#00FCFC, .75),
   0 -35px 30px rgba(#00FCFC, .85),
   0 -45px 35px rgba(#00FCFC, .95),
   0 -65px 40px rgba(#00FCFC, 1),
   0 -75px 50px rgba(#00FCFC, 1),
   ;
  }
 `;
const Holo = styled.div`
  position: absolute;
  z-index: 2;
  width: 150px;
  height: 50px;
  margin: -5px auto 0;
  background-color: rgba(red, 0.35);
  border-radius: 100%;
  filter: blur(2.5px);
  transform: perspective(100px) rotateX(-30deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  animation-name: ${Holographic};
  animation-duration: 1s;
  animation-iteration-count: infinite alternate;
  background-color: red;

  &:after {
    position: absolute;
    left: -10px;
    right: -10px;
    content: "";
    height: 10px;
    background-color: rgba(#00fcfc, 0.5);
    border-radius: 100%;
    filter: blur(2.5px);
  }

  + .holo {
    animation-duration: 0.75s;
    opacity: 0.5;
  }
`;
