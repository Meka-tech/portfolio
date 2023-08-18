export const SkillHeader = ({ textOptions }) => {
  return (
    <mesh position={[-0.7, 0.7, 0]}>
      <textGeometry attach="geometry" args={["Skills", textOptions]} />
      <meshBasicMaterial color="gray" />
    </mesh>
  );
};

export const GameDevText = ({ textOptions, ...rest }) => {
  return (
    <mesh
      position={[-0.6, 0.3, 0]}
      onClick={() => {
        console.log("showcase");
      }}
      {...rest}
    >
      <textGeometry attach="geometry" args={["Game Dev", textOptions]} />
      <meshBasicMaterial color="gray" />
    </mesh>
  );
};

export const WebDevText = ({ textOptions, ...rest }) => {
  return (
    <mesh position={[-0.6, -0.3, 0]} onClick={() => {}} {...rest}>
      <textGeometry attach="geometry" args={["Web Dev", textOptions]} />
      <meshBasicMaterial color="gray" />
    </mesh>
  );
};
