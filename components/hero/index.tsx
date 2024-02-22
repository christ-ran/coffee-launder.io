"use client";

import Content from "./content";
import Sidebar from "./sidebar";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="flex flex-row px-[8vw] h-screen w-full border-b border-b-light-500">
        <Sidebar />
        <Content />
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
