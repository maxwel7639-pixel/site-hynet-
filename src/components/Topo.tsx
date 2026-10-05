import Link from "next/link";
import styles from "./Topo.module.css";
import { linkWhatsapp } from "@/lib/config";

export function Topo() {
  return (
    <header className={styles.topo}>
      <div className={styles.wrap}>
        {/* PLACEHOLDER: wordmark em texto até o dono mandar o logo. */}
        <Link href="/" className={styles.marca} aria-label="Hynet, página inicial">
          Hynet
        </Link>
        <nav className={styles.nav} aria-label="Principal">
          <a href="#planos" className={styles.link}>
            Planos
          </a>
          <a href="#cobertura" className={styles.link}>
            Cobertura
          </a>
          <a href={linkWhatsapp()} className={styles.zap} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
