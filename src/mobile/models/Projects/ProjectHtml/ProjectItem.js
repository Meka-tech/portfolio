import React from "react";
import styled from "styled-components";
import { ClickLottie } from "./ProjectLotties";

export const ProjectItem = ({ name, logo, description, link, variant }) => {
  return (
    <Container>
      <Top>
        <h2>{name}</h2>
        {logo && <img src={logo} alt="logo" />}
      </Top>
      <Description>
        <p>{description}</p>
      </Description>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          {variant ? "View Repository" : "Live Project"}
        </a>
      )}

      <ClickLottie />
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
  position: relative;
  padding-bottom: 25px;
  a {
    text-decoration: none;
    font-size: 12px;
    color: white;
    font-weight: 700;
    position: absolute;
    z-index: 100;
    bottom: 10px;
    outline: none;
  }
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
  p {
    margin: 0;
    padding: 0;
    font-size: 10px;
    text-align: left;
    font-weight: 500;
    margin: 5px 0;
  }
`;
