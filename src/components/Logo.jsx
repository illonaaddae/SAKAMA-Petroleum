import logoImage from "../assets/logo-removebg-preview.png";

function Logo({ className = "" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <img
        src={logoImage}
        alt="SAKAMA Logo"
        className={className}
        style={{
          display: "block",
          height: "60px",
          width: "auto",
          objectFit: "contain",
        }}
      />
      <span
        style={{
          fontSize: "18px",
          fontWeight: "700",
          letterSpacing: "0.5px",
          color: "currentColor",
          fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          textTransform: "uppercase",
        }}
      >
        SAKAMA PETROLEUM
      </span>
    </div>
  );
}

export default Logo;
