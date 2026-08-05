import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Speisekarte", path: "/speisekarte" },
  { label: "Getränkekarte", path: "/getraenkekarte" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Karriere", path: "/karriere" },
  { label: "Kontakt", path: "/kontakt" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${
        scrolled || menuOpen ? "navbar--solid" : ""
      }`}
    >
      <div className="navbar__inner">
  <button
    className="navbar__toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
  >
    {menuOpen ? <FiX /> : <FiMenu />}
  </button>

  <nav
    className={`navbar__nav ${
      menuOpen ? "navbar__nav--open" : ""
    }`}
    aria-label="Hauptnavigation"
  >
          <div className="navbar__links">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navbar__link ${
                    isActive ? "navbar__link--active" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/reservierung"
            onClick={closeMenu}
            className="navbar__reservation"
          >
            Tisch reservieren
          </NavLink>
        </nav>

        {menuOpen && (
  <div
    className="navbar__overlay"
    onClick={closeMenu}
  />
)}

      </div>
    </header>
  );
}

export default Navbar;