import React from "react";

const NasaCard = props => {
  return (
    <div>
      <h1>{props.imgUrl.title}</h1>
      <h2>{props.imgUrl.date}</h2>
      <div className="media">
        {props.imgUrl.media_type === "video" ? (
          <iframe
            title="Video, but with space"
            width="1080"
            height="720"
            alt="space and shit"
            src={props.imgUrl.url}
          />
        ) : (
          <img alt="spaceimage" src={props.imgUrl.hdurl} />
        )}
      </div>
      <div>
        <h3>Details</h3>
        <p>{props.imgUrl.explanation}</p>
      </div>
    </div>
  );
};

export default NasaCard;
