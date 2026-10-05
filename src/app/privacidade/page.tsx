import type { Metadata } from "next";
import Link from "next/link";
import { Ph } from "@/components/Ph";
import styles from "./privacidade.module.css";

export const metadata: Metadata = {
  title: "Política de privacidade | Hynet",
  description: "Como o site da Hynet trata dados pessoais.",
};

export default function Privacidade() {
  return (
    <main className={styles.pagina}>
      <Link href="/" className={styles.voltar}>
        Voltar ao site
      </Link>
      <h1 className={styles.titulo}>Política de privacidade</h1>
      <p>
        Este site não tem formulário que guarde dados pessoais e não usa cookies de publicidade nem pixel.
      </p>
      <p>
        Ao tocar em um botão de WhatsApp, você sai do site e a conversa passa a seguir as regras do WhatsApp. O
        bairro que você escreve na seção Cobertura só vira texto da mensagem; o site não guarda essa informação.
      </p>
      <p>
        Texto completo da política (LGPD), responsável pelos dados e canal para pedidos do titular:{" "}
        <Ph>[a confirmar com a Hynet]</Ph>
      </p>
    </main>
  );
}
