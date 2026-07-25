import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/navbar.css";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Speisekarte", path: "/speisekarte" },
  { label: "Getränkekarte", path: "/getraenkekarte" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Galerie", path: "/galerie" },
  { label: "Karriere", path: "/karriere" },
  { label: "Kontakt", path: "/kontakt" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <Link
          to="/"
          className="navbar__brand"
          onClick={closeMenu}
          aria-label="Monty's Bar Startseite"
        >
          <span className="navbar__monogram">M</span>

          <NavLink
  to="/"
  className="brand"
  onClick={() => setMenuOpen(false)}
>
  <img
    src={logo}
    alt="Monty's Bar Bayreuth"
    className="brand-logo"
  />
</NavLink>
        </Link>

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

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;