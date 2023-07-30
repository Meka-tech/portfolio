import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { SquareBox } from "./models/squareBox";
import styled from "styled-components";
import { Hologram } from "./components/Hologram";
import useClickOutside from "./hooks/useClickOutside";
import HeadModel from "./models/HeadModel";
import { Box, OrbitControls } from "@react-three/drei";
import { Sphere } from "./models/sphereModel";
import { Nav } from "./components/nav";
import { Intro } from "./components/nav/intro";
import { HologramProvider } from "./Context/context";
import { MainCanvas } from "./Canvas";

function App() {
  const [boxActive, setBoxActive] = useState(false);
  const [boxInPlace, setBoxInPlace] = useState(false);
  const [sphereActive, setSphereActive] = useState(false);
  const [sphereInPlace, setSphereInPlace] = useState(false);

  return (
    <HologramProvider className="App">
      <div className="laptopView">
        <MainCanvas />
      </div>
      <div className="mobileView">
        <h2>Not Available for Mobile at the moment</h2>
      </div>
    </HologramProvider>
  );
}

export default App;

const UIBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
