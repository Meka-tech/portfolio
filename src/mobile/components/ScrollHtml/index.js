import { Scroll, useProgress, useScroll } from "@react-three/drei";
import React, { useState } from "react";
import { WelcomeComponent } from "./WelcomeComponent";
import { NavigationHologram } from "../../models/Navigation/NaviagtionHologram/NavigationHologram";
import { useFrame } from "@react-three/fiber";
import { ProfileText } from "./ProfileText";
import { NavigationText } from "./NavigationText";

export const ScrollHtml = () => {
  const { progress } = useProgress();
  const scroll = useScroll();
  const [welcomeOpacity, setWelcomeOpactity] = useState(1);
  const [navigationOpacity, setNavigationOpactity] = useState(1);
  const [profileOpacity, setProfileOpactity] = useState(1);

  useFrame(() => {
    setWelcomeOpactity(1 - scroll.range(0, 1 / 10));
    setNavigationOpactity(1 - scroll.range(0, 1 / 10));
    setProfileOpactity(1 - scroll.range(4.1 / 10, 1 / 10));
  });

  return (
    <>
      {progress === 100 && (
        <Scroll html>
          <WelcomeComponent opacity={welcomeOpacity} />
          <NavigationText opacity={navigationOpacity} />
          <ProfileText opacity={profileOpacity} />
        </Scroll>
      )}
    </>
  );
};
