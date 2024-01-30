"use client";
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedComponentProps {
  tag: keyof JSX.IntrinsicElements;
  id: string;
  animationClass: string;
  className: string;
  children: ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  tag,
  className,
  id,
  animationClass,
  children,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const Tag = tag as React.ElementType;

  return (
    <Tag ref={ref} className={`${className} ${inView ? animationClass : ""}`} id={id}>
      {children}
    </Tag>
  );
};

export default AnimatedComponent;
