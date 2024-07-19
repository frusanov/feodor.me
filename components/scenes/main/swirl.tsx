import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { DoubleSide, Vector2, Vector3 } from "three";
// import glsl from "glslify";

// https://www.shadertoy.com/view/fljBWc


export function Swirl() {
  const [coneVertexShader] = useState(/* glsl */`
    uniform float iTime;
    varying vec2 vUv;

    float PI = radians(180.0);

    void main()	{
      float segmentation = uv.x * PI * 2.0;

      // vUv = vec2(
      //   pow(uv.y, 1.0 - abs((1.0 - sin(segmentation)) / 2.0)),
      //   pow(uv.y, 1.0 - abs((1.0 - cos(segmentation)) / 2.0))
      // );

      vUv = vec2(
        pow(1.0 - abs((1.0 - cos(segmentation)) / 2.0), uv.y),
        uv.y
      );

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
      coneRef.current.rotation.y = coneRef.current.rotation.y + 0.01;
      coneRef.current.position.z = Math.sin(time * 4) * 4;
    }

    if (planeRef.current) {
      planeRef.current.material.uniforms.iTime.value = time + 300;
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
    <group position={[0, 0, -30]}>
      <mesh rotation={[1.5, 0, 0]} position={[0, 0]} scale={4} ref={coneRef}>
        <coneGeometry
          args={[8, -16, 32, 32, true]}
        />
        <shaderMaterial
          transparent
          fog
          uniforms={uniforms}
          vertexShader={coneVertexShader}
          fragmentShader={fragmentShader}
          side={DoubleSide}
        />
      </mesh>
      <mesh position={[0, 0, -40]} ref={planeRef}>
        <planeGeometry args={[200, 200]} />
        <shaderMaterial
          uniforms={uniforms}
          transparent
          vertexShader={planeVertexShader}
          fragmentShader={fragmentShader}
          side={DoubleSide}
        />
      </mesh>
    </group>
  )
}