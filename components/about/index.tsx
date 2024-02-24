import Sidebar from "./sidebar";
import Content from "./content";

export default function AboutMe() {
  return (
    <section id="about-me" className="overflow-hidden">
      <div className="px-[8vw] h-full w-full grid right-section bg-dark-600 grain border-b border-b-light-500">
        <Content />
        <Sidebar />
      </div>
    </section>
  );
}
