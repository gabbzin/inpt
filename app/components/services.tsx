import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  ChartLine,
  Gavel,
  GraduationCap,
  Landmark,
  PiggyBank,
  ShieldHalf,
} from "lucide-react";
import { SectionHeading } from "./section-heading";

const services = [
  {
    icon: ChartLine,
    title: "Estudos Tributários Setoriais",
    text: "Diagnósticos profundos de impacto fiscal, mensuração de carga média ponderada e subsídios para pleitos setoriais.",
  },
  {
    icon: Calculator,
    title: "Simulações da Reforma Tributária",
    text: "Projeção de fluxo de caixa e carga efetiva na transição do modelo atual para o IVA dual (IBS/CBS).",
  },
  {
    icon: Landmark,
    title: "Consultoria Estratégica em Planejamento",
    text: "Otimização lícita de regimes tributários com total segurança jurídica e governança societária.",
  },
  {
    icon: BadgeCheck,
    title: "Auditoria de Compliance e SPED",
    text: "Varredura preventiva com inteligência analítica para detecção prévia de inconsistências e assimetrias fiscais.",
  },
  {
    icon: PiggyBank,
    title: "Recuperação de Créditos Tributários",
    text: "Levantamento administrativo minucioso e aplicação segura de teses consolidadas para recomposição de caixa.",
  },
  {
    icon: ShieldHalf,
    title: "Valoração de Passivos & Contingências",
    text: "Suporte técnico especializado em fusões e aquisições (M&A), due diligence e auditoria legal-tributária.",
  },
  {
    icon: Gavel,
    title: "Pareceres e Laudos Periciais Fiscais",
    text: "Emissão de peças técnico-econômicas assinadas por doutrinadores e peritos para tribunais e arbitragens.",
  },
  {
    icon: Building2,
    title: "Incentivos Regionais (SUDAM/SUDENE)",
    text: "Estruturação, pleito e acompanhamento técnico de regimes diferenciados e benefícios de inovação (Lei do Bem).",
  },
  {
    icon: GraduationCap,
    title: "Treinamento In-Company & Capacitação",
    text: "Workshops executivos customizados para departamentos tributários, contábeis e diretorias financeiras.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-surface py-20">
      <div className="wrap flex flex-col gap-14">
        <div className="flex max-w-3xl flex-col gap-3">
          <SectionHeading eyebrow="SOLUÇÕES CORPORATIVAS">
            Serviços especializados para tomada de decisão fiscal e governança
          </SectionHeading>
          <p className="pt-1 text-lg leading-[1.625] text-body">
            Consultoria de alto nível, análises quantitativas e auditoria preventiva desenhadas para blindar balanços
            e otimizar a matriz fiscal em conformidade com as melhores práticas da OCDE.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="flex flex-col rounded-2xl bg-white p-7 shadow-card">
              <div className="flex flex-col gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="size-5" />
                </span>
                <h3 className="pt-px text-lg font-semibold leading-[26px] tracking-[-0.01em] text-ink">{title}</h3>
                <p className="text-[13px] leading-[1.625] text-body">{text}</p>
              </div>
              <a
                href="#contato"
                className="mt-auto flex w-fit items-center gap-1.5 pt-10 text-xs font-semibold tracking-[0.04em] text-gold"
              >
                Saiba mais
                <ArrowRight className="size-2.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
