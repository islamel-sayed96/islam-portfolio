export default function Logo({ className = "h-9 w-9" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ecc35a" />
          <stop offset="1" stopColor="#9c7118" />
        </linearGradient>
      </defs>
      <path
        d="M24 1.5 44.5 13v22L24 46.5 3.5 35V13Z"
        fill="#0b0d12"
        stroke="url(#logoGold)"
        strokeWidth="1.5"
      />
      <path
        d="M17 14v20M17 14h8.5M17 24h7M17 34h8.5"
        stroke="url(#logoGold)"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 14v20"
        stroke="url(#logoGold)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
