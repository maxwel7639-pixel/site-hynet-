import styles from "./Faq.module.css";
import { Secao } from "./Secao";
import { Ph } from "./Ph";

const PERGUNTAS: { p: string; r: React.ReactNode }[] = [
  { p: "Como sei se a internet chega na minha rua?", r: "Chame no WhatsApp e informe seu endereço. A gente confirma a disponibilidade." },
  { p: "Como funciona a instalação?", r: <Ph>[como é a instalação]</Ph> },
  { p: "Quanto tempo leva para instalar?", r: <Ph>[prazo de instalação]</Ph> },
  { p: "Tem fidelidade?", r: <Ph>[fidelidade e taxa de instalação]</Ph> },
  { p: "O roteador está incluso?", r: <Ph>[roteador: incluso, comodato ou à parte]</Ph> },
  { p: "Posso levar a internet se eu mudar de endereço?", r: <Ph>[regra de mudança de endereço]</Ph> },
  { p: "Como pago a mensalidade?", r: <Ph>[formas de pagamento]</Ph> },
];

export function Faq() {
  return (
    <Secao id="perguntas" titulo="Perguntas frequentes" tom="papel">
      <div className={styles.lista}>
        {PERGUNTAS.map(({ p, r }) => (
          <details key={p} className={styles.item}>
            <summary className={styles.pergunta}>{p}</summary>
            <p className={styles.resposta}>{r}</p>
          </details>
        ))}
      </div>
    </Secao>
  );
}
