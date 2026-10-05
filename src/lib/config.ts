const numero = process.env.NEXT_PUBLIC_WHATSAPP ?? "";

export const MENSAGEM_PADRAO =
  "Oi, quero consultar a disponibilidade da internet no meu endereço";
export const MENSAGEM_SUPORTE = "Oi, preciso de suporte na minha internet";

export function linkWhatsapp(mensagem: string = MENSAGEM_PADRAO): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

// 5585974012147 -> (85) 97401-2147
export function whatsappFormatado(): string {
  const d = numero.replace(/^55/, "");
  if (d.length < 10) return "";
  const ddd = d.slice(0, 2);
  const resto = d.slice(2);
  const corte = resto.length - 4;
  return `(${ddd}) ${resto.slice(0, corte)}-${resto.slice(corte)}`;
}

export const NOME = "Hynet Soluções em Telecom";
export const INSTAGRAM = "https://www.instagram.com/hynet.oficial/";
export const URL_SITE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
