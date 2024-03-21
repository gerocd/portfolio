import ContainerWithButtons from "./ContainerWithButtons";
import "./Opinion.css";

const Opinion = () => {
  return (
    <div className="sub-container19">
      <div className="container24">
        <div className="text-container11">
          <div className="text26">Testimonials</div>
          <h1 className="heading17">WHAT PEOPLE THINK</h1>
        </div>
        <div className="text-container12">
          <div className="text27">Total Reviews</div>
          <div className="number">323</div>
        </div>
      </div>
      <ContainerWithButtons
        icon="/icon14@2x.png"
        icon1="/icon15@2x.png"
        text={`View All Testimonials ->`}
        propWidth="435px"
      />
    </div>
  );
};

export default Opinion;
