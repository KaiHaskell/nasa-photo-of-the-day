import React, { useState, useEffect } from "react";
import NasaCard from "./nasaCard";
import axios from "axios";

const NasaAotd = () => {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=OPfamgCyYwhJvre3PNrqYoTF4OdMQEPSYJ2XNNTg&date=2019-10-1`
      )
      .then(response => {
        console.log(response.data);
        setPhoto(response.data);
      })
      .catch(error => {
        console.log("uh oh", error);
      });
  }, []);
  return (
    <div className="container">
      <div className="img-container">
        <NasaCard imgUrl={photo} />;
      </div>
    </div>
  );
};
export default NasaAotd;
