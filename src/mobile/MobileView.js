import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NavigationModel } from "./models/Navigation/NavigationModel";
import {
  OrbitControls,
  Scroll,
  ScrollControls,
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
import { ProjectSetupModel } from "./models/Projects/ProjectSetup";
import { getProject, val } from "@theatre/core";
import {
  SheetProvider,
  useCurrentSheet,
  PerspectiveCamera
} from "@theatre/r3f";
import CameraAnimation from "../cameraAnimation.json";

import { PCSlider } from "./components/PCScreenSlider";
import { Sidebar } from "./components/sideBar";
import { HamburgerIcon } from "./components/sideBar/hamburgerIcon";

export const MobileView = () => {
  const { mobileNavPosition } = useMobileNavPosition();
  const [CanvasColor, setCanvasColor] = useState("rgb(255,255,255)");
  const [startExperience, setStartExperience] = useState(false);
  const [PcSliderPos, setPCSliderPos] = useState(0);
  const [showSlider, setShowSlider] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    if (
      mobileNavPosition === "Skills" ||
      mobileNavPosition === "Projects" ||
      mobileNavPosition === "Contact"
    ) {
      setCanvasColor("rgb(0,0,0)");
    } else {
      setCanvasColor("rgb(255,255,255)");
    }
  }, [mobileNavPosition]);
  const sheet = getProject("Spin Round", { state: CameraAnimation }).sheet(
    "Scene"
  );

  return (
    <FullBody>
      {!startExperience && (
        <MobileLoadingScreen
          setStartExperience={setStartExperience}
          startExperience={startExperience}
        />
      )}

      <Canvas
        style={{
          backgroundColor: CanvasColor,
          position: "absolute",
          zIndex: 100
        }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ScrollControls pages={10} maxSpeed={2} damping={0.6} distance={2.5}>
          <SheetProvider sheet={sheet}>
            <Scene PcSliderPos={PcSliderPos} setShowSlider={setShowSlider} />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
      <UIBody>
        <Sidebar
          active={sidebarActive}
          variant={CanvasColor === "rgb(0,0,0)"}
          setActive={setSidebarActive}
          point={mobileNavPosition === "Contact"}
        />
        <LocationDisplay location={mobileNavPosition} />
        <PCSlider setPcScroll={setPCSliderPos} show={showSlider} />
      </UIBody>
    </FullBody>
  );
};
const FullBody = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;
const UIBody = styled.div`
  font-family: "HK Grotesk", sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Scene = ({ PcSliderPos, setShowSlider }) => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);

    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 5]}
        fov={50}
        near={0.1}
        far={10}
      />
      <MobileManager setShowSlider={setShowSlider} />
      <ScrollHtml />
      <Suspense fallback={null}>
        <ProjectSetupModel PcSliderPos={PcSliderPos} />
        <BioModel />
        <ambientLight />
        <SkillModel />
        <Scroll>
          <NavigationModel />
        </Scroll>
      </Suspense>
    </>
  );
};
