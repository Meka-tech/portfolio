import { useScroll } from "@react-three/drei";
import { useMobileNavPosition } from "../../../Context/context";

import React, { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export const MobileManager = () => {
  const scrollPosition = useScroll();
  const { setMobiletNavPosition } = useMobileNavPosition();

  useFrame(() => {
    if (scrollPosition.offset < 0.035) {
      setMobiletNavPosition("");
    } else if (scrollPosition.offset > 0.035 && scrollPosition.offset < 0.15) {
      setMobiletNavPosition("Navigation");
    } else if (scrollPosition.offset > 0.165 && scrollPosition.offset < 0.5) {
      setMobiletNavPosition("Profile");
    } else if (scrollPosition.offset > 0.545 && scrollPosition.offset < 0.8) {
      setMobiletNavPosition("Skills");
    } else {
      setMobiletNavPosition("");
    }
  }, []);
  return <group></group>;
};
