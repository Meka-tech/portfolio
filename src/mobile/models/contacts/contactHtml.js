import React from "react";
import styled from "styled-components";
import {
  EmailLottie,
  LinkedLottie,
  TwitterLottie,
  WhatsappLottie
} from "./PhoneLottie";

export const ContactHtml = () => {
  return (
    <Container>
      <Header>My Socials</Header>
      <SocialMediaGrid>
        <EmailLottie />
        <TwitterLottie />
        <WhatsappLottie />
        <LinkedLottie />
      </SocialMediaGrid>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  z-index: 1001;
  transform: translateZ(5000px);
  pointer-events: auto;
`;
const Header = styled.h2`
  color: black;
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: bolder;
`;
const SocialMediaGrid = styled.div`
  margin-top: 80px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  max-width: 100%;
  max-height: 100%;
  grid-template-columns: 45% 45%;
  grid-row-gap: 40px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
