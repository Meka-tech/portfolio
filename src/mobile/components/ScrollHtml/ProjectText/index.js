import React, { useEffect } from "react";
import styled from "styled-components";
import { PageContainer } from "../ScrollStyles";
import { useScroll } from "@react-three/drei";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { tab } from "@testing-library/user-event/dist/tab";

export const ProjectText = ({ opacity }) => {
  const ref = useRef(null);
  const scroll = useScroll();
  const [textInView, setTextInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  useFrame(() => {
    // console.log(scroll.offset);
    if (scroll.offset > 0.88 && scroll.offset < 0.91) {
      setTextInView(true);
    } else {
      setTextInView(false);
    }
  });
  return (
    <ProfileContainer opacity={opacity} ref={ref}>
      {isMobile && (
        <Hint view={textInView.toString()}>
          <h2>Drag the slider to see My Projects</h2>
        </Hint>
      )}
      {!isMobile && (
        <LaptopHint view={textInView.toString()}>
          <h2>Hover and scroll Laptop screen to see My Projects</h2>
        </LaptopHint>
      )}
    </ProfileContainer>
  );
};

export const ProfileContainer = styled(PageContainer)`
  position: relative;
  height: 100vh;
  color: white;
  padding: 1vh;
`;

const Hint = styled.div`
  margin-top: 80vh;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(100%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};
  transition: all 0.05s ease-in-out;
  h2 {
    font-size: 25px;
    text-align: center;
    ${tab({
      display: "none"
    })}
  }
`;
const LaptopHint = styled.div`
  margin-top: 50vh;
  transform: ${(props) =>
    props.view === "true" ? "translateX(0)" : "translateX(100%)"};

  opacity: ${(props) => (props.view === "true" ? "1" : "0")};
  transition: all 0.05s ease-in-out;
  h2 {
    font-size: 25px;
    text-align: center;
  }
`;
