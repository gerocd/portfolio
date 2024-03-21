import React, { useEffect, useState } from "react";
import axios from "axios";
import OpinionCard from "./OpinionCard";
import "./OpinionContainer.css";

const fetchAllOpinionsFromDatabase = async () => {
  try {
    const response = await axios.get("https://portfolioapi-zylf.onrender.com/api/get-opinions");
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    // Retorna un array vacío en caso de error
    return [{ error: "Hubo un error al cargar las opiniones." }];
  }
};

const OpinionContainer = () => {
  const [opinions, setOpinions] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchAllOpinionsFromDatabase().then(setOpinions);
  }, []);

  const handleMove = (direction) => {
    if (direction === 'left') {
      if (startIndex === 0) {
        setStartIndex(opinions.length - 3);
      } else {
        setStartIndex(startIndex - 1);
      }
    } else if (direction === 'right') {
      if (startIndex === opinions.length - 3) {
        setStartIndex(0);
      } else {
        setStartIndex(startIndex + 1);
      }
    }
  };

  return (
    <div className="opinion-container">
      <div className="buttonopinion"  onClick={() => handleMove('left')}>
        <img className="iconopinions" id="back-png" alt="" src="/lefticon.png" />
      </div>
      <div className="items-container">
        {opinions.slice(startIndex, startIndex + 3).map((opinion, index) => (
          <OpinionCard
            key={index}
            id={opinion.idOpinion}
            name={opinion.name}
            location={opinion.location}
            calificacion={opinion.calificacion}
            opinion={opinion.opinion}
          />
        ))}
      </div>
      <div className="buttonopinion"  onClick={() => handleMove('right')}>
        <img className="iconopinions" alt="" src="/righticon.png" />
      </div>
    </div>
  );
};

export default OpinionContainer;
