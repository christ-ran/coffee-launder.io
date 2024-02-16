"use client";

import Image from "next/image";
import CoffeeBranchV3 from "@/public/branches/coffee-branch-v3.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function OuterLeftBrances() {
  useGSAP(() => {
    gsap.from("#ocfl", {
      left: -200,
      rotate: 80.83,
      duration: 2.7,
      ease: "back.out"
    });
  });

  return (
    <div
      id="ocfl"
      className="absolute bottom-[-83px] left-[-20px] rotate-[41.83deg] mix-blend-difference"
    >
      <Image
        src={CoffeeBranchV3}
        alt="coffee-branch-v3"
        className="w-[221px] h-[350px]"
      />
    </div>
  );
}
