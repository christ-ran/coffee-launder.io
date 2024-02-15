"use client";

import Image from "next/image";
import InnerLeftBranches from "./innerLeftBranches";
import InnerRightBranches from "./innerRightBranches";
import CoffeeBranchV3 from "@/public/coffee-branch-v3.svg";
import OuterLeftBrances from "./outerLeftBranches";
import OuterRightBranches from "./outerRightBranches";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="px-[8vw] py-[15vh] h-screen w-full flex items-center justify-end">
        <div className="h-[800px] w-[1000px] xs:bg-dark-500 md:bg-white relative overflow-hidden flex justify-center items-center">
          <div className="h-[600px] w-[800px] mx-auto bg-dark-500 flex flex-col items-center justify-around grain relative overflow-hidden">
            <h6 className="font-narrow-emberly text-[0.975rem] text-light-500 text-center xs:relative md:auto z-[1]">
              Currently available for Free-lance & Full-time Jobs.
            </h6>
            <h1 className="font-narrow-emberly font-bold capitalize text-9xl text-center pb-[5rem] xs:relative md:auto xs:z-[1] md:z-[0]">
              software engineer
            </h1>
            <h6 className="font-narrow-emberly text-[0.975rem] text-light-500 text-center xs:relative md:auto xs:z-[1] md:z-[0]">
              A not so UI/UX software engineer based in Saigon - Vietnam, but a
              versatile one. I specially strong at connecting every parts
              together
              <br />
              depends on the need of the customers or requirements of the
              product.
            </h6>
            <InnerLeftBranches />
            <InnerRightBranches />
          </div>
          <OuterLeftBrances />
          <OuterRightBranches />
        </div>
      </div>
      <div className="xs:hidden sm:block absolute right-[-100px] bottom-[50vh] rotate-[-90deg]">
        <h6 className="font-narrow-emberly text-[1.8vh] text-light-500 text-left xs:relative md:auto xs:z-[1] md:z-[0]">
          The reason why I designed my portfolio to look like it was made from
          the year 90s is because
          <br />
          I&apos;m living in Saigon and it might be the reason why I love to
          make everything look so vintage.
        </h6>
      </div>
    </section>
  );
}
