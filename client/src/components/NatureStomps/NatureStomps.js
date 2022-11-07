import React from "react";
import "./NatureStomps.css";

export default function NatureStomps({ id, natureImg, location }) {
  return (
    <div className="nature-stomps-card">
      <img className="nature-img" src={require(`../../images/${natureImg}`)} alt={location} />
      <div className="nature-info-container">
        <h2 className="nature-location">{location}</h2>
      </div>
    </div>
  );
}
