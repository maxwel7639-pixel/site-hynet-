import { Secao } from "./Secao";
import { Ph } from "./Ph";

export function Streaming() {
  return (
    <Secao
      id="streaming"
      titulo="Streaming"
      intro="Filmes, séries e canais para assistir pela internet."
      tom="papel"
    >
      <p style={{ marginTop: 16 }}>
        Aplicativos incluídos e em quais planos: <Ph>[quais apps, se são de terceiros, e em quais planos]</Ph>
      </p>
    </Secao>
  );
}
