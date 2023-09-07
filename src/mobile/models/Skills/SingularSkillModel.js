import { Html, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { SkillLoader } from "../../components/ScrollHtml/SkillText/skillLoader";
import styled from "styled-components";
import { ProgressBar } from "react-loader-spinner";

export const SingularSkillModel = ({
  position,
  offsetEnter,
  offsetLeave,
  rotation,
  leftSide,
  logo,
  name,
  percent
}) => {
  const { gl } = useThree();
  const scroll = useScroll();
  const groupRef = useRef();
  const tl = useRef();
  const PosX = position[0];
  const PosY = position[1];
  const PosZ = position[2];
  const RotX = rotation[0];
  const RotY = rotation[1];
  const RotZ = rotation[2];

  //   useFrame(() => {
  //     // console.log(scroll.offset);
  //     tl.current.seek(scroll.offset);
  //   });

  //   useLayoutEffect(() => {
  //     tl.current = gsap.timeline();

  //     if (!leftSide) {
  //       tl.current.from(
  //         groupRef.current.position,
  //         {
  //           duration: 0.04,
  //           y: PosY - 15
  //         },
  //         offsetEnter
  //       );
  //     } else {
  //       tl.current.from(
  //         groupRef.current.position,
  //         {
  //           duration: 0.04,
  //           y: PosY + 15
  //         },
  //         offsetEnter
  //       );
  //     }
  //   }, []);
  return (
    //position x is depth , z is up and down , y is left and right
    // position={[-5, -13, 2]} rotation={[1.5, 1.6, 0]}
    <group position={position} rotation={rotation} ref={groupRef}>
      <Html
        position={[0, 0, 0]}
        transform
        scale={[1, 1, 1]}
        portal={{ current: scroll.fixed }}
      >
        <Container>
          {/* <TopPart>
              <Icon src={logo} alt={name} />
              <Title>{name}</Title>
            </TopPart>
            <ProgressBar
              percent={percent}
              offsetEnter={offsetEnter}
              offsetLeave={offsetLeave}
            /> */}
        </Container>
      </Html>
      <mesh>
        <boxGeometry args={[3, 1.5, 0.1]} />
        <meshBasicMaterial transparent opacity={0.3} color="red" />
      </mesh>
    </group>
  );
};

const Container = styled.div`
  z-index: 1000;
  margin-bottom: 1vh;
  width: 10rem;
  height: 10rem;
  background-color: blue;
  /* background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  border-top: 1px solid white;
  transition: all ease 0.2s;
  box-sizing: border-box;
  padding: 1vh 3vw;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(100vw)"};
  background-color: blue;
  :hover {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
  } */
`;
const TopPart = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
`;
const Icon = styled.img`
  width: 10vw;
  height: 10vw;
  object-fit: fill;
  border-radius: 8px;
`;
const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: white;
  font-size: 20px;
  margin-left: 3vw;
`;
