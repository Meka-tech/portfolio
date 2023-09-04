import React from "react";
import { BrainModel } from "./Brain";
import { Neurons } from "./NeuronEnvironment";

export const SkillModel = () => {
  return (
    <group>
      <BrainModel />
      <Neurons />
    </group>
  );
};
