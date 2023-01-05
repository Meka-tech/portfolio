import { Float, PresentationControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const SquareBox = ({ onClick, position, boxActive, setBoxInPlace }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("3dmodels/squareBox.glb");
  useFrame((state) => {
    if (boxActive) {
      let addy = 0.04;
      let addx = 0.09;
      if (group.current.position.y > -2.5) {
        group.current.position.y -= addy;
        addy += 0.001;
      }
      if (group.current.position.x > 0) {
        group.current.position.x -= addx;
        addx += 0.001;
      }
      if (group.current.position.y <= -2 && group.current.position.x <= 1) {
        setBoxInPlace(true);
      }
      group.current.rotation.y += 0.005;
    }
    if (!boxActive) {
      if (group.current.position.y < position[1]) {
        group.current.position.y += 0.04;
      }
      if (group.current.position.x < position[0]) {
        group.current.position.x += 0.09;
      }
      if (group.current.position.y <= -2 && group.current.position.x <= 1) {
        setBoxInPlace(false);
      }
    }
  });
  return (
    <group
      ref={group}
      dispose={null}
      scale={0.3}
      onClick={onClick}
      position={position}
    >
      <Float
        speed={!boxActive ? 2 : 1} // Animation speed, defaults to 1
        rotationIntensity={!boxActive ? 2 : 0} // XYZ rotation intensity, defaults to 1
        floatIntensity={!boxActive ? 1 : 0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={!boxActive ? [5, 10] : [-3, -5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <pointLight intensity={5} position={[-3, -3, -2]} color="dodgerblue" />
        <PresentationControls
          polar={boxActive ? [0, Math.PI / -3] : [10, 20, 10]}
        >
          {boxActive && (
            <pointLight
              intensity={20}
              position={[0, 5, 0]}
              color="dodgerblue"
            />
          )}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Square.geometry}
            material={materials["Material.002"]}
          />
        </PresentationControls>
      </Float>
    </group>
  );
};

useGLTF.preload("3dmodels/squareBox.glb");
