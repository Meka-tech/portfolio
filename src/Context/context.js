import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import "../App.css";

const HologramContext = createContext();
const TransitionContext = createContext();
const NavigationContext = createContext();

export const useHologram = () => {
  return useContext(HologramContext);
};
export const useTransition = () => {
  return useContext(TransitionContext);
};
export const useNavOption = () => {
  return useContext(NavigationContext);
};
export const HologramProvider = ({ children }) => {
  const [transition, setTransition] = useState(false);

  const [navOption, setNavOption] = useState("Nav");

  const ToggleTransition = () => {
    setTransition(true);
    setTimeout(() => setTransition(false), [800]);
  };
  const ToggleNavOption = (option) => {
    setNavOption(option);
  };
  return (
    <HologramContext.Provider value={transition} className="App">
      <TransitionContext.Provider value={ToggleTransition}>
        <NavigationContext.Provider value={{ ToggleNavOption, navOption }}>
          {children}
        </NavigationContext.Provider>
      </TransitionContext.Provider>
    </HologramContext.Provider>
  );
};
