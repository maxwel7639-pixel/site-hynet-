import { Secao } from "./Secao";
import { Botao } from "./Botao";
import { Ph } from "./Ph";
import { MENSAGEM_SUPORTE, linkWhatsapp } from "@/lib/config";

export function Suporte() {
  return (
    <Secao id="suporte" titulo="Suporte" intro="Se precisar de ajuda, fale com a gente pelo WhatsApp.">
      <p style={{ marginTop: 16 }}>
        Horário de atendimento: <Ph>[horário e canais de suporte]</Ph>
      </p>
      <div style={{ marginTop: 24, maxWidth: "24rem" }}>
        <Botao href={linkWhatsapp(MENSAGEM_SUPORTE)} bloco>
          Chamar o suporte
        </Botao>
      </div>
    </Secao>
  );
}
