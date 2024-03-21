import "./ButtonsContainer.css";

const ButtonsContainer = () => {
  const irASeccion = (idSeccion) => {
    document.getElementById(idSeccion).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="buttons-container">
      <button className="button" onClick={() => irASeccion("home")}>
        <div className="text">Home</div>
      </button>
      <button className="button1" onClick={() => irASeccion("about-me")}>
        <div className="text-button">About Me</div>
      </button>
      <button className="button1" onClick={() => irASeccion("works")}>
        <div className="text-button">Works</div>
      </button>
      <button className="button3" onClick={() => irASeccion("services")}>
        <div className="text-button">Services</div>
      </button>
    </nav>
  );
};

export default ButtonsContainer;
