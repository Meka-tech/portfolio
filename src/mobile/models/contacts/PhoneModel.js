import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { PhoneScreen } from "./PhoneScreen";

export const PhoneModel = () => {
  const { nodes, materials } = useGLTF("/3dModels/mobileModels/iphone3D.glb");
  const GroupRef = useRef(null);

  // position={[1.8, 0.3, 5.3]}
  // rotation={[0, 1.7, 0]}
  return (
    <group
      ref={GroupRef}
      dispose={null}
      position={[1.8, 0.3, 5.3]}
      scale={5.5}
      rotation={[0, 1.7, 0]}
    >
      <PhoneScreen />
      <group rotation={[-Math.PI, 0, 0]} scale={0.021}>
        <group position={[0, -0.262, 7.492]} scale={1.928}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_0.geometry}
            material={materials.body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials.body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_3.geometry}
            material={materials.screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_4.geometry}
            material={materials.camera_lens}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_5.geometry}
            material={materials.camera_glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_6.geometry}
            material={materials.flashlight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_7.geometry}
            material={materials.logo}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_8.geometry}
            material={materials.connector}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/3dModels/mobileModels/iphone3D.glb");
