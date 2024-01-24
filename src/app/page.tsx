import styles from "./page.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  );
}
