export default function AboutMe() {
  return (
    <section id="about-me">
      <div className="px-[8vw] py-[15vh] bg-dark-500 h-screen w-full flex justify-end grain">
        <div className="xs:w-full sm:w-[65.5vw] flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-narrow-emberly xs:text-[12vw] sm:text-[7.5vh] font-bold capitalize">
                A full-stack engineer
                <br />
                with strong focus on
                <br />
                making high quality
              </h1>
              <h1 className="font-narrow-emberly xs:text-[12vw] sm:text-[7.5vh] font-bold capitalize text-light-500 mt-[3vh]">
                &
              </h1>
              <h1 className="font-narrow-emberly xs:text-[12vw] sm:text-[7.5vh] font-bold capitalize mt-[3vh]">
                providing the best
                <br />
                experience for the
                <br />
                product.
              </h1>
            </div>
            <h6 className="font-narrow-emberly text-[1.8vh] text-light-500">
              Junior Software Engineer with strong ownership and robust
              technical skills,
              <br />
              strives to bring the impact contributions and values to the
              product.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
