import React from "react";
import styled from "styled-components";
import { BannerLottie, ScrollLottie } from "./ProjectLotties";
import { ProjectItem } from "./ProjectItem";
import Bloxx from "../../../../images/projectLogos/bloxx logo.png";
import NC from "../../../../images/projectLogos/naija_charades.jpg";

export const ScreenHtml = () => {
  return (
    <Container>
      <Top>
        <div>
          <Header>PROJECTS</Header>
          <ScrollLottie />
        </div>
        <BannerLottie />
      </Top>
      <Body>
        <ProjectItem
          name={"BLOXX"}
          description={
            "Bloxx is an Android game made with Unity and C# in 2020 and published to the Android Playstore in 2021. No updates have been made since then."
          }
          link={`https://play.google.com/store/apps/details?id=com.Meka.Bloxx`}
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
          name={"Indoor Navigation using Augmented Reality"}
          description={
            "This is an android app developed using Unity,Blender and a lidar sensor. Presented as my final project in a B.Eng degree"
          }
          link={`https://play.google.com/store/apps/details?id=com.naija_charades`}
        />
      </Body>
    </Container>
  );
};

const Container = styled.div`
  height: 1000px;
  width: 100%;
  color: white;
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
