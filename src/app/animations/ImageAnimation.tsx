// ImageAnimation.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";


type ImageAnimationProps = {
  children: React.ReactNode;
};

const ImageAnimation: React.FC<ImageAnimationProps> = ({ children }) => {
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: 2000, opacity: 0, scale: 0.3 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return <div ref={imageRef}>{children}</div>;
};

export default ImageAnimation;
