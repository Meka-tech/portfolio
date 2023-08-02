import React, { useEffect, useRef, useState } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";

export default function HeadModel(props) {
  const group = useRef();
  // const { nodes, materials } = useGLTF("/3Dmodels/head.glb");
  const fbx = useLoader(FBXLoader, "/3Dmodels/head.fbx");

  function useMouse() {
    const [mousePosition, setMousePosition] = useState({
      x: null,
      y: null
    });

    useEffect(() => {
      function handle(e) {
        setMousePosition({
          x: e.pageX,
          y: e.pageY
        });
      }
      document.addEventListener("mousemove", handle);
      return () => document.removeEventListener("mousemove", handle);
    }, []);

    return mousePosition;
  }

  const { x, y } = useMouse();

  useFrame((state) => {
    group.current.rotation.y = (x / 150) * 0.2 - 0.9;
    group.current.rotation.x = (y / 150) * 0.2 - 0.6;
  });

  /////
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.5, 0]}
      rotation={[0, 0, 0]}
      scale={0.0035}
    >
      <Float
        speed={3}
        rotationIntensity={0}
        floatIntensity={2}
        floatingRange={[5, 25]}
      >
        <primitive castShadow receiveShadow object={fbx} />
      </Float>
    </group>
  );
}

useGLTF.preload("/3Dmodels/head.glb");
