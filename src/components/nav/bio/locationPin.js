import React from "react";
import styled from "styled-components";

export const LocationPin = () => {
  return (
    <Container>
      <Body>
        <h2>Enugu , Nigeria</h2>
      </Body>
      <Pin />
      <Bend />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: -20%;
  @media (min-width: 1500px) {
    margin-top: 2rem;
  }
`;

const Body = styled.div`
  padding: 0.5rem;
  background-color: #33e5bc;
  color: white;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.2);
  }
  h2 {
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const Pin = styled.div`
  width: 3px;
  height: 11rem;
  background-color: #33e5bc;
  margin-top: -5%;
`;
const Bend = styled(Pin)`
  height: 2rem;
  margin-top: -2%;
  transform: rotate(30deg);
  margin-left: -5.5%;
`;
