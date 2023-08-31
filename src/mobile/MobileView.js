import React from "react";
import styled from "styled-components";
import { NavigationModel } from "./models/Navigation/NavigationModel";
import {
  Loader,
  OrbitControls,
  Scroll,
  ScrollControls,
  useProgress,
  useScroll
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { ScrollHtml } from "./components/ScrollHtml";
import { LocationDisplay } from "./components/LocationDisplay";

import { useMobileNavPosition } from "../Context/context";
import { MobileManager } from "./components/MobileManager";
import { BioModel } from "./models/Bio/BioModel";
import { MobileLoadingScreen } from "./components/MobileLoadingScreen";
import { SkillModel } from "./models/Skills/SkillModel";

export const MobileView = () => {
  const { mobileNavPosition } = useMobileNavPosition();
  const { progress } = useProgress();

  return (
    <>
      <Canvas
        style={{
          backgroundColor: "rgb(255,255,255)",
          height: "100vh",
          position: "absolute",
          zIndex: 100
        }}
        camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 20 }}
      >
        {/* <OrbitControls /> */}
        <ScrollControls pages={10} damping={10}>
          <MobileManager />
          <ScrollHtml />
          <Suspense fallback={null}>
            <Scroll>
              <SkillModel />
              <ambientLight />
              <BioModel />
              <NavigationModel />
            </Scroll>
          </Suspense>
        </ScrollControls>
      </Canvas>
      {/* <MobileLoadingScreen /> */}
      <Loader />
      {progress === 100 && (
        <UIBody>
          <LocationDisplay location={mobileNavPosition} />
        </UIBody>
      )}
    </>
  );
};
const UIBody = styled.div`
  font-family: "HK Grotesk", sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
