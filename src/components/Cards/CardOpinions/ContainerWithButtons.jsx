import React, { useState } from "react";
import OpinionForm from "./OpinionForm";
import "./ContainerWithButtons.css";

const ContainerWithButtons = ({ icon, icon1}) => {
  const [showOpinionForm, setShowOpinionForm] = useState(false);

  const openOpinionForm = () => {
    setShowOpinionForm(true);
  };

  const closeOpinionForm = () => {
    setShowOpinionForm(false);
  };

  const handleOpinionSubmit = (opinion) => {
    // Aquí puedes enviar la opinión a tu backend o hacer lo que necesites
    console.log("Opinión enviada:", opinion);
    closeOpinionForm();
  };

  return (
    <div className="container19" >
      {showOpinionForm && (
        <OpinionForm onSubmit={handleOpinionSubmit} onClose={closeOpinionForm} />
      )}
      <a className="button16" onClick={openOpinionForm}>
        <div className="text19">Leave an Opinion</div>
      </a>
    </div>
  );
};

export default ContainerWithButtons;
