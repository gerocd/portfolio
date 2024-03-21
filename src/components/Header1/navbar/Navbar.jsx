import { useState, useEffect } from "react";
import "./Navbar.css";
import ButtonsContainer from "./ButtonsContainer";
import Hamburguer from "../../HamburguerNav/ResponsiveNavbar";

const Navbar = () => {
  const irASeccion = (idSeccion) => {
    document.getElementById(idSeccion).scrollIntoView({ behavior: "smooth" });
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showHamburguer = windowWidth <= 800;

  const showContactButton = windowWidth > 800;

  const showButtonsContainer = windowWidth > 800;

  return (
    <nav className="navbar">
      {windowWidth <= 1100 ? (
        <img className="logo-icon-alt" alt="" src="/letra-g.png" />
      ) : (
        <img className="logo-icon" alt="" src="/name@2x.png" />
      )}

      {showHamburguer && <Hamburguer />}

      {showContactButton && (
        <button className="button4" onClick={() => irASeccion("contact")}>
          <div className="text1">Contact Me</div>
        </button>
      )}
      {showButtonsContainer && <ButtonsContainer />}
    </nav>
  );
};

export default Navbar;
