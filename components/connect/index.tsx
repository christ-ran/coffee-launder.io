import ConnectItem from "./connectItem";

export default function Connect() {
  return (
    <section id="connect">
      <div className="px-[8vw] xs:py-[8vh] lg:py-[15vh] bg-black flex flex-col items-center justify-center gap-6">
        <h1 className="font-std-emberly text-[12vw] font-bold capitalize text-center tracking-tight">
          let&apos;s stay connected
        </h1>
        <div className="grid grid-cols-2">
          <ConnectItem />
        </div>
      </div>
    </section>
  );
}
