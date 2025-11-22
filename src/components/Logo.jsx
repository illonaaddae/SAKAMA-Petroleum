import logoImage from "../assets/logo-removebg-preview.png";

function Logo({ className = "" }) {
  return (
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
  );
}

export default Logo;
