import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Arrow from "../../../images/arrow.png";
import BackArrow from "../../../images/backArrow.png";
import { useState } from "react";
import Fade from "react-reveal/Fade";

export const Projects = ({ goBack }) => {
  const [HoverItem, setHoverItem] = useState(false);
  const [HoverMessage, setHoverMessage] = useState("");
  return (
    <Container>
      <Goback onClick={goBack}>
        {" "}
        <img src={BackArrow} alt="BackArrow" />
      </Goback>
      <Item
        onMouseEnter={() => {
          setHoverItem(true);
          setHoverMessage(
            "Bloxx is an Android game made with Unity and C# in 2020 and published to the Android Playstore in 2021. No updates have been made since then."
          );
        }}
        onMouseLeave={() => setHoverItem(false)}
        onClick={() =>
          window.open(
            `https://play.google.com/store/apps/details?id=com.Meka.Bloxx`
          )
        }
      >
        <ItemText>BLOXX</ItemText>
        <img src={Arrow} alt="arrow" />
      </Item>
      <Item
        onMouseEnter={() => {
          setHoverItem(true);
          setHoverMessage(
            "Naija Charades is an Android app made with React native and TypeScript, using firebase as the back-end. Made and Published to the Android appstore in 2022"
          );
        }}
        onMouseLeave={() => setHoverItem(false)}
        onClick={() =>
          window.open(
            `https://play.google.com/store/apps/details?id=com.naija_charades`
          )
        }
      >
        <ItemText>NAIJA CHARADES</ItemText>
        <img src={Arrow} alt="arrow" />
      </Item>
      <Item
        onMouseEnter={() => {
          setHoverItem(true);
          setHoverMessage(
            "Visit my Github repository to see other wonderful unpublished projects"
          );
        }}
        onMouseLeave={() => setHoverItem(false)}
        onClick={() => window.open(`https://github.com/Meka-tech`)}
      >
        <ItemText>GITHUB REPO</ItemText>
        <img src={Arrow} alt="arrow" />
      </Item>
      {HoverItem && (
        <InfoBox Hover={HoverItem}>
          <Fade effect="fadeInDown">{HoverMessage}</Fade>
        </InfoBox>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: visible;
`;
const Goback = styled.div`
  cursor: pointer;
  width: fit-content;
  img {
    height: 3rem;
    width: 5rem;
  }
  margin-bottom: 1rem;
  :hover {
    transform: scale(1.1);
  }
  transition: all ease 0.3s;
`;
const Item = styled.div`
  cursor: pointer;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
  padding: 5px;
  background-color: rgba(0, 36, 57, 0.4);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ease 0.5s;
  box-shadow: 4px 5px 5px rgba(0, 0, 0, 0.1);

  :hover {
    transform: translateX(4%);
    box-shadow: 4px 5px 5px rgba(120, 204, 226, 0.1);
  }

  img {
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
  }
`;

const ItemText = styled.h2`
  color: rgb(120, 204, 226);
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

const InfoBox = styled.div`
  position: absolute;
  height: 20rem;
  width: 25rem;
  right: -30rem;
  top: 0;
  bottom: 0;
  background-color: rgba(30, 144, 255, 0.2);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 1rem;
  font-size: 1.6rem;
  transform: ${(props) => (props.Hover ? `scaleY(1)` : "scaleY(0.1)")};
  transition: all ease 0.5s;
`;
