import { MessageSquare } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="#contato"
      aria-label="Atendimento Institucional WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full border-2 border-white bg-gold text-white shadow-[0_10px_15px_-3px_rgb(0_0_0/0.1),0_4px_6px_-4px_rgb(0_0_0/0.1)] transition-transform hover:scale-105"
    >
      <MessageSquare className="size-6" />
    </a>
  );
}
