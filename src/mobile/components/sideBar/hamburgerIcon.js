import styled from "styled-components";

import Hamburger from "hamburger-react";

export const HamburgerIcon = ({ setActive, active, variant }) => {
  return (
    <Container>
      <Hamburger
        toggled={active}
        onToggle={(toggled) => {
          if (toggled) {
            setActive(true);
          } else {
            setActive(false);
          }
        }}
        color={
          active && !variant
            ? "white"
            : active && variant
            ? "black"
            : variant && !active
            ? "white"
            : "black"
        }
        size={25}
      />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  z-index: 10000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
