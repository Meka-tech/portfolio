import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const LocationDisplay = ({ location }) => {
  const [locationName, setLocationName] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (locationName !== location) {
      setLocationName(location);
      setIsTyping(true);
    }
  }, [locationName, location, isTyping]);

  return (
    <Container>
      {isTyping && locationName !== "" && (
        <Typewriter
          autoStart={false}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(100)
              .typeString(locationName)
              .pauseFor(1000)
              .deleteAll()
              .callFunction(() => {
                setIsTyping(false);
              })
              .start();
          }}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  z-index: 2000;
  width: 100%;
  color: black;
  font-size: 3rem;
  box-sizing: border-box;
  padding: 3rem;
  font-weight: 600;
  position: absolute;
  top: 0;
  font-family: "HK Grotesk", sans-serif;
`;
