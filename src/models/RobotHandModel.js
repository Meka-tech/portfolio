import React, { useEffect, useRef, useState } from "react";
import { Float, SpotLight, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useNavOption } from "../Context/context";
import { Vector3 } from "three";
import { gsap } from "gsap";

export default function RobotHandModel({ setHandInPlace, handInPlace }) {
  const group = useRef();
  const fbx = useLoader(FBXLoader, "/3Dmodels/RobotHand.fbx");

  const { ToggleNavOption, navOption } = useNavOption();

  useFrame((state) => {
    if (navOption === "Bio") {
      gsap.to(state.camera.rotation, {
        x: -0.1,
        duration: 1.5
      });

      //hand
      let addz = 0.01;
      if (group.current.position.z > 2.3) {
        group.current.position.z -= addz;
        addz += 0.005;
      }
      if (group.current.position.z < 2.3) {
        setHandInPlace(true);
      }
    } else {
      gsap.to(state.camera.rotation, {
        x: 0,
        duration: 1
      });
      //hand
      let addz = 0.01;
      if (group.current.position.z < 3) {
        group.current.position.z += addz;
        addz += 0.005;
        setHandInPlace(false);
      }
    }
  });

  return (
    <group
      dispose={null}
      position={[0, -1.3, 3]}
      rotation={[0, 89.5, 0]}
      scale={0.002}
      ref={group}
    >
      <Float
        speed={3}
        rotationIntensity={0}
        floatIntensity={2}
        floatingRange={[5, 25]}
      >
        {handInPlace && <SpotLight intensity={5} color="#33e5bc" scale={300} />}

        <primitive castShadow receiveShadow object={fbx} />
      </Float>
    </group>
  );
}

useGLTF.preload("/3Dmodels/head.glb");
