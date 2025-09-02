import React from "react";
import styled from "styled-components";

export const SideContact = () => {
  return (
    <Container>
      <TopSection>
        <Header>To Contact Me</Header>
      </TopSection>
      <Body>
        <Item>
          <a href="mailto:nnaemekaonyeji27@gmail.com">Gmail </a>
        </Item>
        <Item>
          <a
            href="https://x.com/lastsonofcy?s=21&t=8EAVGsIxgU0ZTKqRWd0z5g"
            target="_blank"
            rel="noreferrer"
          >
            Twitter{" "}
          </a>
        </Item>
        <Item>
          <a href="https://wa.me/08152969574" target="_blank" rel="noreferrer">
            Whatsapp
          </a>
        </Item>
        <Item>
          <a
            href="https://www.linkedin.com/in/samuel-onyeji-78a141256/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </Item>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const TopSection = styled.div`
  display: flex;
`;
const Header = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 20px;
  text-align: left;
`;
const Body = styled.ul`
  padding: 0 10px;
  margin: 0;
`;

const Item = styled.li`
  margin-top: 20px;
  a {
    font-size: 18px;
    text-decoration: none;
    color: inherit;
  }
`;
