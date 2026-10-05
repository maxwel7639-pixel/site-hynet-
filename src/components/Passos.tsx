import styles from "./Passos.module.css";
import { Secao } from "./Secao";
import { Ph } from "./Ph";

export function Passos() {
  return (
    <Secao id="como-contratar" titulo="Como contratar" tom="papel">
      <ol className={styles.lista}>
        <li className={styles.passo}>
          <span className={styles.num} aria-hidden="true">
            1
          </span>
          <div>
            <h3 className={styles.nome}>Consulta</h3>
            <p>Você manda seu endereço no WhatsApp e a gente confirma se a fibra chega.</p>
          </div>
        </li>
        <li className={styles.passo}>
          <span className={styles.num} aria-hidden="true">
            2
          </span>
          <div>
            <h3 className={styles.nome}>Instalação</h3>
            <p>
              Combinamos o dia da instalação. Prazo: <Ph>[prazo de instalação]</Ph>
            </p>
          </div>
        </li>
        <li className={styles.passo}>
          <span className={styles.num} aria-hidden="true">
            3
          </span>
          <div>
            <h3 className={styles.nome}>Internet ligada</h3>
            <p>A equipe instala e deixa a internet funcionando na sua casa.</p>
          </div>
        </li>
      </ol>
    </Secao>
  );
}
