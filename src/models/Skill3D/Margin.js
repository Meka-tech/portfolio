import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { useRef } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { gsap } from "gsap";

export const MarginOne = ({ faceSkills }) => {
  const fbx = useLoader(FBXLoader, "/3Dmodels/margin.fbx");
  const ref = useRef();
  useFrame((state) => {
    if (faceSkills) {
      gsap.to(ref.current.scale, {
        x: 0.00085,
        duration: 2.5
      });
    } else {
      ref.current.scale.x = 0;
    }
  });

  return (
    <group
      ref={ref}
      dispose={null}
      scale={[0, 0.00015, 0.0001]}
      position={[-0.05, 0.6, 0.1]}
      rotation={[1.5, 0, 0]}
    >
      <primitive castShadow receiveShadow object={fbx} />
    </group>
  );
};
export const MarginTwo = ({ faceSkills }) => {
  const fbxTwo = useLoader(FBXLoader, "/3Dmodels/margin2.fbx");
  const ref = useRef();
  useFrame((state) => {
    if (faceSkills) {
      gsap.to(ref.current.scale, {
        x: 0.0003,
        duration: 2.5
      });
    } else {
      ref.current.scale.x = 0;
    }
  });

  return (
    <group
      dispose={null}
      scale={[0, 0.0001, 0.0001]}
      position={[-0.75, 0.28, 0.1]}
      rotation={[1.5, 1.52, 0]}
      ref={ref}
    >
      <primitive castShadow receiveShadow object={fbxTwo} />
    </group>
  );
};
export const MarginThree = ({ faceSkills }) => {
  const fbxThree = useLoader(FBXLoader, "/3Dmodels/margin3.fbx");
  const ref = useRef();
  useFrame((state) => {
    if (faceSkills) {
      gsap.to(ref.current.scale, {
        x: 0.0003,
        duration: 2.5
      });
    } else {
      ref.current.scale.x = 0;
    }
  });
  return (
    <group
      dispose={null}
      scale={[0, 0.00015, 0.0001]}
      position={[-0.75, -0.26, 0.1]}
      rotation={[1.5, 1.52, 0]}
      ref={ref}
    >
      <primitive castShadow receiveShadow object={fbxThree} />
    </group>
  );
};
