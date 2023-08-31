import "./App.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { SquareBox } from "./models/squareBox";
import styled from "styled-components";
import { Hologram } from "./components/Hologram";
import HeadModel from "./models/HeadModel";
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  SpotLight
} from "@react-three/drei";
import { Sphere } from "./models/sphereModel";
import { Nav } from "./components/nav";
import RobotHandModel from "./models/RobotHandModel";
import { useNavOption } from "./Context/context";
import { Bio } from "./components/nav/bio";
import { useEffect } from "react";
import Earth from "./models/HologramEarth";
import { ControllerCube } from "./models/WebController";
import { Skill2D } from "./components/nav/skills";
import { SkillModel } from "./models/Skill3D/SkillModel";
import { Tablet } from "./models/tablet/TabletModel";

export const MainCanvas = () => {
  const [boxActive, setBoxActive] = useState(false);
  const [boxInPlace, setBoxInPlace] = useState(false);
  const [sphereActive, setSphereActive] = useState(false);
  const [sphereInPlace, setSphereInPlace] = useState(false);
  const [handInPlace, setHandInPlace] = useState(false);
  const [cameraTurnToSkills, setCameraTurnToSkills] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);
  const cameraRef = useRef();
  const { ToggleNavOption, navOption } = useNavOption();
  useEffect(() => {
    if (boxActive) {
      setSphereActive(false);
    }
    if (sphereActive) {
      setBoxActive(false);
    }
  }, [boxActive, sphereActive]);

  return (
    <Container>
      <Canvas
        style={{
          backgroundColor: "rgb(10,10,10)",
          height: "100vh",
          position: "absolute",
          zIndex: 100
        }}
        camera={{ position: [0, 0, 5], fov: 45, near: 1, far: 20 }}
      >
        {/* <OrbitControls /> */}
        <spotLight position={[5, 3, 3]} intensity={0.5} color="white" />
        <spotLight position={[-5, 3, 3]} intensity={0.5} color="white" />
        <spotLight position={[5, -5, 3]} intensity={0} color="white" />
        <spotLight position={[-5, -5, 3]} intensity={0.2} color="white" />
        <Suspense fallback={null}>
          <RobotHandModel
            position={[0, 0, 0]}
            setHandInPlace={setHandInPlace}
            handInPlace={handInPlace}
          />
          <SquareBox
            position={[3, 0, 0]}
            onClick={() => {
              setBoxActive(true);
              ToggleNavOption("Nav");
            }}
            setBoxInPlace={(x) => setBoxInPlace(x)}
            boxActive={boxActive}
          />

          <HeadModel />
          <Sphere
            position={[-3, 0, 0]}
            onClick={() => {
              setSphereActive(true);
            }}
            setBoxInPlace={(x) => setSphereInPlace(x)}
            boxActive={sphereActive}
          />
          {handInPlace && <Earth />}
          <ControllerCube setCameraTurnToSkills={setCameraTurnToSkills} />

          <SkillModel
            onClickOut={() => {
              setBoxActive(true);
              ToggleNavOption("Nav");
            }}
            faceSkills={cameraTurnToSkills}
            setSkillsInView={setSkillsInView}
          />
          <Tablet />
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
      <Loader />
      <UIBody>
        {boxInPlace && (
          <Hologram
            onClickOut={() => {
              setBoxActive(false);
            }}
            child={<Nav />}
          />
        )}
        {sphereInPlace && (
          <Hologram
            onClickOut={() => {
              setSphereActive(false);
            }}
          />
        )}
        {handInPlace && (
          <Bio
            onClickOut={() => {
              setBoxActive(true);
              ToggleNavOption("Nav");
            }}
          />
        )}

        {skillsInView && (
          <Skill2D
            skillsInView={skillsInView}
            onClickOut={() => {
              setBoxActive(true);
              ToggleNavOption("Nav");
            }}
          />
        )}
      </UIBody>
    </Container>
  );
};

const Container = styled.div``;
const UIBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
