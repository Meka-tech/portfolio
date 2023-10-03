import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useScroll } from "@react-three/drei";
import { tab } from "../../../deviceStyle";

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
  ${tab({
    marginTop: "10px"
  })}
`;

const Text = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 20px;
  text-align: center;
  margin-bottom: 8px;
  font-weight: 500;
  ${tab({
    marginBottom: "5px"
  })}
`;
const Bar = styled.div`
  width: 100%;
  height: 5px;
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
  right: -10px;
  top: -10px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FillerCore = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 1);
`;
