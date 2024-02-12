import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Bottom from "./components/Bottom";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Bottom />
      </main>
    </div>
  );
}
