import React, { useState, useEffect } from "react";
import SubContainer from "./SubContainer";
import SubContainerLinks from "./SubContainerLinks";
import "./PreFooter.css";

const PreFooter = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showSubContainer = windowWidth >= 1033;
  const showImages = windowWidth >= 1200;

  return (
    <div className="container32">
      {showSubContainer && <SubContainer />}
      <SubContainerLinks />
      {showImages && (
        <>
          <img
            className="abstract-design-icon1"
            alt=""
            src="/abstract-design-left.png"
          />
          <img
            className="abstract-design-icon2"
            alt=""
            src="/abstract-design@2x.png"
          />
        </>
      )}
    </div>
  );
};

export default PreFooter;
