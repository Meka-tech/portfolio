import { Html, useScroll } from "@react-three/drei";
import React, { useState } from "react";
import styled from "styled-components";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useRef } from "react";

export const NavigationHologram = () => {
  const scrollData = useScroll();
  const htmlRef = useRef();
  const { gl } = useThree();
  const [HandFocused, setHandFocused] = useState(false);

  useFrame(() => {
    // console.log(scrollData.offset);
    if (scrollData.offset > 0.11 && scrollData.offset < 0.13) {
      setHandFocused(true);
    } else {
      setHandFocused(false);
    }
  });
  return (
    <group rotation={[0, 1.3, 0]} position={[-1, 1.5, 0]}>
      <Html
        position={[0, 0, 0]}
        transform
        scale={[1, 1, 1]}
        portal={{ current: scrollData.fixed }}
      >
        <Container focused={HandFocused.toString()}>
          {" "}
          <Header>Explore</Header>
          <Body>
            <Item
              onClick={() => {
                scrollData.scroll.current = 0.165;
              }}
            >
              <h3>Profile</h3>
            </Item>
          </Body>
        </Container>
      </Html>
      <mesh>
        <boxGeometry args={[2.2, 2, 0.01]} />
        <meshBasicMaterial transparent opacity={0} color="blue" />
      </mesh>
    </group>
  );
};

const Container = styled.div`
  z-index: 1000;
  width: 15rem;
  height: 15rem;
  background-color: rgba(51, 181, 229, 0.4);
  box-sizing: border-box;
  padding: 10px;
  transform-origin: bottom;
  transform: ${(props) =>
    props.focused === "true" ? "scaleY(1)" : "scaleY(0)"};
  transition: 0.2s ease;
  border-radius: 8px;
  font-family: "HK Grotesk", sans-serif;
  box-shadow: 0 0 60px 30px rgba(51, 181, 229, 0.2);
  background-image: url("https://www.freeiconspng.com/thumbs/grid-png/white-grid-png--21.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Header = styled.h2`
  color: white;
  font-size: 16px;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 8px;
`;

const Item = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 2px 5px;
  border: 1px solid white;
  margin-top: 5px;
  h3 {
    font-size: 12px;
    text-align: left;
    font-weight: 500;
    padding: 0;
    margin: 0;
  }
`;
