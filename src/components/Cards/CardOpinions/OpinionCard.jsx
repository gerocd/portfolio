import React, { useMemo } from "react";

import "./OpinionCard.css";

const OpinionCard = ({
  name,
  location,
  opinion,
  calificacion,
  propLeft,
  propTop,
  propLeft1,
  frameWidth,
  framePadding,
  frameHeight,
}) => {
  const abstractDesignStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft1,
      width: frameWidth,
      padding: framePadding,
      height: frameHeight,
    };
  }, [propTop, propLeft1, frameWidth, framePadding, frameHeight]);

  return (
    <div className="card2">
      <div className="container25">
        <div className="text-container13">
          <div className="name">{name}</div>
          <div className="text28">{location}</div>
        </div>
      </div>
      <div className="container26">
        {Array(calificacion)
          .fill()
          .map((_, i) => (
            <img key={i} className="shape-icon" alt="" src="/shape.svg" />
          ))}
      </div>
      <div className="paragraph4">{opinion}</div>
      <div className="abstract-design" style={abstractDesignStyle}>
        <div className="shape" />
        <div className="frame1" style={frameStyle}>
          <div className="shape1" />
        </div>
      </div>
    </div>
  );
};

export default OpinionCard;
