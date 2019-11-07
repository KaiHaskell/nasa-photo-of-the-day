import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import styled from "styled-components";

//Styled card
let CardTextContent = styled.p`
  color: dark;
  background-color: rgb(102, 51, 153, 0.2);
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
`;

const CardContainer = styled.div`
  width: 100%;
`;

const Aotd = styled.img`
  width: 720px;
  height: 480px;
  border-radius: 5px;
  background-color: rgb(102, 51, 153, 0.3);
  border-radius: 20px;
  padding: 10px;
  .img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  }
`;

const CardHeaderText = styled(CardTitle)`
  font-size: 40px;
  background-color: rgb(102, 51, 153, 0.3);
  border-radius: 5px;
  margin: 5px;
  font-family: "Raleway", sans-serif;
  padding: 1px;
`;

const NasaCard = props => {
  return (
    <CardContainer>
      <CardHeaderText>
        {props.imgUrl.title}
        <h2>{props.imgUrl.date}</h2>
      </CardHeaderText>
      <div className="media">
        {props.imgUrl.media_type === "video" ? (
          <iframe
            title="Video, but with space"
            width="720"
            height="480"
            alt="space and shit"
            src={props.imgUrl.url}
          />
        ) : (
          <Aotd alt="spaceimage" src={props.imgUrl.hdurl} />
        )}
      </div>
      <CardBody>
        <CardTextContent>{props.imgUrl.explanation}</CardTextContent>
      </CardBody>
    </CardContainer>
  );
};

export default NasaCard;
