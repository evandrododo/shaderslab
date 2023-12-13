import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Controls = () => {
  const { camera } = useThree((state) => state);
  const initialLookAt = [0, 0, 4];
  const lookAtTarget = useRef({ x: initialLookAt[0], y: initialLookAt[1], z: initialLookAt[2] }).current;

  const finalLookAt = [4, 0, 0];
  const duration = 1;

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Animação GSAP para o lookAt
    gsap.to(lookAtTarget, {
      x: finalLookAt[0],
      y: finalLookAt[1],
      z: finalLookAt[2],
      duration: duration,
      onUpdate: () => {
        camera.lookAt(lookAtTarget.x, lookAtTarget.y, lookAtTarget.z);
        camera.updateMatrixWorld();
      },
      repeat: -1, // Repetir infinitamente
      yoyo: true, // Voltar à posição inicial depois de atingir o final
      onComplete: () => setIsAnimating(false),
      onReverseComplete: () => setIsAnimating(false),
      // stop for 1 second before repeating
      repeatDelay: 1,
      ease: "power2.inOut",
    });
  }, [camera]);


  return isAnimating ? null : <OrbitControls makeDefault />;
};

export default Controls;
