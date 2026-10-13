import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`relative block aspect-[5/2] overflow-hidden ${className}`}>
      <Image src="/images/logo-inpt.png" alt="INPT" fill priority sizes="144px" className="scale-[1.2] object-cover" />
    </span>
  );
}
