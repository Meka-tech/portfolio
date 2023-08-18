import React from "react";
import styled from "styled-components";
import BG from "../../../images/ProfileBg.png";

export const Profile = () => {
  return (
    <Container>
      <Casing>
        <Image img={BG} />
        <Body>
          <InnerBody>
            <ProfileImage />
            <ProfileInformation>
              <h1>Profile</h1>
              <QAGrid>
                <QAsection>
                  <h2>First Name:</h2>
                </QAsection>
                <QAsection>
                  <h3>Samuel</h3>
                </QAsection>
                <QAsection>
                  <h2>Last Name:</h2>
                </QAsection>
                <QAsection>
                  <h3>Onyeji</h3>
                </QAsection>
                <QAsection>
                  <h2>Race:</h2>
                </QAsection>
                <QAsection>
                  <h3>Negro</h3>
                </QAsection>
                <QAsection>
                  <h2>Nationality:</h2>
                </QAsection>
                <QAsection>
                  <h3>Nigerian</h3>
                </QAsection>
                <QAsection>
                  <h2>Profession:</h2>
                </QAsection>
                <QAsection>
                  <h3>Frontend Developer</h3>
                </QAsection>
                <QAsection>
                  <h2>Degree:</h2>
                </QAsection>
                <QAsection>
                  <h3>Bachelor of Engineering</h3>
                </QAsection>
                <QAsection>
                  <h2>Department:</h2>
                </QAsection>
                <QAsection>
                  <h3>Electronic and Computer Engineering.</h3>
                </QAsection>
                <QAsection>
                  <h2>University:</h2>
                </QAsection>
                <QAsection>
                  <h3>University of Nigeria, Nsukka</h3>
                </QAsection>
              </QAGrid>
            </ProfileInformation>
            <Hobbies>
              <h1>Hobbies</h1>
              <p>
                {" "}
                Hey there, I'm Nnaemeka - a creative enthusiast and a tech-savvy
                adventurer By day, I'm a Frontend developer, crafting innovative
                solutions and bringing ideas to life. But once the sun sets, I'm
                all about embracing the joys of life outside the office. 🎮
                Gaming is my ultimate escape! Whether it's conquering virtual
                realms, joining forces with friends, or just having a good
                old-fashioned showdown, you'll find me fully immersed in the
                world of games. 🎶 When I'm not leveling up in a game, you can
                bet I'm grooving to the beats of my favorite tunes. Music is the
                soundtrack to my life. 📚 Curling up with a good book is my idea
                of heaven. I love diving into different worlds, learning new
                perspectives, and getting lost in the magic of storytelling. Ask
                me for book recommendations anytime! Movies(and anime) are my
                go-to for entertainment, and I'm a certified film buff. From
                mind-bending sci-fi to action block-busters, I'm always game for
                a movie night extravaganza. But it's not all about leisure - my
                passion for technology and creativity fuels my drive in the
                professional realm. With a knack for problem-solving, I bring a
                unique blend of fun and professionalism to every project I
                undertake. So, if you're looking for someone who can code like a
                wizard and has a playlist for every occasion, look no further!
                Let's connect and bring some excitement to our next venture
                together.
              </p>
            </Hobbies>
            <Classified>
              <h1>Classified</h1>
              <p>Agent Profile - Codename: Meka</p>
              <p>Name: Classified (Codename: Meka)</p>{" "}
              <p>Alias: The Shadow Phantom 🌑</p>{" "}
              <p>
                Assignment: Protecting the World from the Shadows Profile: Top
                Secret: Eyes Only Agent Meka, codenamed "The Shadow Phantom," is
                the epitome of stealth, skill, and sophistication. A master of
                disguise and the art of blending into any environment, Meka
                moves through the world like a whisper in the dark. Background:
                Meka's origins are shrouded in mystery, and the details of their
                training remain classified. Rumors suggest they were molded by
                an elite covert agency, where they honed their combat prowess
                and tactical brilliance. Special Skills: Martial Arts Virtuoso:
                An expert in various martial arts disciplines, Meka can
                neutralize opponents with seemingly effortless grace. Espionage
                and Intelligence Gathering: Equipped with the latest
                surveillance gadgets, Meka infiltrates enemy strongholds to
                gather critical intelligence. Hacking Maestro: Meka's digital
                prowess is unmatched, bypassing firewalls and encryption like a
                digital phantom. Mission: As the world faces unprecedented
                threats, Agent Meka takes on missions that push the boundaries
                of possibility. From preventing rogue nations from obtaining
                dangerous technology to thwarting global cyber-attacks, Meka's
                dedication to the greater good is unwavering. Style: Meka's
                fashion sense is as sharp as their skills. Known for wearing
                impeccably tailored suits that transition seamlessly between
                high-society events and covert operations, Meka's style has
                become an inspiration for fashion-forward agents worldwide.
                Interests: Outside the world of espionage, Meka finds solace in
                the art of calligraphy, spending hours perfecting the strokes of
                elegant characters. This ancient art form provides a moment of
                peace amid the chaos of a secret agent's life. Warning: Approach
                Agent Meka with utmost respect and caution. Engaging in combat
                with this enigmatic agent is ill-advised, as Meka's strategic
                brilliance and lightning-fast reflexes make them a formidable
                adversary. Remember, this is all part of an imaginative world
                where you are the secret agent codenamed Meka. Embrace the
                thrill of your covert missions and let your imagination soar as
                you protect the world from the shadows!
              </p>
            </Classified>
          </InnerBody>
        </Body>
      </Casing>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  height: 14vw;
  width: 10vw;
  left: 11vw;
  top: 0.5vw;
  transition: all ease-out 0.2s;
  :hover {
    transform: scale(2);
    top: 5vw;
  }
  z-index: 1001;
`;
const Casing = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const Body = styled.div`
  height: 80%;
  width: 100%;
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  background-image: url(${(props) => props.img});
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.6;
  transition: all ease 0.1s;
`;

const InnerBody = styled.div`
  position: relative;
  padding: 1.5vw 0.65vw;
  box-sizing: border-box;
`;
const ProfileImage = styled.div`
  width: 2vw;
  height: 2vw;
  border-radius: 0.5rem;
  background-color: white;
  transition: all ease 0.2s;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 0.5vw;
  :hover {
    transform: scale(1.2);
  }
`;

const ProfileInformation = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 0.1vw solid white;
  width: 5.5vw;
  height: 3vw;
  background-color: rgba(20, 90, 74, 0.4);
  transition: all ease-out 0.3s;
  cursor: pointer;
  position: absolute;
  right: 0.5vw;
  h1 {
    color: white;
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 0.19vw;
    text-align: center;
    margin-top: 1%;
  }
  :hover {
    border: none;
    transform: scale(2.5);
    margin-top: 2vw;
    background-color: rgba(20, 90, 74, 0.9);
    z-index: 100;
    height: fit-content;
    padding-bottom: 0.5vw;
  }
`;

const QAGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-column-gap: 5%;
  color: white;
  padding: 2%;
  box-sizing: border-box;
`;

const QAsection = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  text-overflow: ellipsis;
  max-width: 4vw;
  cursor: pointer;
  line-height: 0.3vw;
  h2 {
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-size: 0.175vw;
  }
  h3 {
    margin: 0;
    padding: 0;
    font-size: 0.17vw;
    font-weight: 400;
  }
`;

const Hobbies = styled.div`
  border: 0.1vw solid white;
  width: 6.2vw;
  height: 4vw;
  background-color: rgba(20, 90, 74, 0.4);
  transition: all ease-in 0.35s;
  cursor: pointer;
  position: absolute;
  right: 0.5vw;
  top: 5vw;
  color: white;
  overflow: hidden;
  padding: 2%;
  box-sizing: border-box;
  p {
    font-weight: 500;
    font-size: 0.17vw;
    line-height: 0.25vw;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 0.19vw;
    text-align: center;
  }
  :hover {
    border: none;
    transform: scale(2.1);
    background-color: rgba(20, 90, 74, 0.9);
    height: fit-content;
    z-index: 100;
    margin-top: 2.5vw;
  }
`;

const Classified = styled.div`
  border: 0.1vw solid white;
  width: 2vw;
  height: 4vw;
  position: absolute;
  left: 0.5vw;
  top: 4vw;
  color: white;
  overflow: hidden;
  padding: 2%;
  box-sizing: border-box;
  background-color: rgba(20, 90, 74, 0.4);
  p {
    font-weight: 500;
    font-size: 0.17vw;
    line-height: 0.2vw;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 0.19vw;
    text-align: center;
    color: red;
  }
`;
