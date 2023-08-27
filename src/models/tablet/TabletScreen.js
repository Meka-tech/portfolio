import { Html } from "@react-three/drei";
import React from "react";
import styled from "styled-components";
import {
  EmailLottie,
  LinkedLottie,
  TwitterLottie,
  WhatsappLottie
} from "./TabletLottie";

export const TabletScreenHeader = () => {
  return (
    <Header>
      <h1>Let's Connect !</h1>
    </Header>
  );
};
export const TabletScreenFooter = () => {
  return <Footer></Footer>;
};
export const TabletScreenBody = () => {
  return (
    <MainBody>
      <SocialMediaGrid>
        <EmailLottie />
        <TwitterLottie />
        <WhatsappLottie />
        <LinkedLottie />
      </SocialMediaGrid>
    </MainBody>
  );
};

const MainBody = styled.div`
  /* background-color: red; */
  position: relative;
  width: 27vw;
  height: 38vw;
  z-index: 1000;
  padding: 2vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SocialMediaGrid = styled.div`
  display: grid;
  max-width: 100%;
  max-height: 100%;
  grid-template-columns: 12vw 12vw;
  grid-row-gap: 2vw;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
const Header = styled.div`
  width: 27vw;
  height: 4vw;
  z-index: 1000;
  position: relative;
  h1 {
    transform: scale(1.5);
    color: white;
    margin-left: 8vw;
  }
`;
const Footer = styled.div`
  width: 17vw;
  height: 7vw;
  z-index: 1000;
  opacity: 0.5;
  position: relative;
`;
