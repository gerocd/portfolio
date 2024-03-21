import React, { useState, useEffect, useCallback } from "react";
import "./Container8Footer.css";

const Container8Footer = () => {
  const onVectorGithubClick = useCallback(() => {
    window.open("https://github.com/gerocd");
  }, []);

  const onVectorLinkedinClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/gerocd/");
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showButtons = windowWidth >= 1270;

  return (
    <footer className="container33" id="footer">
      <div className="sub-container31">
        <div className="text-button3">{`Terms & Conditions`}</div>
        <div className="line6" />
        <div className="text-button3">Privacy Policy</div>
      </div>
      <div className="text45">
        © 2024 Gerónimo Martín Córdoba. All rights reserved.
      </div>
      {showButtons && (
        <div className="buttons-container5">
          <div className="button32">
            <img
              className="icon35"
              alt=""
              src="/github1.png"
              onClick={onVectorGithubClick}
            />
          </div>
          <div className="button33">
            <img
              className="icon36"
              alt=""
              src="/vector.svg"
              onClick={onVectorLinkedinClick}
            />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Container8Footer;
