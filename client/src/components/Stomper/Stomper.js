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
                Stompers unite and create the heartbeat of your local community. Unearth a cities beuatiful history, visit
                places of interest or simply find the perfect seat to sit and people watch. Make the most of city stomping
                with stomp.
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
                Fill your lungs with stomping goodness and take in everything the world has to offer. Nature stompers will
                love discovering new places of natural beauty. Get your walking boots on and go stomp.
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
                Grab your bucket and spade and get ready for an adventure. Beaches are great for exploring, whether your a
                solo stomper, taking the dog for a walk or running riot with the whole family, you'll find the perfect
                beaches to stomp near you.
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
                We will, we will stomp you! If you can't find an event you're intested in we'll eat our stomping boots. Here
                on stomp there's an event for everyone, from stomping at gigs to stomping on Tim Smith we gaurantee you'll
                get sore feet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
