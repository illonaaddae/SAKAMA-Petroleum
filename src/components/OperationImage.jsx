import { useState } from "react";

function OperationImage({ src, fallback, alt, title }) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  const handleError = () => {
    if (!triedFallback && fallback) {
      setTriedFallback(true);
      setImageSrc(fallback);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="operation-image-placeholder">
        <svg
          viewBox="0 0 400 300"
          xmlns="http://www.w3.org/2000/svg"
          className="placeholder-icon"
        >
          <rect width="400" height="300" fill="url(#placeholderGradient)" />
          <circle cx="200" cy="120" r="40" fill="rgba(255,255,255,0.1)" />
          <path
            d="M 180 140 L 200 120 L 220 140 M 200 120 L 200 180"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <text
            x="200"
            y="220"
            textAnchor="middle"
            fill="rgba(255,255,255,0.6)"
            fontSize="24"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            {title}
          </text>
          <defs>
            <linearGradient id="placeholderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--bg-secondary)" />
              <stop offset="100%" stopColor="var(--bg-card-solid)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading="lazy"
      onError={handleError}
      onLoad={(e) => {
        e.target.style.opacity = "1";
      }}
      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
    />
  );
}

export default OperationImage;

