import styles from "./Secao.module.css";

type Props = {
  id: string;
  titulo: string;
  intro?: string;
  tom?: "gelo" | "papel";
  children: React.ReactNode;
};

export function Secao({ id, titulo, intro, tom = "gelo", children }: Props) {
  return (
    <section id={id} className={`${styles.secao} ${styles[tom]}`} aria-labelledby={`${id}-t`}>
      <div className={styles.wrap}>
        <h2 id={`${id}-t`} className={styles.titulo}>
          {titulo}
        </h2>
        {intro && <p className={styles.intro}>{intro}</p>}
        {children}
      </div>
    </section>
  );
}
