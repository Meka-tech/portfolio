import React from "react";
import styled from "styled-components";
import { tab } from "../../../deviceStyle";
import { SideContact } from "./sideContact";
import { useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { HamburgerIcon } from "./hamburgerIcon";
import { useState } from "react";
import { useEffect } from "react";
import { PointLottie } from "./SideBarLottie";

export const Sidebar = ({ active, setActive, variant, point }) => {
  const ref = useRef(null);
  const [userIos, setUserIos] = useState(false);
  const Platform =
    navigator?.userAgentData?.platform || navigator?.platform || "unknown";

  useEffect(() => {
    if (Platform === "iPad" || Platform === "iPhone" || Platform === "iPod") {
      setUserIos(true);
    }
  }, []);

  useClickOutside(ref, () => setActive(false));
  return (
    <>
      {userIos && (
        <div ref={ref}>
          <HamburgerIcon
            variant={variant}
            active={active}
            setActive={setActive}
          />
          {point && <PointLottie />}

          <Container variant={variant} active={active}>
            <Body>
              <Header>
                Some features are experiemntal on mobile devices.{" "}
              </Header>
              <SideContact />
            </Body>
          </Container>
        </div>
      )}
    </>
  );
};

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5000;
  height: 100vh;
  width: 65vw;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.variant ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"};
  transform: ${(props) =>
    props.active ? "translateX(0)" : "translateX(200%)"};
  transition: all ease-in 0.1s;
  ${tab({
    display: "none"
  })}
  padding: 40px 15px;
  color: ${(props) => (props.variant ? "black" : "white")};
`;

const Body = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 10px 0px;
`;
const Header = styled.h2`
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 24px;
  margin-bottom: 50px;
`;
