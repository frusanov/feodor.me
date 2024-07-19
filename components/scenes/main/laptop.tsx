import { MeshPortalMaterial, useGLTF } from "@react-three/drei";
import { Swirl } from "./swirl";

export function Laptop() {
  const laptopModel = useGLTF('./assets/laptop.glb')

  return (
    <group>
     <mesh receiveShadow castShadow position={[0, 0, 0]}>
      <primitive
          scale={1}
          position={[0, 0, 0]}
          // rotation={[0.4, -1.2, 0]}
          object={laptopModel.scene}
        />
      </mesh>
      <mesh position={[0.04, 0.32, -0.51]} rotation={[-0.18, 0, 0]}>
        <planeGeometry
          args={[0.95, 0.68]}
        />
        <MeshPortalMaterial>
          <color attach="background" args={[0xcccccc]} />
          <group scale={0.05} position={[0,0,1.5]}>
            <mesh position={[0, 0, 2]}>
              <Swirl />
            </mesh>
          </group>
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
}