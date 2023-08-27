import { Float, Html, PresentationControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useNavOption } from "../../Context/context";
import { gsap } from "gsap";
import {
  TabletScreenBody,
  TabletScreenFooter,
  TabletScreenHeader
} from "./TabletScreen";

export const Tablet = ({}) => {
  const ref = useRef();

  const fbx = useLoader(FBXLoader, "/3Dmodels/tablet.fbx");
  const { ToggleNavOption, navOption } = useNavOption();

  useFrame((state) => {
    if (navOption === "Contacts") {
      gsap.to(ref.current.position, {
        y: 0,
        duration: 2.5
      });
    }
    if (navOption !== "Contacts") {
      gsap.to(ref.current.position, {
        y: 2,
        duration: 2.5
      });
    }
  });

  return (
    <group ref={ref} dispose={null} scale={0.004} position={[0, 2, 3.5]}>
      <Float floatingRange={[1, 10]} rotationIntensity={0.2} floatIntensity={1}>
        <PresentationControls
          polar={[0, Math.PI / 5]}
          azimuth={[0, Math.PI / 4]}
          snap={true}
        >
          <group>
            <Html transform scale={10} position={[-5, 82, 15]}>
              <TabletScreenHeader />
            </Html>
            <Html transform scale={10} position={[5, 9, 20]}>
              <TabletScreenBody />
            </Html>
            <Html transform scale={10} position={[18, -70, 10]}>
              <TabletScreenFooter />
            </Html>
          </group>
          {navOption === "Contacts" && (
            <primitive castShadow receiveShadow object={fbx} />
          )}
        </PresentationControls>
      </Float>
    </group>
  );
};
