import React, { useRef, useState } from "react";
import {
  Html,
  OrbitControls,
  SpotLight,
  useAnimations,
  useGLTF,
  useScroll
} from "@react-three/drei";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { NavigationHologram } from "./NaviagtionHologram/NavigationHologram";

export function NavigationModel({}) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF(
    "/3dModels/mobileModels/NavigationHandd.glb"
  );

  const tl = useRef();
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      groupRef.current.position,
      {
        duration: 0.05,
        y: -5
      },
      0
    );
    tl.current.from(
      groupRef.current.position,
      {
        duration: 0.09,
        z: -5
      },
      0.035
    );
    tl.current.from(
      groupRef.current.rotation,
      {
        duration: 0.1,
        y: 0
      },
      0.036
    );
    tl.current.to(
      groupRef.current.position,
      {
        duration: 0.2,
        z: 8
      },
      0.15
    );

    tl.current.to(
      groupRef.current.scale,
      {
        duration: 0.2,
        z: 0,
        x: 0,
        y: 0
      },
      0.19
    );
  }, []);

  // position={[0, -8, 4]}
  // rotation={[0, -1.4, 0]}
  return (
    <group
      dispose={null}
      scale={0.1}
      ref={groupRef}
      position={[0, -8, 4]}
      rotation={[0, -1.4, 0]}
    >
      <pointLight
        color={"#ADD8E6"}
        intensity={10}
        scale={4}
        position={[0, -2, 0]}
      />

      <NavigationHologram />
      <group position={[0, -0.022, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Bulb_Info}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials["Bulb_Info.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.Bulb_Normal}
          scale={0.036}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials["Bulb_Normal.001"]}
          position={[0, 0, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials["Bulb_Normal.002"]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials["Bulb_Normal.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials["Bulb_Normal.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials["Bulb_Normal.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials["Bulb_Normal.006"]}
          scale={-0.042}
        />
      </group>
      <group position={[0, 2.357, 0.259]} scale={[0.479, 0.479, 0.494]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials["Bulb_Normal.007"]}
          position={[0, -0.244, -0.525]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.053, 0.051, 0.053]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_67.geometry}
        material={materials["Bulb_Normal.008"]}
        position={[0, 0.019, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.615}
      />
      <group
        position={[-6.244, -6.162, -2.475]}
        rotation={[0.294, 1.117, -0.266]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_83.geometry}
        material={materials["Material.004"]}
        position={[0.626, 2.552, 0.43]}
        rotation={[-1.847, 1.001, 1.856]}
        scale={0.273}
      />
      <group
        position={[-0.601, -0.176, -0.128]}
        rotation={[-1.516, 0.265, 0]}
        scale={0.13}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Brass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Dark_Brass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Teal_Glow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.White_Glow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["Brass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8001.geometry}
          material={materials["Brass.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials["silver.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3dModels/mobileModels/NavigationHandd.glb");
