"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Sidebar() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#hero-h1-portfolio", {
      xPercent: -300,
      ease: "none",
      scrollTrigger: {
        scrub: 1
      }
    });

    gsap.to("#hero-h2-coffee-launder", {
      xPercent: 100,
      ease: "none",
      scrollTrigger: {
        scrub: 1
      }
    });
  });

  return (
    <div className="xs:hidden lg:block h-full w-full  py-[10vh] max-w-[15vw] border-r border-r-light-500">
      <div className="relative h-full w-full">
        <div className="absolute bottom-[22vh] left-[-9.4vw] rotate-[-90deg]">
          <h1
            id="hero-h1-portfolio"
            className="font-narrow-emberly text-[17vh] font-bold uppercase"
          >
            portfolio
          </h1>
          <h2
            id="hero-h2-coffee-launder"
            className="font-narrow-emberly text-[5.5vh] font-bold uppercase"
          >
            ポートフォリオ
          </h2>
        </div>
      </div>
      <h6 className="font-narrow-emberly text-[1.8vh] capitalize text-light-500">
        Wed / 14.2.2024. 06:10:36 &mdash; Saigon - Vietnam
      </h6>
    </div>
  );
}
