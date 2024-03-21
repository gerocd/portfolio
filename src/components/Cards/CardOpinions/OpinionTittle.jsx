import { useState, useEffect } from "react";
import ContainerWithButtons from "./ContainerWithButtons";
import axios from "axios";

const OpinionTittle = () => {
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://portfolioapi-zylf.onrender.com/api/get-opinions")
      .then((response) => {
        setReviewCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error al obtener las opiniones:", error);
      });
  }, []);

  return (
    <div className="sub-container19">
      <div className="container24">
        <div className="text-container11">
          <div className="text26">Testimonials</div>
          <h1 className="heading17">PLEASE, LEAVE AN OPINION</h1>
          <ContainerWithButtons />
        </div>
        <div className="text-container12">
          <div className="text27">Total Reviews</div>
          <div className="number">{reviewCount} </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionTittle;
