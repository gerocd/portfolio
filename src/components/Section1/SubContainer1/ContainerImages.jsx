import React, { useState, useEffect } from "react";
import "./ContainerImages.css";

const ContainerImages = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {windowWidth > 768 ? (
        <img
          className="images-container-icon"
          alt=""
          src="/images-container@2x.png"
        />
      ) : (
        <div className="small-images-container">
          <img src="/reactjs_logo_icon_168875.png" alt="" />
          <img src="/nodejs128.png" alt="" />
          <img src="/js128.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default ContainerImages;
