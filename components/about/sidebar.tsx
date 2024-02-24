"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Sidebar() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#about-h1-about-me", {
      xPercent: 300,
      ease: "none",
      scrollTrigger: {
        scrub: 1
      }
    });
    gsap.to("#about-h2-about-me", {
      xPercent: -300,
      ease: "none",
      scrollTrigger: {
        scrub: 1
      }
    });
  });

  return (
    <div className="xs:hidden lg:block h-full w-full max-w-[15vw] border-l border-l-light-500  py-[15vh]">
      <div className="relative h-full w-full flex items-end" id="trigger">
        <div className="absolute top-[-31vh] right-[-9.4vw] rotate-[90deg]">
          <h1
            id="about-h1-about-me"
            className="font-narrow-emberly text-[17vh] font-bold uppercase whitespace-nowrap"
          >
            about me
          </h1>
        </div>
        <div className="absolute bottom-[13vh] left-[-6vh] rotate-[90deg]">
          <h2
            id="about-h2-about-me"
            className="font-narrow-emberly text-[5.5vh] font-bold uppercase whitespace-nowrap"
          >
            私について
          </h2>
        </div>
      </div>
    </div>
  );
}
