import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function Galaxy() {
  const galaxyRef = useRef();

  const params = {
    count: 30000,
    radius: 14,
    branches: 6,
    spin: 1.5,
    randomness: 0.7,
    randomnessPower: 3,
  };

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(params.count * 3);
    const colors = new Float32Array(params.count * 3);

    const insideColor = new THREE.Color("#ffffff");
    const middleColor = new THREE.Color("#55d6ff");
    const outsideColor = new THREE.Color("#6d5dfc");

    for (let i = 0; i < params.count; i++) {
      const i3 = i * 3;

      const radius = Math.random() * params.radius;

      const spinAngle = radius * params.spin;

      const branchAngle =
        ((i % params.branches) / params.branches) *
        Math.PI *
        2;

      const randomX =
        Math.pow(Math.random(), params.randomnessPower) *
        (Math.random() < 0.5 ? -1 : 1) *
        params.randomness *
        radius *
        0.15;

      const randomY =
        (Math.random() - 0.5) *
        (1 - radius / params.radius) *
        1.2;

      const randomZ =
        Math.pow(Math.random(), params.randomnessPower) *
        (Math.random() < 0.5 ? -1 : 1) *
        params.randomness *
        radius *
        0.15;

      positions[i3] =
        Math.cos(branchAngle + spinAngle) * radius +
        randomX;

      positions[i3 + 1] = randomY;

      positions[i3 + 2] =
        Math.sin(branchAngle + spinAngle) * radius +
        randomZ;

      let mixedColor;

      if (radius < params.radius * 0.3) {
        mixedColor = insideColor.clone();
        mixedColor.lerp(
          middleColor,
          radius / (params.radius * 0.3)
        );
      } else {
        mixedColor = middleColor.clone();
        mixedColor.lerp(
          outsideColor,
          (radius - params.radius * 0.3) /
            (params.radius * 0.7)
        );
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    return {
      positions,
      colors,
    };
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!galaxyRef.current) return;

    // Auto Rotation
    galaxyRef.current.rotation.y =
      clock.elapsedTime * 0.04;

    // Mouse Tilt
    galaxyRef.current.rotation.x +=
      (mouse.y * 0.25 -
        galaxyRef.current.rotation.x) *
      0.04;

    galaxyRef.current.rotation.z +=
      (mouse.x * 0.25 -
        galaxyRef.current.rotation.z) *
      0.04;
  });

  return (
    <group ref={galaxyRef}>

    

      {/* Galaxy Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={params.count}
            itemSize={3}
          />

          <bufferAttribute
            attach="attributes-color"
            array={colors}
            count={params.count}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.045}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.95}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}