
import logo from "./assets/logos/montys-logo.png";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import FoodMenu from "./pages/FoodMenu.jsx";
import Reservation from "./pages/Reservation.jsx";
import Career from "./pages/Career.jsx";
import DrinksMenu from "./pages/DrinksMenu.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Imprint from "./pages/Imprint.jsx";
import Privacy from "./pages/Privacy.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes
} from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const pages = [
  { path: "/", label: "Home" },
  { path: "/speisekarte", label: "Speisekarte" },
  { path: "/getraenkekarte", label: "Getränkekarte" },
  { path: "/ueber-uns", label: "Über uns" },
  { path: "/karriere", label: "Karriere" },
  { path: "/kontakt", label: "Kontakt" }
];

function Page({ title }) {
  return (
    <main className="page">
      <p className="eyebrow">Monty's Bar · Bayreuth</p>
      <h1>{title}</h1>
      <p className="intro">
        Ehrliche Gastfreundschaft, frisch zubereitete Küche und gemütliche
        Pub-Atmosphäre.
      </p>
    </main>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
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

        <nav className={menuOpen ? "navigation open" : "navigation"}>
          <div className="nav-links">
            {pages.map((page) => (
              <NavLink
                key={page.path}
                to={page.path}
                end={page.path === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                {page.label}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/reservierung"
            className="reservation-button"
            onClick={() => setMenuOpen(false)}
          >
            Tisch reservieren
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/speisekarte"
          element={<FoodMenu />}
        />

        <Route
          path="/getraenkekarte"
          element={<DrinksMenu />}
        />

        <Route
          path="/ueber-uns"
          element={<About />}
        />

        <Route
          path="/karriere"
          element={<Career />}
        />

        <Route
          path="/kontakt"
          element={<Contact />}
        />

        <Route
          path="/reservierung"
          element={<Reservation />}
        />

        <Route
          path="/impressum"
          element={<Imprint />}
        />

        <Route
          path="/datenschutz"
          element={<Privacy />}
        />

        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
