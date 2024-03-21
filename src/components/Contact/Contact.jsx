import React, { useState } from "react";
import axios from "axios";

import "./Contact.css";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [gmail, setGmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = async () => {
    try {
      const response = await axios.post("https://portfolioapi-zylf.onrender.com/api/send-gmail", {
        subject: nombre,
        html: `<p>${gmail}</p><p>${mensaje}</p>`,
      });

      console.log(response.data);

      setEnviado(true);
      setTimeout(() => {
        setEnviado(false);
        setNombre("");
        setGmail("");
        setMensaje("");
      }, 1500);
    } catch (error) {
      console.error("Error sending email:", error);
      setEnviado(false);
    }
  };

  return (
    <div className="contact-us" id="contact">
      <div className="get-in-touch-parent">
        <h1 className="get-in-touch2">Contact</h1>
        <div className="frame-div">
          <div className="frame-parent1">
            <div className="frame-parent2">
              <div className="first-name-parent">
                <div className="first-name">Name</div>
                <div className="form-parent">
                  <input
                    className="form2"
                    placeholder="Enter your name..."
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
              </div>
              <div className="instagram1">
                <div className="last-name">Gmail</div>
                <input
                  className="form3"
                  placeholder="Enter your email..."
                  type="text"
                  value={gmail}
                  onChange={(e) => setGmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="message-parent">
            <div className="message">Message</div>
            <textarea
              className="form5"
              placeholder="Enter your message..."
              rows={6}
              cols={23}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </div>
        </div>
        <button
          className={`largenormaljustifyactive ${enviado ? "e-mailed" : ""}`}
          onClick={handleEnviar}
        >
          {enviado ? <span>&#10003;</span> : <div className="send">SEND</div>}
        </button>
        {/* Mostrar mensaje de confirmación */}
        {enviado && (
          <div className="confirmacion">Message successfully sent</div>
        )}
      </div>
      <div className="text-heading">
        <div className="dot-ornament3">
          <div className="rectangle-group1">
            <div className="dot-ornament4">
              <div className="rectangles" />
              <div className="rectangle-3-copy3" />
            </div>
            <img
              className="rectangle-group-child"
              alt=""
              src="/contactimage.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
