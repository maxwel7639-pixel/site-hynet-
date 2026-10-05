import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { INSTAGRAM, NOME, URL_SITE } from "@/lib/config";

const titulo = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-titulo",
  display: "swap",
});

const texto = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-texto",
  display: "swap",
});

const descricao =
  "Internet de fibra óptica da Hynet. Consulte a disponibilidade no seu endereço pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITE),
  title: `${NOME} | Internet de fibra óptica`,
  description: descricao,
  openGraph: {
    title: `${NOME} | Internet de fibra óptica`,
    description: descricao,
    type: "website",
    locale: "pt_BR",
    siteName: "Hynet",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c2b33",
};

// JSON-LD só com dados confirmados em público (nome e Instagram).
// Telefone, cidade e CNPJ entram quando o dono confirmar.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InternetServiceProvider",
  name: NOME,
  sameAs: [INSTAGRAM],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${texto.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
