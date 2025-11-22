import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import "../App.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/#services" },
  { name: "Locations", path: "/#locations" },
  { name: "Contact", path: "/#contact" },
];

const ThemeIcon = ({ theme }) =>
  theme === "dark" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1Zm6.36 2.64a1 1 0 0 1 0 1.41l-1.41 1.41a1 1 0 1 1-1.41-1.41l1.41-1.41a1 1 0 0 1 1.41 0ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm8 3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-7 8a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-7.36-5.36a1 1 0 0 1 1.41 0l1.41 1.41A1 1 0 1 1 6.05 17.5l-1.41-1.41a1 1 0 0 1 0-1.41ZM4 11a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm2.64-6.36a1 1 0 0 1 1.41 0l1.41 1.41A1 1 0 1 1 7.05 7.46L5.64 6.05a1 1 0 0 1 0-1.41Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 15a1 1 0 0 1-1.17.99 8.5 8.5 0 1 1-9.82-9.82A1 1 0 0 1 11 5a1 1 0 0 1 .76.35A10.5 10.5 0 0 0 21 14a1 1 0 0 1 0 1Z" />
    </svg>
  );

function Layout({ children, theme, setTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        !event.target.closest(".nav-links") &&
        !event.target.closest(".mobile-menu-toggle")
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e, path) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      const hash = path.substring(1);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 200);
      } else {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
    closeMobileMenu();
  };

  return (
    <div className="page">
      <header className="site-header">
        <Link to="/" className="brand">
          <Logo className="brand-logo" />
        </Link>
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={link.name === "About Us" ? "nav-link-about" : ""}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle color mode"
        >
          <ThemeIcon theme={theme} />
        </button>
      </header>

      {children}

      <footer className="site-footer" id="contact">
        <div>
          <p className="footer-label">SAKAMA</p>
          <p>Petroleum, Gas Logistics & Trading Limited</p>
        </div>
        <div>
          <p className="footer-label">Contact Us</p>
          <p>Office Location: GPS Address</p>
          <p>Contact: (To be updated)</p>
          <p>Email: (To be updated)</p>
          <p>Website: (To be updated)</p>
        </div>
        <div>
          <p className="footer-label">Location</p>
          <p>Tarkwa & Simpa Outlets</p>
          <p>Western Region, Ghana</p>
        </div>
      </footer>
      <p className="copyright">
        © {new Date().getFullYear()} SAKAMA Petroleum, Gas Logistics & Trading
        Limited. All rights reserved.
      </p>
    </div>
  );
}

export default Layout;
