import React from "react";
import styled from "styled-components";
import useClickOutside from "../../../hooks/useClickOutside";
import { useRef } from "react";
import { LocationPin } from "./locationPin";
import { device } from "../../../deviceStyle";

export const Bio = ({ onClickOut }) => {
  const ref = useRef();
  useClickOutside(ref, onClickOut);
  return (
    <Container ref={ref}>
      <Body>
        <LocationPin />
      </Body>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(20, 90, 74, 0.005);
  color: rgba(255, 255, 255, 0.2);
  z-index: 1000;
  width: 50rem;
  height: 30rem;
  border-radius: 100rem 100rem 0 0;
  transform: rotate(320deg);
  position: absolute;
  top: 10%;
  margin-left: -8%;
  :hover {
    border-top: 2px solid rgba(20, 90, 74, 0.5);
    border-bottom: none;
    /* -webkit-box-shadow: 0px 0px 146px 24px rgba(20, 90, 74, 0.1);
    -moz-box-shadow: 0px 0px 146px 24px rgba(20, 90, 74, 0.1);
    box-shadow: 0px 0px 146px 24px rgba(20, 90, 74, 0.1);
    background-color: rgba(20, 90, 74, 0.1); */
  }
  @media (min-width: 1600px) {
    width: 65rem;
    height: 50rem;
  }
`;

const Body = styled.div`
  position: relative;
  transform: rotate(-320deg);
`;
