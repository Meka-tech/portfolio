import Lottie from "lottie-react";
import styled from "styled-components";
import Banner from "../../../../lottie/projects_banner.json";
import Scroll from "../../../../lottie/scroll2.json";
import Click from "../../../../lottie/click_hand.json";

export const BannerLottie = () => {
  return (
    <BannerContainer>
      <Lottie animationData={Banner} loop={true} />
    </BannerContainer>
  );
};

export const ScrollLottie = () => {
  return (
    <ScrollContainer>
      <Lottie animationData={Scroll} loop={true} />
    </ScrollContainer>
  );
};
export const ClickLottie = () => {
  return (
    <ClickContainer>
      <Lottie animationData={Click} loop={true} />
    </ClickContainer>
  );
};

const BannerContainer = styled.div`
  width: 50%;
`;
const ScrollContainer = styled.div`
  width: 50px;
  margin: 0 auto;
`;
const ClickContainer = styled.div`
  width: 40px;
  bottom: -10px;
  left: 10px;
  position: absolute;
`;
