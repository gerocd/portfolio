import React, { useState, useEffect } from "react";
import "./SubContainer8.css";

const SubContainer8 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sub-container" id="home">
      <img
        className="abstract-design-icon"
        alt=""
        src="/abstract-designHEADER@2x.png"
      />
      {windowWidth > 873.33 && (
        <div className="text-container">
          <h1 className="heading">cÓRDOBA GERÓNIMO</h1>
        </div>
      )}
      {windowWidth > 300 && (
        <div className="container">
          <div className="sub-container1">
            <h1 className="heading1">Let’s</h1>
            <button
              className="button5"
              onClick={() =>
                window.open("https://www.linkedin.com/in/gerocd/", "_blank")
              }
            >
              <div className="icon">
                <img
                  className="vector-431-stroke"
                  alt=""
                  src="/vector-431-stroke@2x.png"
                />
              </div>
            </button>
          </div>
          <h1 className="text2">Work Together</h1>
        </div>
      )}
    </div>
  );
};

export default SubContainer8;
