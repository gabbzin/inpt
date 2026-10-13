import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
  className = "max-w-3xl",
}: {
  eyebrow: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="h-6 w-1.5 rounded-full bg-gold" />
        <span className="text-xs font-bold uppercase tracking-[0.1em] text-gold">{eyebrow}</span>
      </div>
      <h2 className="font-serif text-4xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[56px] md:leading-16">
        {children}
      </h2>
    </div>
  );
}
