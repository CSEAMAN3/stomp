import React from "react";
import "./EventStomps.css";

export default function EventStomps({ id, eventImg, title, location, date, booknow }) {
  return (
    <div className="event-stomps-card">
      {/* <div className="bookNow-container">
        <h5>book now</h5>
      </div> */}
      <img className="event-img" src={require(`../../images/${eventImg}`)} alt={title} />
      <div className="event-info-container">
        <h2 className="event-card-title">{title}</h2>
        <p className="event-card-location">{location}</p>
        <p className="event-card-date">{date}</p>
      </div>
    </div>
  );
}
