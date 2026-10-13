import { BookOpen, Mail, MapPin, Share2 } from "lucide-react";
import Image from "next/image";

const social = [
  { icon: Share2, label: "LinkedIn" },
  { icon: BookOpen, label: "Publicações" },
  { icon: Mail, label: "Contato Oficial" },
];

const columns = [
  {
    title: "Institucional",
    className: "lg:col-span-2",
    items: ["Quem Somos", "Conselho Diretivo", "Código de Ética", "Clipping & Imprensa", "Ouvidoria Fiscal"],
  },
  {
    title: "Projetos & Pesquisas",
    className: "lg:col-span-3",
    items: [
      "Barômetro Tributário",
      "Observatório da Reforma",
      "Índice de Complexidade Fiscal",
      "Manuais e Pareceres Técnicos",
      "Acervo Doutrinário",
    ],
  },
];

const offices = [
  ["Brasília / DF", "Setor de Autarquias Sul, Quadra 04, Bloco A, Ed. Capital Fiscal, 8º andar"],
  ["São Paulo / SP", "Av. Brigadeiro Faria Lima, 3477, 14º andar - Itaim Bibi"],
];

const legal = ["Política de Privacidade", "Termos de Uso", "Segurança da Informação"];

const heading = "text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-gold-mid";

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="wrap pb-6 pt-10">
        <div className="grid gap-8 border-b border-ink/20 pb-10 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="flex w-fit items-center gap-2 rounded-lg bg-white/10 p-3 backdrop-blur-[2px]">
              <Image src="/images/brasao-inpt.png" alt="" width={101} height={40} className="h-10 w-auto mix-blend-multiply" />
              <span className="flex flex-col">
                <span className="text-lg font-bold leading-[18px] tracking-[-0.01em] text-white">INPT</span>
                <span className="pt-1 text-[11px] font-bold leading-[11px] tracking-[0.06em] text-gold-soft">
                  Instituto Nacional
                </span>
              </span>
            </div>
            <p className="text-[13px] leading-[1.625] text-sky">
              Entidade de excelência acadêmica e rigor analítico dedicada à inteligência tributária, proposições de
              política fiscal e governança econômica corporativa.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {social.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-lg bg-navy-deep text-sky transition-colors hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          {columns.map(({ title, className, items }) => (
            <div key={title} className={`flex flex-col gap-2 ${className}`}>
              <h4 className={heading}>{title}</h4>
              <ul className="flex flex-col gap-1">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] leading-[18px] text-sky transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h4 className={heading}>Sedes Operacionais</h4>
            <div className="flex flex-col gap-2">
              {offices.map(([city, address]) => (
                <div key={city} className="flex gap-1">
                  <MapPin className="mt-0.5 size-3 shrink-0 text-gold-mid" />
                  <p className="pr-6 text-[13px] leading-[18px] text-sky">
                    <b className="block text-white">{city}</b>
                    {address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-4 text-[13px] leading-[18px] text-slate md:flex-row md:items-center">
          <p>© 2025 INPT - Instituto Nacional de Planejamento e Tributação. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-6">
            {legal.map((item) => (
              <a key={item} href="#" className="transition-colors hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
