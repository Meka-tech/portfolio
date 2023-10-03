import "./App.css";

import styled from "styled-components";
import { HologramProvider } from "./Context/context";
import { MobileView } from "./mobile/MobileView";

function App() {
  return (
    <HologramProvider className="App">
      <MobileView />
    </HologramProvider>
  );
}

export default App;
