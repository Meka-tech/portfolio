import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { PCScreen } from "./PcScreen";
import { PhoneModel } from "../contacts/PhoneModel";

export const ProjectSetupModel = ({ PcSliderPos }) => {
  const { nodes, materials } = useGLTF(
    "/3dModels/mobileModels/ProjectSetup.glb"
  );

  const groupRef = useRef();

  const tl = useRef();
  const scroll = useScroll();

  useFrame(() => {
    // console.log(tl.current);
    tl.current.seek(scroll.offset);
  });
  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    ///come from god knows where
    tl.current.from(
      groupRef.current.position,
      {
        duration: 0.001,
        y: -20,
        z: 30
      },
      0.801
    );

    // tl.current.to(
    //   groupRef.current.position,
    //   {
    //     duration: 0.02,
    //     y: -1.5,
    //     z: -2
    //   },
    //   0.81
    // );
    // tl.current.to(
    //   groupRef.current.position,
    //   {
    //     duration: 0.01,
    //     x: 1.3
    //   },
    //   0.819
    // );

    // //zoom to screen

    // tl.current.to(
    //   groupRef.current.position,
    //   {
    //     duration: 0.05,
    //     y: -1.8,
    //     z: 1.6
    //   },
    //   0.87
    // );
    // /// turn to phone
    // tl.current.to(
    //   groupRef.current.rotation,
    //   {
    //     duration: 0.1,
    //     y: -1.8,
    //     x: 1.8
    //   },
    //   0.96
    // );
    // tl.current.to(
    //   groupRef.current.position,
    //   {
    //     duration: 0.1,
    //     x: 3.6,
    //     y: 1,
    //     z: 4
    //   },
    //   0.96
    // );
  }, []);

  return (
    <group
      dispose={null}
      ref={groupRef}
      position={[-1.45, -0.6, 3.65]}
      scale={0.5}
      rotation={[0.2, -1.6, 0]}
    >
      <PCScreen PCSliderPos={PcSliderPos} />
      <PhoneModel />
      <group
        position={[-1.431, 1.043, 6.302]}
        rotation={[-Math.PI / 2, 0, -0.087]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0.132, -0.769, 1.234]}
            rotation={[0.001, 0.07, 1.601]}
            scale={[1.053, 1.033, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials["Material.018"]}
            />
          </group>
          <group
            position={[0.04, -0.773, 0.033]}
            rotation={[0.001, 0.07, 1.601]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials["Material.021"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Material.015"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials["Material.016"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6001.geometry}
              material={materials["Material.017"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials["Material.018"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials["Material.019"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials["Material.020"]}
            />
          </group>
          <group
            position={[-1.243, -0.722, 1.141]}
            rotation={[0, 0.934, 0]}
            scale={0.246}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials["Material.024"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials["Material.023"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials["Material.020"]}
            />
          </group>
          <group
            position={[-1.215, -0.281, 1.149]}
            rotation={[0.167, 0.927, -1.705]}
            scale={[1, 1, 1.149]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials["Material.022"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials["Material.015"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials["Material.023"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials["Material.024"]}
            />
          </group>
        </group>
      </group>
      <group
        position={[1.735, 1.062, -2.89]}
        rotation={[-1.601, 0.852, 1.594]}
        scale={0.857}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Silver}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall.geometry}
        material={materials.wall}
        position={[-6.428, 0.143, 0]}
        rotation={[Math.PI / 2, 0, -1.558]}
        scale={[15.972, 15.972, 13]}
      />
      <group scale={0.01}>
        <group
          position={[-242.187, 48.964, 274.85]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={11.726}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cooling_stand_6chashki001_0.geometry}
            material={materials["6chashki.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cooling_stand_9metalBlack001_0.geometry}
            material={materials["9metalBlack.001"]}
          />
        </group>
        <group
          position={[-116.173, 443.675, -340.258]}
          rotation={[Math.PI, -1.213, 0]}
          scale={189.698}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[-0.032, 0.418, 0.018]}
              rotation={[2.909, -1.519, 1.223]}
              scale={[1.026, 1.026, 0.866]}
            >
              <group scale={[1, 1, 0.494]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90_Material004_0.geometry}
                  material={materials["Material.026"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90_Material010_0.geometry}
                  material={materials["Material.010"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90_Material011_0.geometry}
                  material={materials["Material.011"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          position={[-176.076, 84.63, 272.661]}
          rotation={[-Math.PI / 2, -1.299, Math.PI / 2]}
          scale={[1181.122, 1181.123, 1181.123]}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0.1, 0.017]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6_Black002_0.geometry}
                material={materials["Black.002"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6_Gray001_0.geometry}
                material={materials["Gray.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6_Keyboard001_0.geometry}
                material={materials["Keyboard.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6_Light001_0.geometry}
                material={materials["Light.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6_Metal001_0.geometry}
                material={materials["Metal.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6_Orange001_0.geometry}
                material={materials["Orange.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6_Screen001_0.geometry}
                material={materials["Material.025"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6_Shiny001_0.geometry}
                material={materials["Shiny.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6_Texture001_0.geometry}
                material={materials["Texture.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6_White001_0.geometry}
                material={materials["White.001"]}
              />
            </group>
          </group>
        </group>
        <group
          position={[0, -10.643, 0]}
          rotation={[Math.PI, 0, 0]}
          scale={100}
        >
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group
              position={[-61.024, -156.09, -0.556]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[-368.949, -25.976, -731.636]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Material_0_Material005_0.geometry}
                material={materials.table}
                position={[0, -0.8, 0]}
                scale={[0.841, 0.337, 0.841]}
              />
            </group>
            <group
              position={[-204.573, 218.006, 444.965]}
              rotation={[-1.72, -1.081, -0.132]}
              scale={[325.342, 31.034, 4.051]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_Material001_0_Material006_0.geometry}
                material={materials["Material.006"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_Material001_0_Material008_0.geometry}
                material={materials["Material.008"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_Material001_0_Material009_0.geometry}
                material={materials["Material.009"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.Cube003_Material001_0_Material074_30001_0.geometry
                }
                material={materials["Material.074_30.001"]}
              />
            </group>
            <group
              position={[117.182, 29.165, 29.407]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[124.427, 119.911, 154.111]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.Plane_Material053_0_Material074_21001_0.geometry
                }
                material={materials["Material.013"]}
                position={[0.032, 0, 0.224]}
                scale={0.771}
              />
            </group>
          </group>
        </group>
        <group
          position={[122.305, 15.348, -54.246]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={1598.61}
        >
          <group
            position={[-0.004, 0.008, 0.008]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.018}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MouseThermaltakeBlack015_Material001_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MouseThermaltakeBlack015_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MouseThermaltakeBlack015_Material003_0.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.MouseThermaltakeBlack015_Material004_0.geometry}
              material={materials["Material.012"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/3dModels/mobileModels/ProjectSetup.glb");
