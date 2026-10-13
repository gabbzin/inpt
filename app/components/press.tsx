import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FilterChips } from "./filter-chips";
import { SectionHeading } from "./section-heading";

const articles = [
  {
    source: "Estadão",
    date: "10 de Março, 2025",
    title: "Arrecadação fiscal bate recorde histórico no primeiro bimestre, aponta levantamento do INPT",
    text: "Índice do Impostômetro demonstra avanço de 4,2% acima da inflação oficial, impulsionado por tributos sobre produção e combustíveis.",
    read: "4 min de leitura",
  },
  {
    source: "Artigo Técnico INPT",
    date: "05 de Março, 2025",
    title: "Como o modelo de Split Payment afetará o capital de giro das médias empresas",
    text: "Análise matemática da retenção automática de IBS/CBS na liquidação financeira de duplicatas eletrônicas e gateways de pagamento.",
    read: "6 min de leitura",
  },
  {
    source: "G1 Economia",
    date: "28 de Fevereiro, 2025",
    title: "Brasil gasta 1.500 horas ao ano apenas para apuração tributária: o que esperar da simplificação",
    text: "Pesquisa histórica do INPT aponta que o custo de conformidade representa cerca de 1,2% do faturamento operacional bruto das companhias.",
    read: "5 min de leitura",
  },
  {
    source: "Revista Dialética",
    date: "20 de Fevereiro, 2025",
    title: "Nota Técnica: As divergências de crédito acumulado de ICMS e o fundo de compensação",
    text: "Estudo de caso federativo sobre a transição do regime de créditos fiscais para o saldo de encerramento em 2032.",
    read: "7 min de leitura",
  },
];

export function Press() {
  return (
    <section id="imprensa" className="bg-surface-alt py-20">
      <div className="wrap flex flex-col gap-8">
        <SectionHeading eyebrow="PESQUISA & MÍDIA" className="max-w-5xl">
          O INPT como voz técnica dos principais debates econômicos
        </SectionHeading>
        <FilterChips />
        <article className="grid items-center gap-8 rounded-2xl bg-white px-6 pb-10 pt-12 shadow-card md:px-10 lg:grid-cols-12">
          <div className="relative h-72 overflow-hidden rounded-xl bg-navy lg:col-span-5">
            <Image src="/images/skyline-sao-paulo.png" alt="Skyline de São Paulo" fill sizes="(min-width: 1024px) 435px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-ink/20" />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.05em] text-gold">
                Dossiê especial 2025
              </span>
              <span className="text-[11px] font-bold tracking-[0.06em] text-body">Valor Econômico & Folha</span>
            </div>
            <h3 className="font-serif text-[32px] font-semibold leading-10 tracking-[-0.01em] text-ink">
              Estudo INPT aponta impacto da regulamentação do IBS e CBS nos setores de serviços e tecnologia
            </h3>
            <p className="text-[15px] leading-[1.625] text-body">
              O relatório detalha o efeito cascata nas margens brutas do setor terciário a partir da incidência
              não-cumulativa plena, mapeando as assimetrias no aproveitamento de créditos com folha de salários e
              locação de infraestrutura tecnológica.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="flex items-center gap-3 text-[13px] text-body">
                14 de Março, 2025 <span>•</span> 8 min de leitura
              </span>
              <a href="#" className="flex items-center gap-1 text-sm font-semibold tracking-[0.01em] text-gold">
                Ler nota completa
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
        </article>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map(({ source, date, title, text, read }) => (
            <article key={title} className="flex flex-col justify-between gap-3 rounded-2xl bg-white p-7 shadow-card">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-gold">{source}</span>
                  <span className="text-[13px] text-body">{date}</span>
                </div>
                <h4 className="text-lg font-semibold leading-[1.375] tracking-[-0.01em] text-ink">{title}</h4>
                <p className="text-[13px] leading-[18px] text-body">{text}</p>
              </div>
              <div className="flex items-center justify-between pt-8">
                <span className="text-[13px] text-body">{read}</span>
                <a href="#" className="flex items-center gap-1 text-xs font-semibold tracking-[0.04em] text-ink">
                  Acessar notícia
                  <ArrowRight className="size-2.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center pt-4">
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg bg-surface-mute px-8 py-3.5 text-sm font-semibold tracking-[0.01em] text-navy transition-colors hover:bg-line"
          >
            Ver todas as matérias e estudos
            <ArrowRight className="size-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
