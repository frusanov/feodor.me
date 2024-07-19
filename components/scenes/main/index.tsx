'use client';

import {Center, Environment, Html, Text3D } from '@react-three/drei';


import { MainPageChat } from './chat';
import { Laptop } from './laptop';
import { Agent } from './agent';
import { useFrame, useThree } from '@react-three/fiber';
import { type RefObject, useEffect, useRef } from 'react';
import { easings, useChain, useSpring } from '@react-spring/three';
import { Object3D } from 'three';

// https://discoverthreejs.com/book/first-steps/animation-system/

const useSpacialSpring = (object3D: Object3D | RefObject<Object3D>) => {
  const isRef = Object.hasOwn(object3D, 'current'); 
  const isInit = useRef(false);

  const getSafeObject3D = () => {
    return (isRef ? (object3D as RefObject<Object3D>).current : object3D) as Object3D;
  }

  const [springs, api] = useSpring(() => ({
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    onChange({ value: { position, rotation, scale } }) {
      if (!isInit.current) return;

      getSafeObject3D().position.set(...position as [number, number, number]);
      getSafeObject3D().rotation.set(...rotation as [number, number, number]);
      getSafeObject3D().scale.set(...scale as [number, number, number]);
    },
  }));

  useEffect(() => {
    const position = getSafeObject3D().position;
    const rotation = getSafeObject3D().rotation;
    const scale = getSafeObject3D().scale;

    api.set({
      position: [position.x, position.y, position.z],
      rotation: [rotation.x, rotation.y, rotation.z],
      scale: [scale.x, scale.y, scale.z],
    });

    isInit.current = true;
  });


  return [springs, api] as const;
}

export function MainPageScene(props: any) {

  const { camera } = useThree();
  // const welcomeRef = useRef<Object3D>();

  const [cameraSpring, cameraApi] = useSpacialSpring(camera);

  // const [welcomeSpring, welcomeApi] = useSpacialSpring(welcomeRef as RefObject<Object3D>);

  const script = async () => {
    // console.log({welcomeRef});
    

    cameraApi.set({
      position: [0, 0.4, 0],
      rotation: [-0.25, 0, 0],
    });

    // await new Promise((resolve) => setTimeout(resolve, 2000));

    await Promise.allSettled([
      new Promise((resolve) => {
        cameraApi.start({
          position: [0, 0.4, 0.4],
          rotation: [-0.15, 0, 0],
          config: {
            duration: 500,
            easing: easings.easeInOutCubic
          },
          onResolve: resolve,
        });
      }),
      // new Promise((resolve) => {
      //   welcomeApi.start({
      //     position: [0, 0.5, 1],
      //     config: {
      //       duration: 500,
      //       easing: easings.easeInOutCubic
      //     },
      //     onResolve: resolve,
      //   });
      // }),
      // new Promise((resolve) => {
      //   welcomeApi.start({
      //     config: {
      //       duration: 500,
      //       easing: easings.easeInOutCubic
      //     },
      //     onResolve: resolve,
      //   });
      // }),
    ]);



    await new Promise((resolve) => setTimeout(resolve, 2000));

    await cameraApi.start({
      position: [0, 0.5, 0.8],
    });
  }

  useEffect(() => {
    console.log({ camera });

    script();
  }, []);

  return (
    <>
      <ambientLight intensity={.5} color={0xffffff} />

      {/* <Laptop /> */}

      <directionalLight
        intensity={3}
        // color={'#ff24b6'}
        color={'#ffffff'}
        position={[0, 2, 2]}
      />

        <group>
          <Agent position={[0.5, 0.05, 0]} scale={0.35} />

          {/* <Center top>
            <Text3D
              font={'/typeface/Comfortaa_Regular.json'}
              scale={0.05}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={0.1}
              height={0.5}
              lineHeight={0.6}
              position={[0, 0, -1]}
              ref={welcomeRef}
            >
              {'Welcome!'}
              <meshNormalMaterial />
            </Text3D>
          </Center> */}

          {/* <Center top>

            <Text3D
              font={'/typeface/Comfortaa_Regular.json'}
              scale={0.03}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={0.1}
              height={1}
              lineHeight={0.6}
            >
              You are on personal{'\n'}
              web page of{'\n'}
              Feodor Rusanov
              <meshNormalMaterial />
            </Text3D>
          </Center> */}


          <Html
            distanceFactor={1.5}
            position={[0.2, 0.3, 0]}
            scale={0.2}
            style={{
              backdropFilter: 'blur(40px)'
            }}
            transform
          >
            <MainPageChat />
          </Html>
        </group>

      <Environment preset="sunset" environmentIntensity={0.5} background backgroundBlurriness={1} />
    </>
  );
}