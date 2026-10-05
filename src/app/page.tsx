import { Topo } from "@/components/Topo";
import { Hero } from "@/components/Hero";
import { Planos } from "@/components/Planos";
import { Streaming } from "@/components/Streaming";
import { Cobertura } from "@/components/Cobertura";
import { Passos } from "@/components/Passos";
import { Suporte } from "@/components/Suporte";
import { Faq } from "@/components/Faq";
import { Rodape } from "@/components/Rodape";
import { BotaoFlutuante } from "@/components/BotaoFlutuante";

export default function Home() {
  return (
    <>
      <Topo />
      <main>
        <Hero />
        <Planos />
        <Streaming />
        <Cobertura />
        <Passos />
        <Suporte />
        <Faq />
      </main>
      <Rodape />
      <BotaoFlutuante />
    </>
  );
}
