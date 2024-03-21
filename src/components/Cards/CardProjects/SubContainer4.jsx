import CardContainer from "./CardContainer";
import "./SubContainer4.css";

const SubContainer4 = () => {
  return (
    <div className="sub-container-21">
      <CardContainer
        dimensionCode="/SISTGIM.png"
        componentTitle="C# SYSTEM"
        Date="April"
        repoLink="https://github.com/gerocd/SistGimnasio"
      />
      <CardContainer
        dimensionCode="/estudio-contable.PNG"
        componentTitle="Estudio Contable"
        Date="June"
        repoLink="https://github.com/gerocd/EstudioContable"
      />
      <CardContainer
        dimensionCode="/Captura.PNG"
        componentTitle="API STOCK CONTROL"
        Date="November"
        repoLink="https://github.com/gerocd/backend-corralonbrito"
      />
    </div>
  );
};

export default SubContainer4;
