import Lottie from "lottie-react";
import styled from "styled-components";
import Loader from "../../../lottie/loader.json";
import explore from "../../../lottie/explore.json";
import { tab } from "../../../deviceStyle";

export const InfinityLottie = () => {
  return (
    <InfinityContainer>
      <Lottie animationData={Loader} loop={true} />
    </InfinityContainer>
  );
};
export const ExploreLottie = () => {
  return (
    <ExploreContainer>
      <Lottie animationData={explore} loop={true} />
    </ExploreContainer>
  );
};

const InfinityContainer = styled.div`
  width: 50px;
  ${tab({
    width: "80px"
  })}
`;
const ExploreContainer = styled.div`
  width: 30px;
  margin-left: 5px;
  ${tab({
    width: "50px"
  })}
`;
