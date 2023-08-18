import Lottie from "lottie-react";
import styled from "styled-components";
import game from "../../lottie/game_dev.json";
import web from "../../lottie/web_dev.json";
import project from "../../lottie/projector.json";

export const GameDevLottie = ({ onClick }) => {
  return (
    <GameContainer onClick={onClick}>
      <Lottie animationData={game} loop={true} />
    </GameContainer>
  );
};

export const WebDevLottie = ({ onClick }) => {
  return (
    <WebContainer onClick={onClick}>
      <Lottie animationData={web} loop={true} />
    </WebContainer>
  );
};
export const ProjectorLottie = ({ showProjection }) => {
  return (
    <ProjectContainer showProjection={showProjection}>
      <Lottie animationData={project} loop={true} speed={0.5} />
    </ProjectContainer>
  );
};

const GameContainer = styled.div`
  width: 20vw;
  position: absolute;
  right: -5vw;
  top: 0.5vw;
  z-index: 1000;
  min-width: 40%;
  cursor: pointer;
`;
const WebContainer = styled.div`
  width: 20vw;
  position: absolute;
  right: -5vw;
  bottom: 2vw;
  z-index: 1000;
  min-width: 40%;
  cursor: pointer;
`;
const ProjectContainer = styled.div`
  width: 8vw;
  position: absolute;
  transform: ${(props) =>
    props.showProjection
      ? `rotateY(180deg) translateY(0)`
      : "rotateY(180deg) translateY(20vw)"};
  left: 4vw;
  bottom: -5vw;
  z-index: 1;
  min-width: 40%;
  transition: ease-in-out 0.3s all;
`;
