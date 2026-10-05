import styles from "./Botao.module.css";
import { IconeWhats } from "./IconeWhats";

type Props = {
  href: string;
  children: React.ReactNode;
  variante?: "whats" | "contorno";
  pulsa?: boolean;
  bloco?: boolean;
};

export function Botao({ href, children, variante = "whats", pulsa, bloco }: Props) {
  const classes = [
    styles.botao,
    styles[variante],
    pulsa ? styles.pulsa : "",
    bloco ? styles.bloco : "",
  ].join(" ");
  const externo = href.startsWith("http");
  return (
    <a
      className={classes}
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {variante === "whats" && <IconeWhats />}
      {children}
    </a>
  );
}
