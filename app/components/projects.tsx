import { ArrowRight, ChartColumn, Download } from "lucide-react";
import type { ReactNode } from "react";
import { SectionHeading } from "./section-heading";

const labelClass = "text-[11px] font-bold uppercase tracking-[0.05em]";

const projects: {
  title: string;
  text: string;
  badge: string;
  badgeClass: string;
  meta: string;
  panelClass: string;
  panel: ReactNode;
}[] = [
  {
    title: "Impostômetro Nacional",
    text: "Painel analítico e telão físico em tempo real que calcula o montante exato de tributos federais, estaduais e municipais pagos pela sociedade. Permite comparar o esforço fiscal de dias trabalhados e a efetiva destinação orçamentária para serviços públicos.",
    badge: "Monitoramento contínuo",
    badgeClass: "bg-gold/15 text-gold",
    meta: "Desde 2005",
    panelClass: "gap-6 bg-navy",
    panel: (
      <>
        <span className={`${labelClass} text-gold-soft`}>Painel oficial INPT</span>
        <div className="flex flex-col gap-1 py-4">
          <span className="text-[11px] font-bold tracking-[0.06em] text-sky">Total Arrecadado (Ano Corrente)</span>
          <span className="text-lg font-bold tracking-[-0.025em] text-white">R$ 842.192.227.244</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-gold-soft" />
          <span className="text-[13px] text-sky">Atualização em tempo real via SPED</span>
        </div>
      </>
    ),
  },
  {
    title: "Observatório da Reforma Tributária (IBS & CBS)",
    text: "Ambiente de modelagem matemática e simulação setorial que antecipa o comportamento de preços, margens operacionais e exigências de capital de giro sob o mecanismo do Split Payment e transição progressiva para o IVA dual.",
    badge: "Emenda Constitucional 132",
    badgeClass: "bg-navy/10 text-navy",
    meta: "Modelagem Preditiva",
    panelClass: "bg-surface-mute",
    panel: (
      <>
        <span className={`${labelClass} text-gold`}>Capacidade preditiva</span>
        <div className="flex flex-col gap-1 py-4">
          <span className="font-serif text-[32px] font-bold leading-10 tracking-[-0.01em] text-ink">42 Setores</span>
          <span className="text-[13px] leading-[18px] text-body">
            Matrizes de insumo-produto parametrizadas com cenários de alíquota de referência.
          </span>
        </div>
        <span className="flex items-center gap-1 text-[11px] font-semibold tracking-[0.06em] text-ink">
          <ChartColumn className="size-3" />
          Simulador para 42 setores econômicos
        </span>
      </>
    ),
  },
  {
    title: "Cidadania & Educação Fiscal",
    text: "Iniciativa que verte a complexidade jurídica fiscal em cartilhas temáticas abertas, masterclasses executivas e programas de capacitação para a sociedade civil, lideranças empresariais e gestores públicos de todo o Brasil.",
    badge: "Capacitação & Academia INPT",
    badgeClass: "bg-gold/15 text-gold",
    meta: "Acesso Aberto",
    panelClass: "bg-surface-mute",
    panel: (
      <>
        <span className={`${labelClass} text-gold`}>Disseminação aberta</span>
        <div className="flex flex-col gap-1 py-4">
          <span className="font-serif text-[32px] font-bold leading-10 tracking-[-0.01em] text-ink">+60.000</span>
          <span className="text-[13px] leading-[18px] text-body">
            Publicações técnicas e cartilhas de conformidade baixadas por acadêmicos e analistas.
          </span>
        </div>
        <span className="flex items-center gap-1 text-[11px] font-semibold tracking-[0.06em] text-ink">
          <Download className="size-2.5" />
          +60 mil downloads de guias e cartilhas
        </span>
      </>
    ),
  },
];

export function Projects() {
  return (
    <section id="projetos" className="bg-surface-alt py-20">
      <div className="wrap flex flex-col gap-12">
        <SectionHeading eyebrow="INICIATIVAS PÚBLICAS & PROJETOS">
          Projetos de impacto nacional que conscientizam e transformam o país
        </SectionHeading>
        <div className="flex flex-col gap-6">
          {projects.map(({ title, text, badge, badgeClass, meta, panelClass, panel }) => (
            <article key={title} className="grid gap-8 rounded-2xl bg-white p-6 shadow-card md:p-10 lg:grid-cols-12">
              <div className="flex flex-col gap-4 self-center lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.05em] ${badgeClass}`}
                  >
                    {badge}
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.06em] text-body">{meta}</span>
                </div>
                <h3 className="font-serif text-[26px] font-semibold leading-[34px] tracking-[-0.005em] text-ink">
                  {title}
                </h3>
                <p className="text-[15px] leading-[1.625] text-body">{text}</p>
                <a href="#" className="flex w-fit items-center gap-2 pt-3 text-sm font-semibold tracking-[0.01em] text-ink">
                  Conhecer projeto
                  <ArrowRight className="size-3" />
                </a>
              </div>
              <div className={`flex flex-col self-center rounded-xl p-6 lg:col-span-4 ${panelClass}`}>{panel}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
