import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";
import { useNavOption } from "./Context/context";
export const Marker = ({ originRef }) => {
  const [moveCamera, setMoveCamera] = useState(false);
  const markerRef = useRef();
  const vec = new Vector3();
  const { ToggleNavOption, navOption } = useNavOption();
  useFrame((state) => {
    if (navOption === "Bio") {
      state.camera.lookAt(markerRef.current.position);
      state.camera.position.lerp(vec.set(0, 0, 0), 0.01);
      state.camera.updateProjectionMatrix();
    } else {
      state.camera.rotation.set(0, 0, 0);
      state.camera.position.lerp(vec.set(0, 0, 5), 0.01);
      state.camera.updateProjectionMatrix();
    }
    return null;
  });
  return (
    <mesh ref={markerRef} position={[-6, 0, 0]}>
      <sphereBufferGeometry attach={"geometry"} args={[1, 1, 7]} />
      <meshLambertMaterial attach={"material"} color={"red"} />
    </mesh>
  );
};
