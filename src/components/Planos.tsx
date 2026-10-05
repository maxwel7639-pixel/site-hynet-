import styles from "./Planos.module.css";
import { Secao } from "./Secao";
import { Botao } from "./Botao";
import { Ph } from "./Ph";
import { linkWhatsapp } from "@/lib/config";

// PLACEHOLDER: três linhas até o dono mandar os planos reais.
// "Mais escolhido" só entra se o dono confirmar qual plano é.
const PLANOS = [1, 2, 3];

export function Planos() {
  return (
    <Secao
      id="planos"
      titulo="Planos"
      intro="Escolha a velocidade e chame no WhatsApp para confirmar se chega no seu endereço."
    >
      <ul className={styles.lista}>
        {PLANOS.map((n) => (
          <li key={n} className={styles.linha}>
            <p className={styles.velocidade}>
              <Ph>[velocidade]</Ph>
            </p>
            <p className={styles.inclui}>
              <Ph>[o que inclui]</Ph>
            </p>
            <p className={styles.preco}>
              <Ph>[preço]</Ph>
            </p>
            <div className={styles.acao}>
              <Botao
                href={linkWhatsapp(`Oi, quero saber mais sobre o plano ${n} da Hynet e se chega no meu endereço`)}
                bloco
              >
                Quero este plano
              </Botao>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.nota}>
        Fidelidade e taxa de instalação: <Ph>[confirmar com a Hynet]</Ph>
      </p>
    </Secao>
  );
}
