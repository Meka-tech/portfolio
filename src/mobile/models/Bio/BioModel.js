import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useFrame, useThree } from "@react-three/fiber";

export const BioModel = ({}) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF(
    "/3dModels/mobileModels/profileScene.glb"
  );

  const scroll = useScroll();
  const { camera } = useThree();

  const tl = useRef();

  useFrame(() => {
    // console.log(scroll.offset);
    tl.current.seek(scroll.offset);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.from(
      groupRef.current.position,
      {
        duration: 0.04,
        y: -25
      },
      0.134
    );
    tl.current.to(
      groupRef.current.position,
      {
        duration: 1.2,
        y: -35
      },
      0.16
    );

    //1
    //camera rotates to left
    // tl.current.to(
    //   camera.rotation,
    //   {
    //     duration: 0.12,
    //     y: 1.5
    //   },
    //   0.178
    // );
    // //camera move to right
    // tl.current.to(
    //   camera.position,
    //   {
    //     duration: 0.1,
    //     x: 5
    //   },
    //   0.178
    // );
    //group comes forward
    tl.current.to(
      groupRef.current.position,
      {
        duration: 0.13,
        z: 5
      },
      0.178
    );

    //2
    //camera moves forward
    // tl.current.to(
    //   camera.position,
    //   {
    //     duration: 0.1,
    //     z: 2
    //   },
    //   0.301
    // );
    // //camera roates to the left
    // tl.current.to(
    //   camera.rotation,
    //   {
    //     duration: 0.12,
    //     y: 2.2
    //   },
    //   0.301
    // );
    //group goes away
    tl.current.to(
      groupRef.current.position,
      {
        duration: 0.05,
        z: 10
      },
      0.39
    );
  }, []);

  return (
    <group ref={groupRef} dispose={null} position={[-0.5, -9, -2]} scale={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair.geometry}
        material={materials.Chair}
        position={[0.365, 0.489, -1.246]}
        scale={[0.332, 0.472, 0.332]}
      />
      <group
        position={[0.454, 1.18, 0.66]}
        rotation={[Math.PI / 2, 0, 1.561]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials["niet_klaar_2:NIET_FINISHED_UV2:lambert3"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ch36.geometry}
        material={materials["Material.004"]}
        position={[0.332, 0, -1.043]}
        rotation={[Math.PI / 2, 0, -0.108]}
        scale={0.02}
      />
      <group
        position={[0.476, 1.595, 0.526]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={0.265}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Plastico}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Plastico 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Pad}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fila_Inferior.geometry}
        material={materials.Teclas1}
        position={[0.477, 1.605, 0.589]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={0.265}
      />
      <group
        position={[0.77, 1.614, 0.758]}
        rotation={[-Math.PI / 2, 0, 3.134]}
        scale={0.265}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Plastico}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.Pad}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials["Pantalla Negro"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_3.geometry}
          material={materials.Pantalla}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/3dModels/mobileModels/profileScene.glb");
