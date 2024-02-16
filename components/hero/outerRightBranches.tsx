import Image from "next/image";
import CoffeeBranchV3 from "@/public/branches/coffee-branch-v3.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function OuterRightBranches() {
  useGSAP(() => {
    gsap.from("#ocfr", {
      right: -100,
      rotate: 10,
      duration: 3,
      ease: "back.out"
    });
  });

  return (
    <div
      id="ocfr"
      className="absolute top-[-100px] right-[10px] mix-blend-difference scale-x-[-1] rotate-[-131deg]"
    >
      <Image
        src={CoffeeBranchV3}
        alt="coffee-branch-v3"
        className="w-[221px] h-[350px]"
      />
    </div>
  );
}
