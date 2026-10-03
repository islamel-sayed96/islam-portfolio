export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ecc35a" />
          <stop offset="1" stopColor="#9c7118" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="#0b0d12" />
      <circle cx="24" cy="14.2" r="4.3" fill="url(#logoGold)" />
      <rect x="19.7" y="22.4" width="8.6" height="18.6" rx="3" fill="url(#logoGold)" />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="text-lg font-extrabold tracking-tight text-ink-950 dark:text-white">
        islam<span className="text-gold-500">.</span>
      </span>
    </span>
  );
}
