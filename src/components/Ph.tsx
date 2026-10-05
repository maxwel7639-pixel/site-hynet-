import styles from "./Ph.module.css";

// PLACEHOLDER: dado que o dono ainda não confirmou. Aparece destacado na tela.
export function Ph({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.ph} data-placeholder>
      {children}
    </span>
  );
}
