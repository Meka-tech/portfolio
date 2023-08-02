import "./App.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { SquareBox } from "./models/squareBox";
import styled from "styled-components";
import { Hologram } from "./components/Hologram";
import HeadModel from "./models/HeadModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Sphere } from "./models/sphereModel";
import { Nav } from "./components/nav";
import RobotHandModel from "./models/RobotHandModel";
import { useNavOption } from "./Context/context";

export const MainCanvas = () => {
  const [boxActive, setBoxActive] = useState(false);
  const [boxInPlace, setBoxInPlace] = useState(false);
  const [sphereActive, setSphereActive] = useState(false);
  const [sphereInPlace, setSphereInPlace] = useState(false);
  const cameraRef = useRef();
  const { ToggleNavOption, navOption } = useNavOption();

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
          <RobotHandModel position={[0, 0, 0]} cameraRef={cameraRef} />
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
        </Suspense>
      </Canvas>
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
