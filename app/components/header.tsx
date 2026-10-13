import Image from "next/image";

const links = [
  ["Sobre", "#sobre"],
  ["Projetos", "#projetos"],
  ["Serviços", "#servicos"],
  ["INPT na imprensa", "#imprensa"],
  ["Contato", "#contato"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white drop-shadow-[0_1px_4px_rgb(0_0_0/0.04)]">
      <div className="wrap flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image src="/images/logo-inpt.png" alt="INPT" width={88} height={44} className="h-11 w-auto" priority />
          <span className="flex flex-col">
            <span className="text-lg font-bold leading-[18px] tracking-[-0.025em] text-navy">INPT</span>
            <span className="pt-1 text-[11px] font-bold uppercase leading-[11px] tracking-[0.05em] text-gold">
              Planejamento e Tributação
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="px-3 py-2 text-sm font-semibold tracking-[0.01em] text-body transition-colors hover:text-navy">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="rounded-lg bg-navy px-6 py-3 text-sm font-semibold tracking-[0.01em] text-white shadow-card transition-opacity hover:opacity-90"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
