function Logo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SAKAMA Logo"
    >
      {/* Logo Symbol - Circular design inspired by oil companies */}
      <g>
        {/* Outer circle */}
        <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
        {/* Inner geometric shape - representing energy/power */}
        <path
          d="M 20 8 L 28 16 L 24 20 L 20 16 L 16 20 L 12 16 Z"
          fill="#1b1207"
          opacity="0.9"
        />
        {/* Additional accent lines */}
        <circle cx="20" cy="20" r="10" fill="none" stroke="#1b1207" strokeWidth="1.5" opacity="0.3" />
        <circle cx="20" cy="20" r="6" fill="none" stroke="#1b1207" strokeWidth="1" opacity="0.5" />
      </g>
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8a333" />
          <stop offset="100%" stopColor="#f0c75e" />
        </linearGradient>
      </defs>
      
      {/* SAKAMA Text */}
      <text
        x="45"
        y="26"
        fontSize="18"
        fontWeight="700"
        fill="currentColor"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="0.5"
      >
        SAKAMA
      </text>
    </svg>
  );
}

export default Logo;

