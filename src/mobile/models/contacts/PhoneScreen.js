import { Html, useScroll } from "@react-three/drei";
import React, { useState } from "react";
import styled from "styled-components";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useRef } from "react";
import { ContactHtml } from "./contactHtml";
// import { ScreenHtml } from "./ProjectHtml/ScreenHtml";

export const PhoneScreen = () => {
  const { gl } = useThree();
  const scroll = useScroll();
  const groupRef = useRef();
  // const [screenFocused, setScreenFocused] = useState(true);

  // current: gl.domElement.parentNode
  // current: scroll.fixed

  return (
    <group ref={groupRef} rotation={[-1.575, 0, 0]} position={[0, 0, -0.16]}>
      <mesh>
        <boxGeometry args={[0.15, 0.28, 0.001]} />
        <meshBasicMaterial transparent opacity={0} color="white" />
        <Html
          transform
          portal={{ current: gl.domElement.parentNode }}
          scale={0.01}
        >
          <Container>
            <ContactHtml />
          </Container>
        </Html>
      </mesh>
    </group>
  );
};

const Container = styled.div`
  z-index: 20000;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  transition: 0.1s ease;
  height: 550px;
  width: 280px;
  transform: scale(2);
  border-radius: 10px;
  position: relative;
`;
