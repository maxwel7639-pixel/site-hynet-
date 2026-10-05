import styles from "./BotaoFlutuante.module.css";
import { IconeWhats } from "./IconeWhats";
import { linkWhatsapp } from "@/lib/config";

export function BotaoFlutuante() {
  return (
    <a
      className={styles.fab}
      href={linkWhatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
    >
      <IconeWhats />
      WhatsApp
    </a>
  );
}
