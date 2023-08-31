import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  opacity: ${(props) => props.opacity};
  font-family: "HK Grotesk", sans-serif;
`;
