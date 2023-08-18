import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useNavOption } from "../Context/context";
import { gsap } from "gsap";

export const ControllerCube = ({ setCameraTurnToSkills }) => {
  const group = useRef();

  const { ToggleNavOption, navOption } = useNavOption();

  useFrame((state) => {
    if (navOption === "Bio") {
      gsap.to(state.camera.rotation, {
        x: -0.1,
        duration: 1.5
      });
    } else {
      gsap.to(state.camera.rotation, {
        x: 0,
        duration: 1
      });
    }
  });

  useFrame((state) => {
    if (navOption === "Skills") {
      gsap.to(state.camera.rotation, {
        y: 1.5,
        duration: 2
      });

      setCameraTurnToSkills(true);
    } else {
      setCameraTurnToSkills(false);
      gsap.to(state.camera.rotation, {
        y: 0,
        duration: 2
      });
    }
  });
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial transparent opacity={0} color="blue" />
    </mesh>
  );
};
