import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="fixed px-[8vw] xs:py-[6vh] sm:py-[15vh] xs:h-[auto] sm:h-screen xs:w-full sm:w-max flex flex-col justify-between items-start z-10 border-light-500">
        <div>
          <h1 className="font-std-emberly text-[7.5vh] font-bold capitalize">
            coffee
            <br />
            launder.
          </h1>
          <br />
          <h6 className="xs:hidden sm:block font-narrow-emberly text-[1.8vh] text-light-500">
            Laundering coffee before 1975,
            <br /> drink cofee three times a day,
            <br /> grind Leetcode non-stop every days.
            <br /> Yes, I&apos;m flexing my un-healthy lifestyle.
          </h6>
        </div>
        <div>
          <div className="flex flex-row">
            <Link href="/#about" className="mr-[3vh]">
              <h5 className="font-narrow-emberly text-[4vh] capitalize">
                about
              </h5>
            </Link>
            <Link href="/#contact">
              <h5 className="font-narrow-emberly text-light-500 text-[4vh] capitalize">
                contact
              </h5>
            </Link>
          </div>
          <h6 className="font-narrow-emberly text-[1.8vh] capitalize text-light-500">
            Wed / 14.2.2024. 06:10:36
          </h6>
          <h6 className="font-narrow-emberly text-[1.8vh] capitalize text-light-500">
            Saigon - Vietnam
          </h6>
        </div>
      </div>
    </header>
  );
}
