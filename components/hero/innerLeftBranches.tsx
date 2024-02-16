"use client";

import Image from "next/image";
import CoffeeBranchV1 from "@/public/branches/coffee-branch-v1.svg";
import CoffeeBranchV2 from "@/public/branches/coffee-branch-v2.svg";
import RowanBranchV1 from "@/public/branches/rowan-branch-v1.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function InnerLeftBranches() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "back.out" } });

    tl.from("#cfl-1", {
      left: -340,
      rotate: 120.11,
      duration: 2
    })
      .from(
        "#cfl-2",
        {
          left: -340,
          rotate: 70.53,
          duration: 2.5
        },
        0.1
      )
      .from(
        "#cfl-3",
        {
          left: -340,
          rotate: 20.53,
          duration: 2.5
        },
        0.2
      );
  });

  return (
    <>
      <div
        id="cfl-3"
        className="absolute left-[-140px] bottom-[200px] rotate-[40.53deg] mix-blend-difference"
      >
        <Image
          src={CoffeeBranchV2}
          alt="coffee-branch-v2"
          height={250}
          width={250}
        />
      </div>
      <div
        id="cfl-2"
        className="absolute left-[-110px] bottom-[80px] rotate-[40.53deg] mix-blend-difference"
      >
        <Image
          src={CoffeeBranchV1}
          alt="coffee-branch-v1"
          height={250}
          width={250}
        />
      </div>
      <div
        id="cfl-1"
        className="absolute left-[-140px] top-[80px] rotate-[158.11deg] mix-blend-difference"
      >
        <Image
          src={RowanBranchV1}
          alt="rowan-branch-v1"
          height={250}
          width={250}
        />
      </div>
    </>
  );
}
