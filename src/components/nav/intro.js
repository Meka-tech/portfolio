import Typewriter from "typewriter-effect";

<Typewriter
  onInit={(typewriter) => {
    typewriter
      .changeDelay(100)
      .typeString("This is <strong>Batman</strong")
      .callFunction(() => {
        console.log("String typed out!");
      })
      .pauseFor(300)
      .deleteChars(6)
      .typeString("Nnaemeka and this is my Por")
      .pauseFor(100)
      .deleteChars(3)
      .typeString("secret project.")
      .pauseFor(200)
      .typeString("Through sorcery and magic, I combined 3D and 2D elem")
      .pauseFor(300)
      .changeDeleteSpeed(5)
      .deleteAll()
      .typeString("I've said too much")
      .deleteAll()
      .start();
  }}
/>;
