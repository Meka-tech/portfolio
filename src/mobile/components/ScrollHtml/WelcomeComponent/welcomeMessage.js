import Typewriter from "typewriter-effect";

export const WelcomeMessage = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .changeDelay(100)
          .typeString(" <strong>Hello.</strong")
          .pauseFor(500)
          .deleteChars(6)
          .typeString("Welcome To my web Portfolio.")
          .pauseFor(300)
          .typeString("<br/>I am Nnaemeka ,<br/> a software developer.")
          .pauseFor(500)
          .deleteAll()
          .pauseFor(200)
          .typeString("Scroll down to see more.It's a work in progress.")
          .pauseFor(1000)
          .changeDeleteSpeed(5)
          .deleteAll()
          .start();
      }}
    />
  );
};
