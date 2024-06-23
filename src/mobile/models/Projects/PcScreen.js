import { Html, useScroll } from "@react-three/drei";
import React, { useState } from "react";
import styled from "styled-components";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useRef } from "react";
import { ScreenHtml } from "./ProjectHtml/ScreenHtml";
import { tab } from "../../../deviceStyle";
import { ContactHtml } from "../contacts/contactHtml";

export const PCScreen = ({ PCSliderPos }) => {
  const { gl } = useThree();
  const scroll = useScroll();
  const groupRef = useRef();
  const [screenFocused, setScreenFocused] = useState(true);

  // current: gl.domElement.parentNode
  // current: scroll.fixed
  useFrame(() => {
    // console.log(scroll.offset);
    if (scroll.offset > 0.82) {
      setScreenFocused(true);
    } else {
      setScreenFocused(false);
    }
  });

  return (
    <group
      ref={groupRef}
      rotation={[0, 0, 0.155]}
      position={[-3.05, 3.1, 2.71]}
      focus={screenFocused}
    >
      <mesh rotation={[0, 1.6, 0]}>
        <boxGeometry args={[4.2, 2.3, 0.01]} />
        <meshBasicMaterial transparent opacity={0.1} color="white" />
        <Html
          transform
          portal={{ current: gl.domElement.parentNode }}
          scale={0.5}
        >
          <Container focused={screenFocused.toString()}>
            <ScreenHtml Pos={PCSliderPos} />
          </Container>
        </Html>
      </mesh>
    </group>
  );
};

const Container = styled.div`
  z-index: 1000;
  background-color: black;
  width: 330px;
  height: 185px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px 15px;
  transform: ${(props) =>
    props.focused === "true" ? "scaleX(2) scalxY(2)" : "scaleX(0)"};
  transition: 0.1s ease;
  ${tab({
    overflow: "auto"
  })}
`;
