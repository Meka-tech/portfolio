import { Scroll, useScroll } from "@react-three/drei";
import React, { useState } from "react";
import { WelcomeComponent } from "../WelcomeComponent";
import { NavigationHologram } from "../../models/Navigation/NavigationHologram";
import { useFrame } from "@react-three/fiber";

export const ScrollHtml = () => {
  const scroll = useScroll();

  return (
    <Scroll html>
      <WelcomeComponent />
    </Scroll>
  );
};
