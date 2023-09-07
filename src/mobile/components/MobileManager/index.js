import { useScroll } from "@react-three/drei";
import { useMobileNavPosition } from "../../../Context/context";

import React, { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";

export const MobileManager = () => {
  const scrollPosition = useScroll();
  const { setMobiletNavPosition } = useMobileNavPosition();
  const { camera } = useThree();
  const tl = useRef();

  useFrame(() => {
    // console.log(scroll.offset);
    tl.current.seek(scrollPosition.offset);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    //1
    //camera rotates to left
    tl.current.to(
      camera.rotation,
      {
        duration: 0.12,
        y: 1.5
      },
      0.178
    );
    //camera move to right
    tl.current.to(
      camera.position,
      {
        duration: 0.1,
        x: 5
      },
      0.178
    );
    //2
    //camera moves forward
    tl.current.to(
      camera.position,
      {
        duration: 0.1,
        z: 2
      },
      0.301
    );
    //camera roates to the left
    tl.current.to(
      camera.rotation,
      {
        duration: 0.12,
        y: 2.2
      },
      0.301
    );

    //projects
    ////  resets camera
    ///
    tl.current.to(
      camera.position,
      {
        duration: 0.001,
        x: 0,
        y: 0,
        z: 5
      },
      0.8
    );
    tl.current.to(
      camera.rotation,
      {
        duration: 0.001,
        x: 0,
        y: 0,
        z: 0
      },
      0.8
    );
    ////
    ////////
  }, []);

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
    } else if (scrollPosition.offset > 0.96 && scrollPosition.offset < 1) {
      setMobiletNavPosition("Contact");
    } else {
      setMobiletNavPosition("");
    }
  }, []);
  return <group></group>;
};
