import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { SquareBox } from "./models/squareBox";
import styled from "styled-components";
import { Hologram } from "./components/Hologram";
import useClickOutside from "./hooks/useClickOutside";

function App() {
  const [boxActive, setBoxActive] = useState(false);
  const [boxInPlace, setBoxInPlace] = useState(false);

  return (
    <div className="App">
      <Canvas
        style={{
          backgroundColor: "white",
          height: "100vh",
          position: "absolute",
          zIndex: 100
        }}
        camera={{ fov: 45, near: 1, far: 20 }}
      >
        <spotLight position={[0, 0, 5]} intensity={4} color="white" />
        <Suspense fallback={null}>
          <SquareBox
            position={[5, 0, -5]}
            onClick={() => {
              setBoxActive(true);
            }}
            setBoxInPlace={(x) => setBoxInPlace(x)}
            boxActive={boxActive}
          />
        </Suspense>
      </Canvas>
      <UIBody>
        {boxInPlace && (
          <Hologram
            onClickOut={() => {
              setBoxActive(false);
            }}
          />
        )}
      </UIBody>
    </div>
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
