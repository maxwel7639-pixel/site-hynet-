# Pendências para o dono da Hynet

Marque `[x]` quando o dado chegar e for colocado no site.

## Dados da empresa
- [ ] Cidade e bairros atendidos (hero, Cobertura, rodapé)
- [ ] Planos: velocidade, preço e o que inclui (3 linhas na seção Planos)
- [ ] Qual plano é o "mais escolhido" (só aparece se confirmado)
- [ ] Fidelidade e taxa de instalação (Planos e FAQ)
- [ ] Streaming: quais apps, se são de terceiros, em quais planos
- [ ] Prazo de instalação (Como contratar e FAQ)
- [ ] Roteador: incluso, comodato ou à parte (FAQ)
- [ ] Regra de mudança de endereço (FAQ)
- [ ] Formas de pagamento (FAQ)
- [ ] Horário e canais de suporte
- [ ] CNPJ e registro na Anatel (rodapé)
- [ ] Texto da política de privacidade (LGPD) e responsável pelos dados
- [ ] O que aparece no topo: promoção ou plano principal

## Marca e imagens
- [ ] Logo em alta resolução (hoje o topo usa o texto "Hynet")
- [ ] Cores da marca (hoje: direção A, petróleo e âmbar, em `src/styles/tokens.css`)
- [ ] Fotos reais (o site não usa nenhuma ainda)

## Confirmações
- [ ] WhatsApp (85) 97401-2147 é o número certo (vem de `NEXT_PUBLIC_WHATSAPP`)
- [ ] Endereço final do site (`NEXT_PUBLIC_SITE_URL`) e domínio

## Decisão técnica
- [ ] Medir cliques no botão do WhatsApp exige analytics. Nada foi instalado. Decidir antes (ex.: Vercel Web Analytics, sem cookie).

## Onde os placeholders estão no código
Tudo que é placeholder usa o componente `<Ph>` (aparece com fundo âmbar claro e borda tracejada).
Para listar: `grep -rn "<Ph>" src`
