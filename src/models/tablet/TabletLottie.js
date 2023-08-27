import Lottie from "lottie-react";
import styled from "styled-components";
import Email from "../../lottie/social-media/email.json";
import Twitter from "../../lottie/social-media/twitter.json";
import Whatsapp from "../../lottie/social-media/whatsapp.json";
import Linked from "../../lottie/social-media/linkedin.json";

export const EmailLottie = () => {
  return (
    <EmailLottieContainer>
      <a href="mailto:nnaemekaonyeji27@gmail.com">
        <Lottie animationData={Email} loop={true} />
      </a>
    </EmailLottieContainer>
  );
};
export const TwitterLottie = () => {
  return (
    <TwitterLottieContainer>
      <a
        href="https://x.com/lastsonofcy?s=21&t=8EAVGsIxgU0ZTKqRWd0z5g"
        target="_blank"
        rel="noreferrer"
      >
        <Lottie animationData={Twitter} loop={true} />
      </a>
    </TwitterLottieContainer>
  );
};
export const WhatsappLottie = () => {
  return (
    <WhatsappLottieContainer>
      <a href="https://wa.me/08152969574" target="_blank" rel="noreferrer">
        <Lottie animationData={Whatsapp} loop={true} />
      </a>
    </WhatsappLottieContainer>
  );
};
export const LinkedLottie = () => {
  return (
    <LinkedLottieContainer>
      <a
        href="https://www.linkedin.com/in/nnaemeka-onyeji-78a141256"
        target="_blank"
        rel="noreferrer"
      >
        <Lottie animationData={Linked} loop={true} />
      </a>
    </LinkedLottieContainer>
  );
};
const EmailLottieContainer = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  z-index: 1000;
  width: 70%;
  height: 8vw;
  background-color: rgba(255, 0, 0, 0.5);
  padding: 1vw;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: rgba(255, 0, 0, 1);
    transform: scale(1.4);
    border-radius: 50%;
  }
`;
const TwitterLottieContainer = styled(EmailLottieContainer)`
  background-color: rgba(0, 0, 0, 0.5);
  :hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;
const WhatsappLottieContainer = styled(EmailLottieContainer)`
  background-color: rgba(255, 255, 255, 0.5);
  :hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;
const LinkedLottieContainer = styled(EmailLottieContainer)`
  background-color: rgba(0, 114, 177, 0.5);
  :hover {
    background-color: rgba(0, 114, 177, 1);
  }
`;
