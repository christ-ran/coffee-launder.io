import CoffeeBranchV1 from "@/public/coffee-branch-v1.svg";
import CoffeeBranchV2 from "@/public/coffee-branch-v2.svg";
import RowanBranchV1 from "@/public/rowan-branch-v1.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function InnerRightBranches() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "back.out" } });

    tl.from("#cfr-1", {
      right: -310,
      rotate: 150.55,
      duration: 2
    })
      .from(
        "#cfr-2",
        {
          right: -330,
          rotate: 30,
          duration: 2.5
        },
        0.1
      )
      .from(
        "#cfr-3",
        {
          right: -330,
          rotate: 0,
          duration: 2.5
        },
        0.2
      );
  });

  return (
    <>
      <div
        id="cfr-3"
        className="absolute right-[-130px] top-[90px] rotate-[38.09deg] mix-blend-difference"
      >
        <Image
          src={CoffeeBranchV1}
          alt="coffee-branch-v1"
          height={250}
          width={250}
        />
      </div>
      <div
        id="cfr-2"
        className="absolute right-[-130px] bottom-[180px] mix-blend-difference"
      >
        <Image
          src={RowanBranchV1}
          alt="coffee-branch-v2"
          height={250}
          width={250}
        />
      </div>
      <div
        id="cfr-1"
        className="absolute right-[-110px] bottom-[100px] rotate-[177.55deg] mix-blend-difference"
      >
        <Image
          src={CoffeeBranchV2}
          alt="coffee-branch-v2"
          height={250}
          width={250}
        />
      </div>
    </>
  );
}
