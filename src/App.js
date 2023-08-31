import "./App.css";

import styled from "styled-components";
import { HologramProvider } from "./Context/context";
import { MainCanvas } from "./Canvas";
import { MobileView } from "./mobile/MobileView";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  return (
    <HologramProvider className="App">
      {!isMobile && (
        <div className="laptopView">
          <MainCanvas />
        </div>
      )}

      {isMobile && (
        <div className="mobileView">
          <MobileView />
        </div>
      )}
      {/* <MobileView /> */}
    </HologramProvider>
  );
}

export default App;

const UIBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
