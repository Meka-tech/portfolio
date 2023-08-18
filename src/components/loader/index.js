import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import loading from "../../lottie/loader_red.json";
import { Puff } from "react-loader-spinner";

export const Loader = ({ lable, variant = false, percent }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number < percent) {
      const interval = setInterval(() => {
        setNumber((prevNumber) => prevNumber + 1);
      }, 1);

      return () => clearInterval(interval);
    }
  }, [number, percent]);

  const LottieIcon = () => {
    return (
      <LottieDiv>
        <Lottie animationData={loading} loop={true} />
      </LottieDiv>
    );
  };

  return (
    <Container>
      <Circle done={number >= percent} variant={variant}>
        <Puff
          height="100"
          width="100"
          radius={1}
          color="white"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={number < percent}
        />
        <PercentText done={number >= percent} variant={variant}>
          {number}%
        </PercentText>
      </Circle>
      <Body>
        <LableText variant={variant}>{lable}</LableText>
        <LoadBox variant={variant}>
          <Load number={number} />
        </LoadBox>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  height: 6vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5vw;
  transition: all ease 0.2s;
  cursor: pointer;
  :hover {
    transform: perspective(1000px) translateZ(5vw);
  }
`;

const Circle = styled.div`
  height: 6vw;
  width: 6vw;
  background-color: ${(props) =>
    props.done && props.variant
      ? "rgba(45, 85, 255,0.1)"
      : props.done && !props.variant
      ? "rgba(217, 30, 24,0.1)"
      : ""};
  border-radius: 50%;
  border: ${(props) => (props.done ? "5px solid gray" : "")};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.2s;
  margin-right: 1vw;
`;
const Body = styled.div`
  width: 100%;
  /* background-color: red; */
  height: 100%;
`;
const PercentText = styled.h2`
  padding: 0;
  margin: 0;
  font-size: ${(props) => (props.done ? "2vw" : "1.8vw")};
  font-weight: 800;
  color: ${(props) =>
    props.done
      ? "white"
      : props.variant
      ? "rgb(45, 85, 255)"
      : "rgb(217, 30, 24)"};
  position: absolute;
  transition: all ease 0.2s;
  transform: ${(props) =>
    props.done ? "perspective(500px) translateZ(10vw)" : ""};
`;
const LableText = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 2vw;
  color: white;
`;
const LoadBox = styled.div`
  height: 30%;
  width: 100%;
  border: ${(props) =>
    props.variant
      ? "1px solid rgb(45, 85, 255)"
      : "1px solid rgb(217, 30, 24)"};
  display: flex;
  align-items: center;
  position: relative;
`;
const Load = styled.div`
  height: 80%;
  background-color: white;
  transition: all ease 0.01s;
  width: ${(props) => `${props.number}%`};
`;
const LottieDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 5vw;
`;
