"use client";

import { Send } from "lucide-react";
import type { ReactNode } from "react";

const control =
  "w-full rounded-lg bg-surface px-4 text-[13px] text-text placeholder:text-muted outline-none focus:ring-2 focus:ring-navy/20";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2 pt-0.5">
      <span className="text-sm font-semibold tracking-[0.01em] text-text">{label}</span>
      {children}
    </label>
  );
}

export function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome Completo">
          <input type="text" name="nome" placeholder="Ex: Dr. Roberto Guimarães" className={`${control} h-11`} />
        </Field>
        <Field label="E-mail Corporativo">
          <input type="email" name="email" placeholder="roberto@empresa.com.br" className={`${control} h-11`} />
        </Field>
        <Field label="Empresa / Entidade">
          <input type="text" name="empresa" placeholder="Nome da instituição ou órgão" className={`${control} h-11`} />
        </Field>
        <Field label="Assunto Institucional">
          <select name="assunto" className={`${control} h-11`}>
            <option>Estudos e Simulações de Reforma</option>
          </select>
        </Field>
      </div>
      <Field label="Mensagem Detalhada">
        <textarea
          name="mensagem"
          placeholder="Descreva brevemente o escopo da sua demanda técnica ou institucional..."
          className={`${control} h-26 resize-none py-4 leading-[18px]`}
        />
      </Field>
      <label className="flex items-start gap-3 text-[13px] leading-[1.625] text-body">
        <input type="checkbox" name="lgpd" className="mt-1 size-[13px] accent-navy" />
        Concordo com o tratamento dos meus dados corporativos em conformidade estrita com a LGPD (Lei nº
        13.709/2018) e a Política de Privacidade do INPT.
      </label>
      <button
        type="submit"
        className="flex w-fit items-center justify-center gap-2 rounded-lg bg-navy px-8 py-3.5 text-sm font-semibold tracking-[0.01em] text-white shadow-card transition-opacity hover:opacity-90"
      >
        Enviar Mensagem Institucional
        <Send className="size-3.5" />
      </button>
    </form>
  );
}
