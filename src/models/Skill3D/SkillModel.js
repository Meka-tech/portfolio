import React, { useState } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import rollbox from "../../fonts/Rollbox Black_Regular.json";
import helvetica from "../../fonts/Helvetica Compressed_Regular.json";
import { Float, Html } from "@react-three/drei";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { MarginOne, MarginThree, MarginTwo } from "./Margin";
import { gsap } from "gsap";
import styled from "styled-components";
import { GameDevLottie, ProjectorLottie, WebDevLottie } from "./skillLottie";
import { GameDevText, SkillHeader, WebDevText } from "./3DTexts";
import { useEffect } from "react";

extend({ TextGeometry });
export const SkillModel = ({ onClickOut, faceSkills, setSkillsInView }) => {
  const font = new FontLoader().parse(rollbox);
  const HeaderTextOptions = {
    font,
    size: 0.1,
    height: 0.01
  };
  const navTextOptions = {
    font,
    size: 0.07,
    height: 0.01
  };

  const ref = useRef();
  useClickOutside(ref, onClickOut);
  const [project, setProject] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (faceSkills) {
      gsap.to(ref.current.rotation, {
        y: -29.1,
        duration: 2.5
      });
      if (ref.current.rotation.y <= -29) {
        setSkillsInView(true);
      }
    }
    if (!faceSkills) {
      gsap.to(ref.current.rotation, {
        y: -28.5,
        duration: 2.5
      });
      if (ref.current.rotation.y >= -29) {
        setSkillsInView(false);
        setProject(false);
      }
    }
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);
  return (
    <group
      ref={ref}
      dispose={null}
      position={[-4, 0, 5]}
      rotation={[0, -28, 0]}
    >
      {faceSkills && (
        <Float
          speed={3}
          rotationIntensity={0}
          floatIntensity={2}
          floatingRange={[0, 0.05]}
        >
          <SkillHeader textOptions={HeaderTextOptions} />
          <GameDevText
            textOptions={navTextOptions}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          />
          <WebDevText
            textOptions={navTextOptions}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          />
          <MarginOne faceSkills={faceSkills} />
          <Html
            position={[0, 0, 0]}
            rotation-x={0}
            transform
            scale={0.1}
            zIndexRange={[56777271, 0]}
          >
            <Container>
              <GameDevLottie onClick={() => setProject(!project)} />
              <WebDevLottie onClick={() => setProject(!project)} />
            </Container>
          </Html>

          <MarginThree faceSkills={faceSkills} />
          <MarginTwo faceSkills={faceSkills} />

          <Html position={[1.1, 0.8, 0]}>
            <SelectedSkillsContainer>
              <ProjectorLottie showProjection={project} />
            </SelectedSkillsContainer>
          </Html>

          <mesh>
            <boxGeometry args={[1.5, 1.3, 0.01]} />
            <meshBasicMaterial transparent opacity={0} color="white" />
          </mesh>
        </Float>
      )}
    </group>
  );
};

const Container = styled.div`
  height: 40vw;
  width: 40vw;
  z-index: 1000;
`;
const SelectedSkillsContainer = styled.div`
  height: 20vw;
  width: 25vw;
`;
