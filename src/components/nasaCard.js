import React from "react";

const NasaCard = props => {
  return (
    <div>
      <h1>{props.imgUrl.title}</h1>
      <h2>{props.imgUrl.date}</h2>
      <img
        src={
          props.imgUrl.media_type === "video" ? (
            <iframe width="420" heigh="315" src={props.imgUrl.url} />
          ) : (
            <img src={props.imgUrl.hdurl} />
          )
        }
        alt="space and shit"
      />
      <div>
        <h3>Details</h3>
        <p>{props.imgUrl.explanation}</p>
      </div>
    </div>
  );
};

export default NasaCard;
