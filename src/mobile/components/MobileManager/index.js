import { useScroll } from "@react-three/drei";
import { useMobileNavPosition } from "../../../Context/context";

import React from "react";
import { useFrame } from "@react-three/fiber";

export const MobileManager = ({ setShowSlider }) => {
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
    } else if (scrollPosition.offset > 0.85 && scrollPosition.offset < 0.95) {
      setMobiletNavPosition("Projects");
    } else if (scrollPosition.offset > 0.95) {
      setMobiletNavPosition("Contact");
    } else {
      setMobiletNavPosition("");
    }

    if (scrollPosition.offset > 0.88 && scrollPosition.offset < 0.93) {
      setShowSlider(true);
    } else {
      setShowSlider(false);
    }
  }, []);
  return <group></group>;
};
