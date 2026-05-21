import { useEffect, useState } from "react";

export default function Navbar({ onBookClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Active section highlight while scrolling
  useEffect(() => {
    const sections = ["home", "services", "why-us", "contact"];

    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 120;
          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        Afrilog<span>Hub</span>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a
          href="#home"
          className={activeSection === "home" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="#services"
          className={activeSection === "services" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>

        <a
          href="#why-us"
          className={activeSection === "why-us" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Why Us
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

        {/* Mobile Button */}
        <button
          className="btn btn-primary mobile-btn"
          onClick={() => {
            onBookClick();
            setMenuOpen(false);
          }}
        >
          Book a Delivery
        </button>
      </nav>

      {/* Desktop Button */}
      <button
        className="btn btn-primary header-btn"
        onClick={onBookClick}
      >
        Book a Delivery
      </button>
    </header>
  );
}