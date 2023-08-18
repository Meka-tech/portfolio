import React from "react";
import styled from "styled-components";
import useClickOutside from "../../../hooks/useClickOutside";
import { useRef } from "react";
import { LocationPin } from "./locationPin";
import { device } from "../../../deviceStyle";
import BG from "../../../images/BioBg.png";
import { Profile } from "./profile";
import { SpinningGrid } from "./SpinningGrid";
import { BioLoader } from "./BioLoader";

export const Bio = ({ onClickOut }) => {
  const ref = useRef();
  useClickOutside(ref, onClickOut);
  return (
    <Container ref={ref}>
      <Image img={BG} />
      <Body>
        <SpinningGrid />
        <Glow />
        <Profile />
        <LocationPin />
        <BioLoader />
      </Body>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(20, 90, 74, 0.005);
  color: rgba(255, 255, 255, 0.2);
  z-index: 1000;
  width: 40vw;
  height: 40vw;
  position: absolute;
  font-family: "Space Mono", sans-serif;
`;

const Body = styled.div`
  position: relative;
`;
const Image = styled.div`
  width: 40vw;
  height: 40vw;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) => props.img});
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.3;
  transition: all ease 0.1s;
  :hover {
    opacity: 1;
  }
`;

const Glow = styled.div`
  position: absolute;
  width: 15vw;
  height: 15vw;
  background-color: red;
  border-radius: 50%;
  top: 12.5vw;
  left: 11.8vw;
  background-color: rgba(20, 90, 74, 0.25);
  box-shadow: 0 0 60px 30px rgba(20, 90, 74, 0.12),
    0 0 100px 60px rgba(20, 90, 74, 0.12), 0 0 140px 90px rgba(20, 90, 74, 0.12);
  opacity: 0.5;
`;
