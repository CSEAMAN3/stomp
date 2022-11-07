import React from "react";
import "./Join.css";
import joinImg from "../../images/coffeee.jpg";

export default function Join() {
  return (
    <section className="join-section">
      <div className="join-section-container">
        <div className="join-content-container">
          <h3 className="join-heading">Join the stomp revolution</h3>
          <p className="join-content">Share your business or event on stomp and give stompers near you a place to go.</p>
          <button className="join-lrn-btn">Learn More</button>
        </div>
        <div className="join-img-container">
          <img className="join-img" src={joinImg} alt="coffee shop owner making coffee" />
        </div>
      </div>
    </section>
  );
}
