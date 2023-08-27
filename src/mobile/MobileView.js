import React from "react";
import styled from "styled-components";
import { NavigationModel } from "./models/Navigation/NavigationModel";
import {
  OrbitControls,
  PresentationControls,
  ScrollControls
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { ScrollHtml } from "./components/ScrollHtml";

export const MobileView = () => {
  return (
    <Canvas
      style={{
        backgroundColor: "rgb(255,255,255)",
        height: "100vh",
        position: "absolute",
        zIndex: 100
      }}
      camera={{ position: [0, 0, 5], fov: 45, near: 1, far: 20 }}
    >
      <ScrollControls pages={4} distance={2}>
        <ScrollHtml />

        <Suspense fallback={null}>
          <ambientLight />
          <NavigationModel />
        </Suspense>
      </ScrollControls>
    </Canvas>
  );
};
