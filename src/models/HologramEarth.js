import React, { useEffect, useRef, useState } from "react";
import {
  Float,
  OrbitControls,
  PresentationControls,
  SpotLight,
  useGLTF
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useNavOption } from "../Context/context";
import { Vector3 } from "three";
import { gsap } from "gsap";

export default function Earth() {
  const group = useRef();
  const fbx = useLoader(FBXLoader, "/3Dmodels/EarthHologram.fbx");
  const EarthRef = useRef();

  const { ToggleNavOption, navOption } = useNavOption();
  useFrame(({ clock }) => {
    EarthRef.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <group
      dispose={null}
      position={[0.18, -0.03, 3.9]}
      scale={0.00075}
      ref={group}
    >
      <PresentationControls>
        <primitive castShadow receiveShadow object={fbx} ref={EarthRef} />
      </PresentationControls>
    </group>
  );
}

useGLTF.preload("/3Dmodels/head.glb");
