import React, { useCallback } from "react";
import "./SubContainer.css";

const SubContainer = () => {
  const onVectorIcon1Click = useCallback(() => {
    window.open("https://www.linkedin.com/in/gerocd/");
  }, []);

  return (
    <div className="sub-container28">
      <div className="text35">
        A passionate programmer, starting his journey
      </div>
      <div className="container29">
        <div className="sub-container29">
          <h1 className="text36">Let’s</h1>
          <div className="button25" onClick={onVectorIcon1Click}>
            <img className="icon34" alt="" src="/vector-431-stroke@2x.png" />
          </div>
        </div>
        <h1 className="text37">Work Together</h1>
      </div>
    </div>
  );
};

export default SubContainer;
