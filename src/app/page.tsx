import styles from "./page.module.css";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className={styles.main}>
        <About />
      </main>
    </div>
  );
}
