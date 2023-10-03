import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { tab } from "../../../deviceStyle";

export const PCSlider = ({ show, setPcScroll }) => {
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    setPcScroll(sliderValue);
  }, [sliderValue]);
  return (
    <Container show={show.toString()}>
      <SliderContainer>
        <Slider
          type="range"
          min="1"
          max="200"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.target.value)}
        />
      </SliderContainer>
    </Container>
  );
};

const Container = styled.div`
  z-index: 2000;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.1);
  height: 40px;
  position: absolute;
  bottom: 120px;
  transform: ${(props) =>
    props.show === "true" ? "translateX(0)" : "translateX(-120%)"};
  transition: all ease 0.5s;
  backdrop-filter: blur(5px);
  border-radius: 9px;
  ${tab({
    display: "none"
  })}
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Slider = styled.input`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 80%; /* Full-width */
  height: 8px; /* Specified height */
  background: white; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
  border: 8px;

  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
  }
`;
