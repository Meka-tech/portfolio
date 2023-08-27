import React, { useState } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import rollbox from "../../fonts/Rollbox Black_Regular.json";
import helvetica from "../../fonts/Helvetica Compressed_Regular.json";
import { Float, Html, OrbitControls, SpotLight } from "@react-three/drei";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { MarginOne, MarginThree, MarginTwo } from "./Margin";
import { gsap } from "gsap";
import styled from "styled-components";
import { GameDevLottie, ProjectorLottie, WebDevLottie } from "./skillLottie";
import { GameDevText, SkillHeader, WebDevText } from "./3DTexts";
import { Gamedev } from "../../components/nav/skills/2D/Gamedev";
import { Webdev } from "../../components/nav/skills/2D/Webdev";

extend({ TextGeometry });
export const SkillModel = ({ onClickOut, faceSkills, setSkillsInView }) => {
  ///text
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

  //hooks
  const ref = useRef();
  const Projectref = useRef();
  const ProjectBodyref = useRef();
  // useClickOutside(ref, onClickOut);
  useClickOutside(ProjectBodyref, () => setProject(""));
  const [project, setProject] = useState("");
  const [spotLightOn, setSpotLightOn] = useState(false);

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

  //individual skill hologram
  const SkiliHoloGram = () => {
    useFrame((state) => {
      if (project !== "") {
        gsap.to(Projectref.current.scale, {
          x: 1,
          duration: 0.8
        });
      }
      if (project === "") {
        gsap.to(Projectref.current.scale, {
          x: 0,
          duration: 0.8
        });
      }
    });
    return (
      <group
        position={[1.6, 0, 1]}
        rotation={[0, 5, 0]}
        ref={Projectref}
        scale={[0, 1, 1]}
      >
        {project !== "" && (
          <Html transform scale={0.1} zIndexRange={[56777271, 0]}>
            <SkillHologramHtml ref={ProjectBodyref}>
              {project === "gamedev" && <Gamedev />}
              {project === "webdev" && <Webdev />}
            </SkillHologramHtml>
          </Html>
        )}
        <group>
          <mesh>
            <boxGeometry args={[2.2, 2, 0.01]} />
            <meshBasicMaterial transparent opacity={0} color="white" />
          </mesh>
        </group>
      </group>
    );
  };

  //main
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
          {/* //3D text// */}
          <SkillHeader textOptions={HeaderTextOptions} />
          <GameDevText textOptions={navTextOptions} />
          <WebDevText textOptions={navTextOptions} />
          {/* //html */}
          <Html
            position={[0, 0, 0]}
            rotation-x={0}
            transform
            scale={0.1}
            zIndexRange={[56777271, 0]}
          >
            <Container>
              <GameDevLottie onClick={() => setProject("gamedev")} />
              <WebDevLottie onClick={() => setProject("webdev")} />
            </Container>
          </Html>
          {/* //margin */}
          <MarginOne faceSkills={faceSkills} />
          <MarginThree faceSkills={faceSkills} />
          <MarginTwo faceSkills={faceSkills} />
          {/* //Skill hologram html */}
          <Html position={[1.1, 0.8, 0]}>
            <SelectedSkillsContainer2D>
              <ProjectorLottie showProjection={project} />
            </SelectedSkillsContainer2D>
          </Html>
          {/* //skillHologram stuff */}

          <SkiliHoloGram />
          {/* //original mesh */}
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
const SelectedSkillsContainer2D = styled.div`
  height: 20vw;
  width: 25vw;
`;
const SkillHologramHtml = styled.div`
  width: 51vw;
  height: 46vw;
`;
