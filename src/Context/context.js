import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import "../App.css";

const HologramContext = createContext();
const TransitionContext = createContext();

export const useHologram = () => {
  return useContext(HologramContext);
};
export const useTransition = () => {
  return useContext(TransitionContext);
};

export const HologramProvider = ({ children }) => {
  const [transition, setTransition] = useState(false);

  const ToggleTransition = () => {
    setTransition(true);
    setTimeout(() => setTransition(false), [800]);
  };
  return (
    <HologramContext.Provider value={transition} className="App">
      <TransitionContext.Provider value={ToggleTransition}>
        {children}
      </TransitionContext.Provider>
    </HologramContext.Provider>
  );
};
