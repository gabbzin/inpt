"use client";

import { ShieldCheck } from "lucide-react";
import { useState } from "react";

export function CookieBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 w-[calc(100vw-2rem)] max-w-[576px] rounded-xl border border-outline bg-white p-[17px] shadow-[0_10px_15px_-3px_rgb(0_0_0/0.1),0_4px_6px_-4px_rgb(0_0_0/0.1)] md:left-8">
      <div className="flex items-center gap-1">
        <ShieldCheck className="size-4 text-gold" />
        <h3 className="text-sm font-bold tracking-[0.01em] text-text">Privacidade e Conformidade LGPD</h3>
      </div>
      <p className="pt-1.5 text-[13px] leading-[1.625] text-body">
        Utilizamos cookies essenciais e tecnologias analíticas para conferir integridade operacional, conformidade
        regulatória e aprimoramento de nossos estudos econômicos, conforme nossa Diretriz de Governança Digital.
      </p>
      <div className="flex items-center justify-end gap-2 pt-2">
        <button type="button" className="rounded-lg px-4 py-2 text-xs font-semibold tracking-[0.04em] text-body">
          Personalizar
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-lg bg-navy px-4 py-2 text-xs font-semibold tracking-[0.04em] text-white"
        >
          Prosseguir e Aceitar
        </button>
      </div>
    </div>
  );
}
