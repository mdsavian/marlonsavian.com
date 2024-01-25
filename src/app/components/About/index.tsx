"use client";

import PhotoShapes from "@/assets/photo-shapes.svg";
import React, { useEffect, useState } from "react";

const Container = ({ children }: { children: React.ReactNode }) => (
  <section className="h-[50vh] overflow-hidden relative bg-blueLight p-12">{children}</section>
);

const AboutMeTitle = ({ scrollPercent }: { scrollPercent: number }) => (
  <div
    style={{ transform: `translateX(${scrollPercent}%)` }}
    className="transition-transform duration-500 ease-out absolute left-[-15%]"
  >
    <p className="text-blue text-8xl font-black">ABOUT ME</p>
    <p className="text-purple mt-16">
      Crafting user-friendly and aesthetic UI designs is not just my profession, it's my passion.
    </p>
  </div>
);

const AboutMe = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const { body, documentElement } = document;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight)) * 100;
    const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit) {
      setScrollPercent(sp);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <PhotoShapes className="absolute w-[35rem] sm:w-[40rem] h-[126%] " />
      <AboutMeTitle scrollPercent={scrollPercent} />
    </Container>
  );
};

export default AboutMe;
