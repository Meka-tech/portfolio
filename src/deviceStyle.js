import { css } from "styled-components";

export const SmallMobile = (props) => {
  return css`
    @media only screen and (min-width: 0px) and (max-width: 500px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 500px) {
      ${props}
    }
  `;
};
export const tab = (props) => {
  return css`
    @media only screen and (min-width: 768px) {
      ${props}
    }
  `;
};
export const LargeScreen = (props) => {
  return css`
    @media only screen and (min-width: 1400px) {
      ${props}
    }
  `;
};
export const fourK = (props) => {
  return css`
    @media only screen and (min-width: 1536px) {
      ${props}
    }
  `;
};
