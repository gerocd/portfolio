import { useState } from "react";
import "../HamburguerNav/ResponsiveNavbar.css";

const Hamburguer = () => {
  const irASeccion = (idSeccion) => {
    document.getElementById(idSeccion).scrollIntoView({ behavior: "smooth" });
    handleCloseMenu(); // Cierra el menú después de hacer clic en un elemento de la lista
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <img
        className="hamburger-icon"
        src="/hamburguer.png"
        alt="Menu"
        onClick={handleToggleMenu}
      />
      {isMenuOpen && (
        <div className="ul-container">
          <button className="close-button-navbar" onClick={handleCloseMenu}>
            X
          </button>

          <ul className="ul-content">
            <li className="li-text" onClick={() => irASeccion("home")}>
              Home
            </li>
            <li className="li-text" onClick={() => irASeccion("about-me")}>
              About me
            </li>
            <li className="li-text" onClick={() => irASeccion("works")}>
              Works
            </li>
            <li className="li-text" onClick={() => irASeccion("services")}>
              Services
            </li>
            <li className="li-text" onClick={() => irASeccion("contact")}>
              Contact
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Hamburguer;
