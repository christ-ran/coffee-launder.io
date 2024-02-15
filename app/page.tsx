import AboutMe from "@/components/about";
import Hero from "@/components/hero/index";

export default function Home() {
  return (
    <main className="relative">
      <div className="w-[0.2px] h-full bg-black left-[160px] absolute" />
      <Hero />
      <AboutMe />
    </main>
  );
}
