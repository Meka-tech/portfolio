import React from "react";
import { SingularSkillModel } from "./SingularSkillModel";

export const MultipleSkillModels = () => {
  return (
    <group>
      {/* //position x is depth , z is up and down , y is left and right */}
      <SingularSkillModel
        position={[-4, -13.3, 0.5]}
        rotation={[1.5, 1.3, 0]}
        offsetEnter={0.58}
        offsetLeave={0.64}
      />
      <SingularSkillModel
        position={[-3.5, -13, 2.2]}
        rotation={[1.5, 0.5, 0]}
        offsetEnter={0.595}
        offsetLeave={0.66}
        leftSide={true}
      />
      <SingularSkillModel
        position={[-4, -13.3, 3.8]}
        rotation={[1.5, 1.3, 0]}
        offsetEnter={0.61}
        offsetLeave={0.68}
      />
      <SingularSkillModel
        position={[-3.5, -13, 5.5]}
        rotation={[1.5, 0.5, 0]}
        offsetEnter={0.627}
        offsetLeave={0.7}
        leftSide={true}
      />
    </group>
  );
};
