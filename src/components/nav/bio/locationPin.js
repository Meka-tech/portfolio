import React from "react";
import styled from "styled-components";

export const LocationPin = () => {
  return (
    <Container>
      <Body>
        <h2>ENUGU, NIGERIA</h2>
      </Body>
      <Pin />
      <Bend />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 2.6vw;
  top: 3.9vw;
  font-family: "AlphaCentauri", sans-serif;
`;

const Body = styled.div`
  padding: 0.2vw 0.4vw;
  background-color: rgba(20, 90, 74, 0.8);
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    transform: scale(1.1);
    background-color: #33e5bc;
  }
  h2 {
    padding: 0;
    margin: 0;
    font-size: 1vw;
    font-weight: 600;
    color: rgba(10, 10, 10, 1);
  }
`;

const Pin = styled.div`
  width: 3px;
  height: 8.5vw;
  background-color: rgba(20, 90, 74, 0.8);
  margin-top: -5%;
`;
const Bend = styled(Pin)`
  height: 1.8vw;
  margin-top: -2%;
  transform: rotate(28deg);
  margin-left: -5.5%;
`;
