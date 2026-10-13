import { Building2, Mail, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";
import { SectionHeading } from "./section-heading";

const channels = [
  {
    icon: Phone,
    title: "Centrais Telefônicas",
    lines: ["Brasília: +55 (61) 3224-8900", "São Paulo: +55 (11) 3045-7720"],
  },
  {
    icon: Mail,
    title: "Correio Eletrônico",
    lines: ["Geral: contato@inpt.org.br", "Consultoria: projetos@inpt.org.br", "Imprensa: imprensa@inpt.org.br"],
  },
];

const offices = [
  ["Brasília:", "Setor Bancário Sul (SBS), Quadra 02, Bloco E, Ed. Prime Fiscal, 11º andar."],
  ["São Paulo:", "Av. Brigadeiro Faria Lima, 3477, 14º andar - Itaim Bibi."],
];

export function Contact() {
  return (
    <section id="contato" className="bg-surface py-20">
      <div className="wrap flex flex-col gap-14">
        <SectionHeading eyebrow="FALE COM NOSSOS ESPECIALISTAS">
          Inicie um diálogo com nosso corpo técnico e de pesquisa
        </SectionHeading>
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="rounded-2xl bg-white p-6 shadow-card md:p-10 lg:col-span-7">
            <ContactForm />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-card">
              <h3 className="text-lg font-bold leading-[26px] tracking-[-0.01em] text-ink">
                Canais Diretos de Atendimento
              </h3>
              <div className="flex flex-col gap-4">
                {channels.map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-3">
                    <Icon className="mt-0.5 size-4.5 shrink-0 text-gold" />
                    <div className="flex flex-col">
                      <strong className="text-sm font-semibold leading-5 tracking-[0.01em] text-ink">{title}</strong>
                      {lines.map((line) => (
                        <span key={line} className="text-[13px] leading-[18px] text-body">
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex gap-3">
                  <Building2 className="mt-0.5 size-4.5 shrink-0 text-gold" />
                  <div className="flex flex-col gap-0.5">
                    <strong className="text-sm font-semibold leading-5 tracking-[0.01em] text-ink">
                      Sedes Institucionais
                    </strong>
                    <p className="text-[13px] leading-[18px] text-body">
                      {offices.map(([city, address]) => (
                        <span key={city} className="block">
                          <b>{city}</b> {address}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-navy p-6 shadow-[0_1px_2px_rgb(0_0_0/0.05)]">
              <span className="absolute -bottom-8 -right-8 size-36 rounded-full bg-gold/20" />
              <div className="relative flex flex-col gap-2 pt-1.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-gold-soft">
                  Cobertura federativa
                </span>
                <h4 className="pt-0.5 text-lg font-semibold leading-[26px] tracking-[-0.01em] text-white">
                  Presença Técnica em Todo o Território
                </h4>
                <p className="text-[13px] leading-[18px] text-sky">
                  Atuação em 27 capitais com bases federadas para auditoria em tempo real de legislações estaduais e
                  municipais.
                </p>
                <p className="flex items-center gap-4 pt-2 text-sm font-semibold tracking-[0.01em] text-gold-soft">
                  27 Unidades Federativas <span>•</span> 5 Regiões Fiscais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
