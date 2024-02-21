import AboutMe from "@/components/about";
import Connect from "@/components/connect";
import Hero from "@/components/hero/index";
import History from "@/components/history";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <AboutMe />
      <History />
      <Connect />
    </main>
  );
}
