import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

export const Brain = () => {
  const { nodes, materials } = useGLTF("/3dModels/mobileModels/Brain.glb");
  const groupRef = useRef();

  const tl = useRef();
  const scroll = useScroll();

  useFrame(() => {
    // console.log(scroll.offset);
    tl.current.seek(scroll.offset);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.from(
      groupRef.current.position,
      {
        duration: 0.05,
        x: -20
      },
      0.45
    );
    tl.current.from(
      groupRef.current.rotation,
      {
        duration: 0.05,
        y: 0
      },
      0.48
    );

    tl.current.to(
      groupRef.current.position,
      {
        duration: 0.1,
        x: 10,
        z: -2,
        y: -25
      },
      0.51
    );
  }, []);
  return (
    <group
      dispose={null}
      scale={0.5}
      ref={groupRef}
      position={[0, -23, 5.5]}
      rotation={[0, 2, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial002.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial001.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
};

useGLTF.preload("/3dModels/mobileModels/Brain.glb");
