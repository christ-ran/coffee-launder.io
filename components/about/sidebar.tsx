"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Sidebar() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#about-h1-about-me", {
      scrollTrigger: {
        trigger: "#trigger",
        scrub: true,
        start: "top 100%",
        end: `+=${window.innerHeight / 1}`,
        markers: true
      },
      xPercent: 200,
      ease: "none"
    });
  });

  return (
    <div className="xs:hidden lg:block h-full w-full max-w-[15vw] border-l border-l-light-500">
      <div className="relative h-full w-full" id="trigger">
        <div className="absolute top-[-31vh] right-[-9.4vw] rotate-[90deg]">
          <h1
            id="about-h1-about-me"
            className="font-narrow-emberly text-[17vh] font-bold uppercase whitespace-nowrap"
          >
            about me
          </h1>
        </div>
      </div>
    </div>
  );
}
