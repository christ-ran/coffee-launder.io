import Image from "next/image";
import SaigonMaria from "@/public/saigon/saigon-maria-church.png";
import Saigon3 from "@/public/saigon/saigon-3.png";
import Saigon4 from "@/public/saigon/saigon-4.png";
import Saigon5 from "@/public/saigon/saigon-5.png";
import Saigon6 from "@/public/saigon/saigon-6.png";
import Saigon7 from "@/public/saigon/saigon-7.png";
import Saigon8 from "@/public/saigon/saigon-8.png";
import Saigon9 from "@/public/saigon/saigon-9.png";

export default function History() {
  return (
    <section id="history">
      <div className="px-[8vw] xs:py-[8vh] lg:py-[15vh] bg-dark-600 h-full w-full flex justify-end grain-light">
        <div className="xs:w-full lg:w-[65.5vw] grid grid-rows-3 gap-8">
          <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="xs:order-last lg:order-none flex xs:items-start lg:items-center">
              <div>
                <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500 mt-[3vh]">
                  January 2022 &mdash; March 2022
                </h6>
                <h1 className="font-narrow-emberly xs:text-[12vw] lg:text-[4.5vw] font-bold capitalize mt-[1vh]">
                  SWE <span className="text-gold-300">intern</span>
                </h1>
                <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500 mt-[2vh]">
                  A part of both engineer and testing teams. I did mostly
                  retrieving
                  <br />
                  data from AWS and added many unit tests for querying flows.
                </h6>
                <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500 mt-[2vh]">
                  Developed and packed the internal packages for the Front-end.
                  <br />
                  The project was about a CRM application for a Hungarian stake-
                  <br />
                  holder with their client. It was a fun internship.
                </h6>
              </div>
            </div>
            <div className="self-end">
              <div className="bg-white shadow-3xl flex items-center justify-center relative xs:h-[63vw] lg:h-[23vw] grain-dark">
                <div className="w-[90%] h-[85%] bg-dark-500 grain relative shadow-3xl">
                  <Image
                    src={Saigon7}
                    alt="saigon-7"
                    className="absolute w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-8 lg:gap-[15vw]">
            <div className="order-last flex xs:items-start lg:items-center">
              <div>
                <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500 mt-[3vh]">
                  August 2022 &mdash; January 2024
                </h6>
                <h1 className="font-narrow-emberly xs:text-[12vw] lg:text-[4.5vw] font-bold capitalize mt-[1vh]">
                  SWE <span className="text-gold-300">1 & 2</span>
                </h1>
                <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500 mt-[2vh]">
                  A small part of a start-up company. Joined and collaborated
                  with
                  <br />
                  multiple teams including design, operation and product.
                  Handled
                  <br />
                  and improved a lot of legacy codes from back-end to front-end.
                </h6>
                <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500 mt-[2vh]">
                  Part of mobile development team, added a ton of test cases for
                  a
                  <br />
                  lot of critical flows that involves with money like
                  transactions and
                  <br />
                  payment flows.
                </h6>
              </div>
            </div>
            <div className="self-end relative">
              <div className="bg-white shadow-3xl flex items-center justify-center relative  xs:h-[63vw] lg:h-[17vw] grain-dark">
                <div className="w-[90%] h-[85%] bg-dark-500 grain relative shadow-3xl">
                  <Image
                    src={Saigon5}
                    alt="saigon-5"
                    className="absolute w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute z-20 top-[-15px] right-[-10px] w-full">
                <div className="bg-white shadow-3xl flex items-center justify-center relative  xs:h-[63vw] lg:h-[17vw] w-full grain-dark rotate-[-5deg]">
                  <div className="w-[90%] h-[85%] bg-dark-500 grain relative shadow-3xl">
                    <Image
                      src={Saigon9}
                      alt="saigon-9"
                      className="absolute w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="xs:order-last lg:order-none flex xs:items-start lg:items-center">
              <div>
                <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500 mt-[3vh]">
                  January 2024 &mdash; Current
                </h6>
                <h1 className="font-narrow-emberly xs:text-[12vw] lg:text-[4.5vw] font-bold capitalize mt-[1vh]">
                  <span className="text-gold-300">free-lance</span> SWE
                </h1>
                <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500 mt-[2vh]">
                  Working with the American engineer team about a hospital
                  web-site.
                  <br />
                  Currently making my own SAAS project and hope it could be
                  rolled out
                  <br />
                  in next month.
                </h6>
              </div>
            </div>
            <div className="self-end">
              <div className="bg-white shadow-3xl flex items-center justify-center relative  xs:h-[63vw] lg:h-[21vw] grain-dark">
                <div className="w-[90%] h-[85%] bg-dark-500 grain relative shadow-3xl">
                  <Image
                    src={Saigon8}
                    alt="saigon-8"
                    className="absolute w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="xs:w-full lg:w-[65.5vw] grid grid-rows-3 gap-10">
          <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="xs:order-last lg:order-none">
              <h5 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[2vw] text-light-500">
                January 2022 &mdash; March 2022
              </h5>
              <div>
                <h1 className="font-narrow-emberly xs:text-[12vw] lg:text-[4.5vw] font-bold capitalize">
                  SWE intern.
                </h1>
                <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500 mt-[3vh]">
                  I do mostly retrieving data from AWS and some front-end
                  stuffs.
                  <br />
                  The project was about CRM app for a Hungarian client. It was
                  <br />a fun internship in just 2 months.
                </h6>
              </div>
            </div>
            <div className="bg-white shadow-3xl flex items-center justify-center xs:h-[59vw] lg:h-[22vw]">
              <div className="w-[90%] h-[85%] bg-dark-500 grain relative shadow-3xl">
                <Image
                  src={Saigon3}
                  alt="saigon-3"
                  className="absolute w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white shadow-3xl flex items-center justify-center xs:h-[59vw] lg:h-[22vw]">
              <div className="w-[90%] h-[85%] bg-dark-500 grain relative shadow-3xl">
                <Image
                  src={Saigon7}
                  alt="saigon-7"
                  className="absolute w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="xs:order-last lg:order-none">
              <div className="w-max">
                <h5 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[2vw] text-light-500">
                  January 2022 &mdash; March 2022
                </h5>
                <div>
                  <h1 className="font-narrow-emberly xs:text-[12vw] lg:text-[4.5vw] font-bold capitalize">
                    SWE intern.
                  </h1>
                  <h6 className="font-narrow-emberly xs:text-[3.6vw] lg:text-[1.2vw] text-light-500 mt-[3vh]">
                    I do mostly retrieving data from AWS and some front-end
                    stuffs.
                    <br />
                    The project was about CRM app for a Hungarian client. It was
                    <br />a fun internship in just 2 months.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="xs:w-full lg:w-[65.5vw] grid xs:grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-2 bg-dark-500 xs:h-[90vw] lg:h-[48vw]">
            <div className="grid grid-rows-3 h-full">
              <div className="row-span-2 rotate-[-2deg]">
                <div className="bg-gold-200 grain-dark relative flex items-center justify-center h-full border border-gold-300 shadow-3xl">
                  <div className="relative bg-dark-500 grain w-[90%] h-[85%] shadow-2xl">
                    <Image
                      src={Saigon6}
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
                <div className="relative top-[-20px] left-[-40px] rotate-[-2deg] shadow-3xl">
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
          <div className=""></div>
        </div> */}
      </div>
    </section>
  );
}
