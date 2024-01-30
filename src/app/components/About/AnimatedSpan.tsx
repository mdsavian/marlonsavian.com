"use client";
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedSpanProps {
  id: string;
  animationClass: string;
  className: string;
  children: ReactNode;
}

const AnimatedSpan: React.FC<AnimatedSpanProps> = ({ className, id, animationClass, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <span ref={ref} className={`${className} ${inView ? animationClass : ""}`} id={id}>
      {children}
    </span>
  );
};

export default AnimatedSpan;
