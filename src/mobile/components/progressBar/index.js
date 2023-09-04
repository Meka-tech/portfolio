import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useScroll } from "@react-three/drei";

export const ProgressBar = ({ percent, offsetEnter, offsetLeave }) => {
  const [number, setNumber] = useState(0);

  const scroll = useScroll();
  useEffect(() => {
    if (scroll.offset >= offsetEnter && scroll.offset <= offsetLeave) {
      if (number < percent) {
        const interval = setInterval(() => {
          setNumber((prevNumber) => prevNumber + 1);
        }, 10);

        return () => clearInterval(interval);
      }
    }
    if (scroll.offset > offsetLeave) {
      setNumber(0);
    }
    if (scroll.offset < offsetEnter) {
      setNumber(0);
    }
  }, [number, offsetEnter, offsetLeave, percent, scroll.offset]);
  return (
    <Container>
      <Text>{number}%</Text>
      <Bar>
        <Filler width={number}>
          <FillerEnd>
            <FillerCore />
          </FillerEnd>
        </Filler>
      </Bar>
    </Container>
  );
};

const Container = styled.div`
  color: white;
  margin-top: 0.5vh;
`;

const Text = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 20px;
  text-align: center;
  margin-bottom: 1vh;
  font-weight: 500;
`;
const Bar = styled.div`
  width: 100%;
  height: 0.5vh;
  background-color: black;
  border-radius: 8px;
`;
const Filler = styled.div`
  position: relative;
  height: 100%;
  width: ${(props) => `${props.width}%`};
  background-color: white;
  border-radius: 8px;
  transition: ease all;
`;
const FillerEnd = styled.div`
  position: absolute;
  right: -1.5vh;
  top: -1.2vh;
  border-radius: 50%;
  width: 3vh;
  height: 3vh;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FillerCore = styled.div`
  border-radius: 50%;
  width: 1vh;
  height: 1vh;
  background-color: rgba(255, 255, 255, 1);
`;
