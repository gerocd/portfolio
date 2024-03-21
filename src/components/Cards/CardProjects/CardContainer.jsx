import "./CardContainer.css";

const CardContainer = ({ dimensionCode, componentTitle, Date, repoLink }) => {
  return (
    <div className="card">
      <img className="image-icon2" alt="" src={dimensionCode} />
      <div className="container20">
        <div className="text-container6">
          <div className="heading11">{componentTitle}</div>
          <div className="text21">{Date}</div>
        </div>
        <a className="button17" href={repoLink} target="_blank">
          <div className="text22">View Project</div>
          <img className="icon19" alt="" src="top-right.png" />
        </a>
      </div>
    </div>
  );
};

export default CardContainer;
