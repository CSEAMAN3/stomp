import React from "react";
import "./Stomper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTreeCity } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function Stomper() {
  return (
    <section className="stomper-section">
      <div className="stomper-section-container">
        <h3 className="stomper-heading">Which kind of stomper are you?</h3>
        <hr className="stomper-line" />
        <div className="stomper-collection-container">
          <div className="stomper-container">
            <span className="city-icon stomper-icon">
              <FontAwesomeIcon icon={faTreeCity} />
            </span>
            <div className="city-content-container">
              <h4 className="stomper-type-heading">City Stomper</h4>
              <p className="stomper-text">
                Lorem ipsum dolor sit amet consec tetur adipisi cing elit. Ex incidunt ipsam debitis. Nihil quas dolorib us
                tempora placeat! Labo rio sam, blandit iis quaerat.
              </p>
            </div>
          </div>
          <div className="stomper-container">
            <span className="nature-icon stomper-icon">
              <FontAwesomeIcon icon={faTree} />
            </span>
            <div className="city-content-container">
              <h4 className="stomper-type-heading">Nature Stomper</h4>
              <p className="stomper-text">
                Lorem ipsum dolor sit amet consec tetur adipisi cing elit. Ex incidunt ipsam debitis. Nihil quas dolorib us
                tempora placeat! Labo rio sam, blandit iis quaerat.
              </p>
            </div>
          </div>
          <div className="stomper-container">
            <span className="beach-icon stomper-icon">
              <FontAwesomeIcon icon={faUmbrellaBeach} />
            </span>
            <div className="city-content-container">
              <h4 className="stomper-type-heading">Beach Stomper</h4>
              <p className="stomper-text">
                Lorem ipsum dolor sit amet consec tetur adipisi cing elit. Ex incidunt ipsam debitis. Nihil quas dolorib us
                tempora placeat! Labo rio sam, blandit iis quaerat.
              </p>
            </div>
          </div>
          <div className="stomper-container">
            <span className="music-icon stomper-icon">
              <FontAwesomeIcon icon={faMusic} />
            </span>
            <div className="event-content-container">
              <h4 className="stomper-type-heading">Event Stomper</h4>
              <p className="stomper-text">
                Lorem ipsum dolor sit amet consec tetur adipisi cing elit. Ex incidunt ipsam debitis. Nihil quas dolorib us
                tempora placeat! Labo rio sam, blandit iis quaerat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
