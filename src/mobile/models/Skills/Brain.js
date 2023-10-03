import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export const BrainModel = () => {
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
        duration: 0.02,
        y: 0.6
      },
      0.5
    );

    tl.current.to(
      groupRef.current.position,
      {
        duration: 0.1,
        x: 10,
        z: -1.5
      },
      0.505
    );
  }, []);
  return (
    <group
      dispose={null}
      scale={0.45}
      ref={groupRef}
      position={[-0.5, -1.5, 5.8]}
      rotation={[0, 2, 0]}
    >
      <group scale={1.081}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.centre08.geometry}
            material={materials.black}
            position={[0, 209.806, 0]}
            scale={0.061}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.left08_002.geometry}
            material={materials.black}
            position={[0, 209.806, 0]}
            scale={0.061}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.left08.geometry}
            material={materials.black}
            position={[0, 209.806, 0]}
            scale={0.061}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.right08_.geometry}
            material={materials.black}
            position={[0, 209.806, 0]}
            scale={0.061}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.right08001.geometry}
            material={materials.black}
            position={[0, 209.806, 0]}
            scale={0.061}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/3dModels/mobileModels/Brain.glb");
