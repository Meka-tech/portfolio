import React, { memo } from "react";
import styled from "styled-components";
import { BannerLottie, ScrollLottie } from "./ProjectLotties";
import { ProjectItem } from "./ProjectItem";
import Bloxx from "../../../../images/projectLogos/bloxx logo.png";
import NC from "../../../../images/projectLogos/naija_charades.jpg";
import IgodoLogo from "../../../../images/projectLogos/igodo.png";
import HavenLogo from "../../../../images/projectLogos/haven-logo.png";
import SC from "../../../../images/projectLogos/steadCare.ico";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import GithubLogo from "../../../../images/Icons/githubLogo.png";

export const ScreenHtml = memo(({ Pos }) => {
  const ref = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    setScrollPos(Pos);
    // console.log(Pos);
  }, [Pos]);

  return (
    <Container ref={ref} top={scrollPos}>
      <Top>
        <div>
          <Header>PROJECTS</Header>
          <ScrollLottie />
        </div>
        <BannerLottie />
      </Top>
      <Body>
        <ProjectItem
          name={"Haven"}
          description={
            "An app built with expo react native and typescript which helps you share your time and skills with your community. live on the app store."
          }
          link={`https://apps.apple.com/ng/app/haven-give-take-trade/id6746972036`}
          logo={HavenLogo}
        />
        <ProjectItem
          name={"Yield Staking DAPP"}
          description={
            "A Yield staking decentralized application (DAPP) where you stake a (fake) tether token and get airdropped with my own (also fake) Reward Token after some time on the ethereum chain. Writted Using Solidity for the smart contracts and react js for frontend."
          }
          link={`https://github.com/Meka-tech/defi-app`}
          // logo={GithubLogo}
          variant
        />
        <ProjectItem
          name={"Synkd"}
          description={`This is a full stack project made with Next js and node js. Using socket for real time commuincation between users,  redux for state management. Offers a real-time chat system and an algorithm for matching users with similar interests.`}
          link={`https://synkd.netlify.app`}
          logo={Bloxx}
        />
        <ProjectItem
          name={"N.Charades"}
          description={
            "Naija Charades is an Android app made with React native and TypeScript, using firebase as the back-end. Made and Published to the Android appstore in 2022"
          }
          link={`https://play.google.com/store/apps/details?id=com.naija_charades`}
          logo={NC}
        />
        <ProjectItem
          name={"IGODO"}
          description={
            "Introducing Igodo App: Revitalize Your Ride, Right at Your Doorstep! Igodo is a revolutionary app designed to bring luxury car detailing to your doorsteps."
          }
          link={`https://play.google.com/store/apps/details?id=com.igodo.net.app&pcampaignid=web_share`}
          logo={IgodoLogo}
        />

        <ProjectItem
          name={"Indoor Navigation using AR"}
          description={
            "This is an android Augmented Reality app developed using Unity,Blender and a lidar sensor. Presented as my final project for a B.Eng degree"
          }
          link={`https://github.com/Meka-tech/ARIndoorNavigation`}
          variant={true}
        />
      </Body>
      <Footer>
        <GitLink
          href="https://github.com/Meka-tech"
          target="_blank"
          rel="noreferrer"
        >
          <GitImg src={GithubLogo} alt="github log" />
        </GitLink>
      </Footer>
    </Container>
  );
});

const Container = styled.div`
  padding-bottom: 50px;
  width: 100%;
  color: white;
  margin-top: ${(props) => `-${props.top}%`};
  transition: all ease 0.1s;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;
const Header = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 26px;
  font-weight: bolder;
  margin-left: 10px;
`;

const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
`;

const Footer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
const GitLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;

const GitImg = styled.img`
  width: 35px;
  height: auto;
  object-fit: contain;
`;
