import Image from "next/image";
import Saigon1 from "@/public/saigon/saigon-1.png";
import SaigonStamp1 from "@/public/saigon/saigon-stamp-2.png";

export default function AboutMe() {
  return (
    <section id="about-me" className="relative">
      <div className="px-[8vw] xs:py-[8vh] lg:py-[15vh] bg-dark-500 h-full w-full flex justify-end grain">
        <div className="xs:w-full lg:w-[65.5vw] grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-10 lg:gap-0">
          <div className="grid grid-rows-2">
            <div className="flex flex-col justify-between">
              <h1 className="font-narrow-emberly xs:text-[12vw] lg:text-[4.5vw] font-bold capitalize">
                A full-stack engineer
                <br />
                with strong focus on
                <br />
                making high quality
              </h1>
              <h1 className="font-narrow-emberly xs:text-[12vw] lg:text-[4.5vw] font-bold capitalize text-light-500">
                &
              </h1>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-narrow-emberly xs:text-[12vw] lg:text-[4.5vw] font-bold capitalize mt-[3vh]">
                providing the best
                <br />
                <span className="text-gold-300">experience</span> for the
                <br />
                product.
              </h1>
              <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500">
                Junior Software Engineer with strong ownership and robust
                technical skills,
                <br />
                strives to bring the impact contributions and values to the
                product.
              </h6>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="h-full w-full bg-white grain-black relative flex items-center justify-center shadow-2xl rotate-[4deg]">
              <div className="w-[90%] h-[85%] bg-dark-500 grain relative shadow-3xl">
                <Image
                  src={Saigon1}
                  alt="saigon-1"
                  className="absolute w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 mix-blend-difference">
                <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw]">
                  A part of district 1 in Saigon - 1972
                </h6>
              </div>
              <div className="absolute top-[-40px] right-[-50px] rotate-[40deg] shadow-3xl">
                <Image
                  src={SaigonStamp1}
                  alt="saigon-stamp-1"
                  className="w-[140px] h-[82px]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-narrow-emberly xs:text-[12vw] lg:text-[4.5vw] font-bold capitalize mt-[3vh]">
                build quick, make it fast but still ensure the quality of the
                product.
              </h1>
              <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500 mt-[2vh]">
                I provide the solutions and build it depends on the customer
                requirements and the customer&apos;s needs,
                <br />
                no matter what tech stacks I&apos;m going to provide.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
