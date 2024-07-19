import { MeshDistortMaterial, useGLTF } from "@react-three/drei";
import { ColorDepth, EffectComposer, Outline, Select, Selection } from "@react-three/postprocessing";
import { useState } from "react";

export function Skull() {
  const wolfModel = useGLTF('./assets/canis-lupus.glb')


  return (
    <>
     <mesh receiveShadow castShadow position={[0, 0, -20]}>
      <primitive
          scale={0.25}
          position={[0, 0, 0]}
          rotation={[0.4, -1.2, 0]}
          object={wolfModel.scene}
        />
      </mesh>
      <directionalLight
        intensity={5}
        // color={'#ff24b6'}
        color={'#ffffff'}
        position={[2, 0, 2]}
      />
    </>
  );
}