import React from "react";
import "./CityStomps.css";

export default function CityStomps({ id, title, cityImg }) {
  return (
    <div className="city-stomps-card">
      <img className="city-img" src={require(`../../images/${cityImg}`)} alt={title} />
      <div className="city-info-container">
        <h2 className="city-title">{title}</h2>
      </div>
    </div>
  );
}
