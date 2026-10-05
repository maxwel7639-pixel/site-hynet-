import styles from "./Hero.module.css";
import { Botao } from "./Botao";
import { Ph } from "./Ph";
import { linkWhatsapp } from "@/lib/config";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-t">
      <div className={styles.wrap}>
        <h1 id="hero-t" className={styles.titulo}>
          Internet de fibra de verdade na sua casa
        </h1>
        <p className={styles.texto}>
          Veja se a Hynet chega na sua rua. A consulta é pelo WhatsApp.
        </p>
        <p className={styles.local}>
          Atendimento em <Ph>[cidade e bairros atendidos]</Ph>
        </p>

        {/* A coisa memorável: um fio de luz percorre a fibra e chega no botão, uma vez. */}
        <div className={styles.fio} aria-hidden="true">
          <span className={styles.no} />
          <span className={styles.pulso} />
        </div>
        <Botao href={linkWhatsapp()} pulsa>
          Consultar disponibilidade no WhatsApp
        </Botao>
      </div>
    </section>
  );
}
