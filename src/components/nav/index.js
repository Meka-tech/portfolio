import styled from "styled-components";
import BG from "../../images/texture.png";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import { Projects } from "./projects";

export const Nav = () => {
  const NavigationComponent = () => {
    return (
      <>
        {" "}
        <NavItem>
          <Image img={BG} />
          {/* <h1>BIO</h1> */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(200).typeString("BIO").start();
            }}
          />
        </NavItem>
        <NavItem>
          <Image img={BG} />
          {/* <h1>Skills</h1> */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(200).typeString("SKILLS").start();
            }}
          />
        </NavItem>
        <NavItem onClick={() => setShowCase(Projects)}>
          <Image img={BG} />
          {/* <h1>Projects</h1> */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(200).typeString("PROJECTS").start();
            }}
          />
        </NavItem>
        <NavItem>
          <Image img={BG} />
          {/* <h1>Contact</h1> */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(200).typeString("CONTACT").start();
            }}
          />
        </NavItem>
      </>
    );
  };
  const [showCase, setShowCase] = useState(NavigationComponent);
  useEffect(() => {
    //run animation
    return () => {};
  }, [showCase]);

  return (
    <Container>
      <Body>{showCase}</Body>{" "}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Body = styled.div``;
const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) => props.img});
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.1;
  :hover {
    opacity: 0.2;
  }
`;

const NavItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  z-index: 5;
  background-color: rgba(150, 222, 209, 0.05);
  backdrop-filter: blur(5.1px);
  cursor: pointer;
  padding: 0.8rem;
  transition: 0.2s ease-in-out;
  text-align: left;
  border-radius: 8px;
  transform: perspective(900px) rotateX(60deg) scale(0.9);
  transition: 0.5s ease all;
  margin-bottom: 1.5rem;
  font-size: 20px;
  font-weight: 500;
  color: white;

  h1 {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 500;
  }
  :hover {
    transform: scale(1.4);
    z-index: 50;
    transform: rotate(0) scale(1) translateY(10px);
    background-color: rgba(150, 222, 209, 0.3);
    border: 1px solid rgb(135, 206, 235);
  }
`;
