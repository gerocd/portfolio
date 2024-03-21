import Opinion from "./Opinion";
import ItemsOpinionContainer from "./ItemsOpinionContainer";
import "./OpinionContainer.css";

const OpinionContainer = () => {
  return (
    <div className="opinioncontainer" id="Container5">
      <Opinion />
      <ItemsOpinionContainer />
    </div>
  );
};

export default OpinionContainer;
