import Image from "next/image";
import SaigonMaria from "@/public/saigon/saigon-maria-church.png";
import Saigon3 from "@/public/saigon/saigon-3.png";
import Saigon4 from "@/public/saigon/saigon-4.png";
import Saigon5 from "@/public/saigon/saigon-5.png";

export default function History() {
  return (
    <section id="history">
      <div className="px-[8vw] xs:py-[8vh] lg:py-[15vh] bg-dark-600 h-full w-full flex justify-end grain-light">
        <div className="xs:w-full lg:w-[65.5vw] grid xs:grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-2 bg-dark-500 xs:h-[100vw] lg:h-[50vw]">
            <div className="grid grid-rows-3 h-full">
              <div className="row-span-2 bg-white shadow-3xl rotate-[-2deg]">
                <div className="bg-white relative flex items-center justify-center h-full border border-gold-300 shadow-3xl">
                  <div className="relative bg-dark-500 grain w-[90%] h-[85%] shadow-2xl">
                    <Image
                      src={Saigon5}
                      alt="saigon-5"
                      className="absolute w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-dark-600 grid grid-cols-2 grain-light">
                <div className="relative top-[-60px] left-[-20px] rotate-[3deg] z-[10] shadow-3xl">
                  <div className="bg-white relative flex items-center justify-center h-full w-full">
                    <div className="relative bg-dark-500 grain w-[90%] h-[85%] shadow-2xl">
                      <Image
                        src={Saigon3}
                        alt="saigon-3"
                        className="absolute w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative top-[-20px] left-[-40px] rotate-[-7deg] shadow-3xl">
                  <div className="bg-white relative flex items-center justify-center h-full">
                    <div className="relative bg-dark-500 grain w-[90%] h-[85%] shadow-2xl">
                      <Image
                        src={Saigon4}
                        alt="saigon-4"
                        className="absolute w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3">
            <div>
              <h1 className="font-narrow-emberly xs:text-[12vw] lg:text-[4.5vw] font-bold capitalize mt-[3vh]">
                now
              </h1>
              <h1 className="font-narrow-emberly xs:text-[12vw] lg:text-[4.5vw] font-bold capitalize mt-[3vh]">
                Free-lance
              </h1>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
