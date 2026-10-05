"use client";

import { useState } from "react";
import styles from "./Cobertura.module.css";
import { Secao } from "./Secao";
import { Ph } from "./Ph";
import { IconeWhats } from "./IconeWhats";
import { MENSAGEM_PADRAO, linkWhatsapp } from "@/lib/config";

// Nada é guardado: o bairro só vira texto da mensagem que abre no WhatsApp.
export function Cobertura() {
  const [bairro, setBairro] = useState("");
  const limpo = bairro.trim();
  const mensagem = limpo ? `Oi, moro no bairro ${limpo}. A Hynet chega aí?` : MENSAGEM_PADRAO;

  return (
    <Secao id="cobertura" titulo="Cobertura" intro="Escreva seu bairro e a gente responde pelo WhatsApp.">
      <p className={styles.lista}>
        Bairros atendidos: <Ph>[lista de bairros e cidades]</Ph>
      </p>
      <div className={styles.campo}>
        <label htmlFor="bairro" className={styles.rotulo}>
          Seu bairro
        </label>
        <input
          id="bairro"
          className={styles.entrada}
          type="text"
          name="bairro"
          autoComplete="off"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
        <a
          className={styles.botao}
          href={linkWhatsapp(mensagem)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconeWhats />
          Perguntar no WhatsApp
        </a>
      </div>
    </Secao>
  );
}
