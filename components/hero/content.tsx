"use client";

import InnerLeftBranches from "./innerLeftBranches";
import InnerRightBranches from "./innerRightBranches";
import OuterLeftBrances from "./outerLeftBranches";
import OuterRightBranches from "./outerRightBranches";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Content() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#hero-h1-software-engineer", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        scrub: 1
      }
    });
  });

  return (
    <div className="flex items-center justify-end h-full w-full">
      <div className="w-[1000px] h-[800px] xs:bg-dark-500 md:bg-white relative overflow-hidden flex justify-center items-center grain-dark">
        <div className="h-[600px] w-[800px] mx-auto bg-dark-500 flex flex-col items-center justify-around grain relative overflow-hidden shadow-2xl">
          <h6 className="font-narrow-emberly text-[0.975rem] text-light-500 text-center xs:relative md:auto z-[1]">
            Currently available for Free-lance & Full-time Jobs.
          </h6>
          <h1
            id="hero-h1-software-engineer"
            className="font-narrow-emberly font-bold capitalize text-9xl text-center pb-[5rem] xs:relative md:auto xs:z-[1] md:z-[0]"
          >
            software engineer
          </h1>
          <h6 className="font-narrow-emberly text-[0.975rem] text-light-500 text-center xs:relative md:auto xs:z-[1] md:z-[0]">
            A not so UI/UX software engineer based in Saigon - Vietnam, but a
            versatile one. I specially strong at connecting every parts together
            <br />
            depends on the need of the customers or requirements of the product.
          </h6>
          <InnerLeftBranches />
          <InnerRightBranches />
        </div>
        <OuterLeftBrances />
        <OuterRightBranches />
      </div>
    </div>
  );
}
