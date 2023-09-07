import React from "react";
import styled from "styled-components";
import { ClickLottie } from "./ProjectLotties";

export const ProjectItem = ({ name, logo, description, link }) => {
  return (
    <Container>
      <Top>
        <h2>{name}</h2>
        {logo && <img src={logo} alt="logo" />}
      </Top>
      <Description>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            Live Project
          </a>
        )}
        <ClickLottie />
      </Description>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 20px;
  background-color: #9b9be4;
  color: black;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 800;
    margin-right: 5px;
  }
  img {
    object-fit: cover;
    width: 15px;
    height: 15px;
    border-radius: 2px;
  }
`;
const Description = styled.div`
  width: 100%;
  position: relative;
  min-height: 150px;
  p {
    margin: 0;
    padding: 0;
    font-size: 10px;
    text-align: left;
    font-weight: 500;
    margin: 5px 0;
  }
  a {
    text-decoration: none;
    font-size: 8px;
    color: white;
    font-weight: 700;
    bottom: 0;
    position: absolute;
    z-index: 10;
  }
`;
