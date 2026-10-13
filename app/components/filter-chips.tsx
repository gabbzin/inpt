"use client";

import { useState } from "react";

const chips = ["Todos", "Reforma Tributária", "Carga Tributária", "Artigos Técnicos", "Estudos Exclusivos", "Na Mídia"];

export function FilterChips() {
  const [active, setActive] = useState(chips[0]);

  return (
    <div className="flex flex-wrap items-center gap-2 pb-2">
      {chips.map((chip) => (
        <button
          key={chip}
          type="button"
          onClick={() => setActive(chip)}
          className={`rounded-lg px-4 py-2 text-xs font-semibold tracking-[0.04em] transition-colors ${
            chip === active ? "bg-navy text-white" : "bg-surface-mute text-body hover:bg-line"
          }`}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
