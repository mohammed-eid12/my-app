import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Donate from "./pages/Donate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (p) => { setPage(p); setMenuOpen(false); window.scrollTo(0,0); };

  return (
    <div className="app">
      <Navbar page={page} navigate={navigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
          {page === "home" && <Home navigate={navigate} />}
          {page === "about" && <About navigate={navigate} />}
          {page === "services" && <Services navigate={navigate} />}
          {page === "contact" && <Contact />}
          {page === "login" && <Login navigate={navigate} />}
          {page === "register" && <Register navigate={navigate} />}
          {page === "donate" && <Donate navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
