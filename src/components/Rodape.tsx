import Link from "next/link";
import styles from "./Rodape.module.css";
import { Ph } from "./Ph";
import { INSTAGRAM, NOME, linkWhatsapp, whatsappFormatado } from "@/lib/config";

export function Rodape() {
  const fone = whatsappFormatado();
  return (
    <footer className={styles.rodape}>
      <div className={styles.wrap}>
        <p className={styles.nome}>{NOME}</p>
        <ul className={styles.lista}>
          <li>
            <Ph>[cidade / UF]</Ph>
          </li>
          {fone && (
            <li>
              WhatsApp:{" "}
              <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {fone}
              </a>
            </li>
          )}
          <li>
            Instagram:{" "}
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className={styles.link}>
              @hynet.oficial
            </a>
          </li>
          <li>
            CNPJ: <Ph>[CNPJ]</Ph>
          </li>
          <li>
            Registro na Anatel: <Ph>[registro Anatel]</Ph>
          </li>
          <li>
            <Link href="/privacidade" className={styles.link}>
              Política de privacidade
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
