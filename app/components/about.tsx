import { SectionHeading } from "./section-heading";

const stats = [
  { value: "+23 anos", color: "text-ink", text: "De atuação técnica e pesquisas de impacto nacional." },
  { value: "100% Autônomo", color: "text-gold", text: "Neutralidade metodológica e subsídio suprapartidário." },
];

const milestones = [
  {
    year: "2001",
    title: "Fundação do INPT em Brasília",
    text: "Início dos estudos sistemáticos sobre a carga tributária nacional e publicação das primeiras matrizes comparativas de arrecadação.",
    dot: "bg-gold",
  },
  {
    year: "2008",
    title: "Lançamento do Índice de Transparência Fiscal",
    text: "Metodologia pioneira adotada pelo setor produtivo para demonstrar com precisão o esforço tributário de pessoas físicas e jurídicas.",
    dot: "bg-ink",
  },
  {
    year: "2016",
    title: "Big Data Fiscal & IA Aplicada",
    text: "Implementação de algoritmos de análise preditiva em bases estruturadas do SPED e compilações de jurisprudência administrativa e judicial.",
    dot: "bg-ink",
  },
  {
    year: "2024",
    title: "Referência na Reforma Tributária",
    text: "Desenvolvimento de modelagens econométricas para a EC 132, aferição do Split Payment e suporte técnico a setores regulados.",
    dot: "bg-gold",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-surface py-20">
      <div className="wrap flex flex-col gap-4">
        <SectionHeading eyebrow="INSTITUTO & PROPÓSITO TÉCNICO" className="max-w-4xl">
          Independência técnica e rigor científico a serviço do equilíbrio fiscal
        </SectionHeading>
        <div className="grid gap-8 pt-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <p className="text-lg leading-[1.625] text-text">
              O <strong className="font-semibold text-ink">Instituto Nacional de Planejamento e Tributação (INPT)</strong>{" "}
              atua como polo independente de inteligência fiscal, pesquisa macroeconômica aplicada e governança
              tributária preventiva. Formado por juristas, economistas fiscais, auditores e cientistas de dados, o
              instituto traduz complexidades normativas em premissas estratégicas sólidas.
            </p>
            <p className="text-[15px] leading-[1.625] text-body">
              Com sede em Brasília e representação nas capitais financeiras do país, produzimos estudos analíticos
              submetidos a rigorosos métodos de auditoria empírica. Atendemos conselhos de administração corporativos,
              associações setoriais de classe e instituições governamentais que demandam dados isentos e clareza
              analítica em momentos decisivos.
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {stats.map(({ value, color, text }) => (
                <div key={value} className="flex flex-col gap-1.5 rounded-xl bg-white px-5 pb-5.5 pt-5 shadow-card">
                  <span className={`pb-0.5 text-lg font-bold tracking-[-0.01em] ${color}`}>{value}</span>
                  <span className="text-[13px] leading-[18px] text-body">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-card lg:col-span-6">
            <div className="flex items-center justify-between gap-4 pb-4">
              <h3 className="text-base font-bold text-ink">Linha de Evolução Institucional</h3>
              <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-gold">
                Trajetória analítica
              </span>
            </div>
            <ol className="relative flex flex-col gap-8 pl-6">
              <span className="absolute inset-y-2 left-2 w-0.5 rounded-full bg-line" />
              {milestones.map(({ year, title, text, dot }) => (
                <li key={year} className="relative flex flex-col gap-1 pt-1.5">
                  <span className="text-xs font-bold tracking-[0.04em] text-gold">{year}</span>
                  <h4 className="text-base font-semibold text-ink">{title}</h4>
                  <p className="text-[13px] leading-[18px] text-body">{text}</p>
                  <span className={`absolute -left-[27px] top-1.5 size-3.5 rounded-full ring-4 ring-white ${dot}`} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
