import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ page, navigate, menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "home", label: "Home" },
    { key: "about", label: "About Us" },
    { key: "services", label: "Services" },
    { key: "contact", label: "Contact" },
    { key: "donate", label: "Donate" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => navigate("home")}>
          <div className="logo-icon">🕊️</div>
          <div className="logo-text">
            <span className="logo-main">RefuGuide</span>
            <span className="logo-sub">Your Path Forward</span>
          </div>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map(l => (
            <li key={l.key}>
              <button
                className={`nav-link ${page === l.key ? "active" : ""}`}
                onClick={() => navigate(l.key)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn-nav-outline" onClick={() => navigate("login")}>Log In</button>
          <button className="btn-nav-fill" onClick={() => navigate("register")}>Sign Up</button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map(l => (
            <button key={l.key} className={`mobile-link ${page === l.key ? "active" : ""}`} onClick={() => navigate(l.key)}>{l.label}</button>
          ))}
          <div className="mobile-actions">
            <button className="btn-nav-outline" onClick={() => navigate("login")}>Log In</button>
            <button className="btn-nav-fill" onClick={() => navigate("register")}>Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
