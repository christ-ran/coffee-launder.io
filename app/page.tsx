import AboutMe from "@/components/about";
import Hero from "@/components/hero/index";
import History from "@/components/history";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <AboutMe />
      <History />
    </main>
  );
}
