import React, { useState } from "react";
import axios from "axios";
import "./OpinionForm.css";

const OpinionForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [opinion, setOpinion] = useState("");
  const [calificacion, setCalificacion] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = async () => {
    try {
      const response = await axios.post("https://portfolioapi-zylf.onrender.com/api/send-opinion", {
        name,
        location,
        opinion,
        calificacion,
      });

      console.log(response.data);

      setName("");
      setLocation("");
      setOpinion("");
      setCalificacion(1);
      setEnviado(true);
      if (onSubmit) {
        onSubmit();
      }
    } catch (error) {
      console.error("Error al enviar la opinión:", error);
      setEnviado(false);
    }
  };

  return (
    <div className="opinion-form-container">
      <div className="opinion-form">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <input
          className="form-field"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-field"
          placeholder="Location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <textarea
          className="form-field-opinion"
          placeholder="Opinion"
          rows={6}
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
        />
        <input
          className="form-field"
          placeholder="Rating (1-5)"
          type="number"
          min="1"
          max="5"
          value={calificacion}
          onChange={(e) => setCalificacion(e.target.value)}
        />
        <button className="submit-button" onClick={handleEnviar}>
          {enviado ? "Enviado" : "Enviar"}
        </button>
      </div>
    </div>
  );
};

export default OpinionForm;
