import Link from "next/link";
import styles from "./index.module.css";
import Pokemons from "./_components/Pokemons";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Create <span className={styles.pinkSpan}>T3</span> App
        </h1>
        <div className={styles.cardRow}>
        <div>
          <h1 className={styles.title}>this is new</h1>
          <Pokemons>
            
          </Pokemons>
        </div>

        </div>
      </div>
    </main>
  );
}
