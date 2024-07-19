import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { DoubleSide, Vector2, Vector3, Vector3Like, Vector3Tuple } from "three";
// import glsl from "glslify";

// https://www.shadertoy.com/view/fljBWc


export interface AgentProps {
  readonly position?: Vector3 | Vector3Tuple
  readonly scale?: number
}

export function Agent({ position = [0, 0, 0], scale = 1 }: AgentProps) {
  const [coneVertexShader] = useState(/* glsl */`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `);

  const [planeVertexShader] = useState(/* glsl */`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `);

  const [fragmentShader] = useState(/* glsl */`
    uniform float iTime;
    uniform vec2 iResolution;
    varying vec2 vUv;
    uniform sampler2D iChannel0;

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    
    float t = iTime;
    float x = uv.x;
    float y = uv.y;
    float d = length(uv);
    
    float r = 0.0;
    float g = 0.0;
    float b = 0.0;
    
    d = d * 10.0 * sin(t / 10.0);
    
    r = abs(cos(d + y * cos(t) * 5.0) + sin(d + x * sin(t))) / 2.0;
    
    d = d * 1.01;
    t = t + 0.5;
    
    g = abs(cos(d + y * cos(t) * 5.0) + sin(d + x * sin(t))) / 2.0;
    
    d = d * 1.01;
    t = t + 0.5;
    
    b = abs(0.5 - abs(cos(d + y * cos(t) * 5.0) + sin(d + x * sin(t))));

    // Output to screen
    fragColor = vec4(r, g, b, (r + g + b) / 3.0);
}

    void main() {
      mainImage(gl_FragColor, vUv);
    }
  `);

  const coneRotation = useRef([1.5, 0, 0]);

  const coneRef = useRef();
  const planeRef = useRef();
  const noiseTexture = useTexture("/noise2.png");

  useFrame((state) => {
    let time = state.clock.getElapsedTime();

    const newRotation = Array.from(coneRotation.current);

    newRotation[1] = newRotation[1] + 0.1;

    coneRotation.current = newRotation;

    if (coneRef.current) {
      coneRef.current.material.uniforms.iTime.value = time + 30;
      // coneRef.current.rotation.y = coneRef.current.rotation.y + 0.001;
      // coneRef.current.position.z = Math.sin(time * 4) * 4;
    }

    if (planeRef.current) {
      planeRef.current.material.uniforms.iTime.value = time + 40;
    }
  });

  const uniforms = useMemo(
    () => ({
      iTime: {
        type: "f",
        value: 1.0
      },
      iResolution: {
        type: "v2",
        value: new Vector2(1, 1)
      },
      iChannel0: {
        type: "t",
        value: noiseTexture
      }
    }),
    []
  );

 
  return (
    <group scale={0.2 * scale} position={position}>
      <mesh ref={coneRef}>
        <sphereGeometry />
        <shaderMaterial
          transparent
          uniforms={uniforms}
          vertexShader={coneVertexShader}
          fragmentShader={fragmentShader}
          side={DoubleSide}
        />
      </mesh>
      <mesh scale={0.8 * scale} ref={planeRef}>
        <sphereGeometry />  
        <shaderMaterial
        blendColor={0x000000}
          uniforms={uniforms}
          vertexShader={planeVertexShader}
          fragmentShader={fragmentShader}
          side={DoubleSide}
        />
      </mesh>
    </group>
  )
}