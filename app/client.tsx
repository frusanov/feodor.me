'use client';

import { CameraControls, OrthographicCamera, PerspectiveCamera, Preload, SoftShadows, StatsGl } from '@react-three/drei';
import { Canvas, useThree } from "@react-three/fiber";
import { Bloom, ChromaticAberration,EffectComposer,Noise, Vignette,TiltShift2, ColorDepth,  } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Vector2, Vector3 } from 'three';
import { MainPageScene } from '@/components/scenes/main';
import { useEffect } from 'react';


export function IndexPageClient(props: any) {

  return (
    <Canvas camera={{ fov: 45, position: [0,0.4,0], rotation: [-0.2,0,0] }} style={{ width: '100%', height: '100vh', backgroundColor: '#ffffff' }} dpr={0.75}>
      <StatsGl className="stats" />
      <MainPageScene />

      {/* <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} /> */}
      {/* <PerspectiveCamera makeDefault position={[0, 0, 0]} /> */}
      <Preload all />
      

      <EffectComposer>
        <ChromaticAberration
          blendFunction={BlendFunction.ALPHA}
          offset={new Vector2(0.005, 0.005)}
          radialModulation
          modulationOffset={0.8}
        />

        <TiltShift2 blur={.2} />
        <Noise opacity={0.05} />
        
        {/* <Vignette eskil={false} offset={0.25} darkness={0.25} /> */}
      </EffectComposer>

      <SoftShadows />
      
    </Canvas>
  );
}
