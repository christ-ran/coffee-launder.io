"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Sidebar() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#history-h1-my-humble-history", {
      scrollTrigger: {
        trigger: "#history-sidebar-container",
        scrub: true,
        start: "top 100%",
        end: `+=${window.innerHeight}`,
        markers: true
      },
      xPercent: -100,
      animationDuration: 2,
      ease: "none"
    });
  });

  return (
    <div
      id="history-sidebar-container"
      className="xs:hidden lg:block w-[15vw] border-r border-r-light-500 py-[15vh]"
    >
      <div className="h-full r-full relative">
        <div className="absolute top-[-72vh] left-[-28vw] rotate-[-90deg]">
          <h1
            id="history-h1-my-humble-history"
            className="font-narrow-emberly text-[17vh] font-bold uppercase whitespace-nowrap"
          >
            my humble history
          </h1>
        </div>
        <div className="absolute bottom-[20vw] left-[-15vw] rotate-[-90deg]">
          <h2 className="font-narrow-emberly text-[5.5vh] font-bold whitespace-nowrap capitalize">
            &quot;Luck Is What Happens When Preparation Meets Opportunity&quot;
          </h2>
        </div>
      </div>
    </div>
  );
}
