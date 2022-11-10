import React from "react";
import "./StompCards.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function StompCards({ stomps, filterAttr, filterValue }) {
  return (
    <>
      {stomps
        .filter((stomp) => {
          return stomp[filterAttr] === filterValue;
        })
        .map((card, idx) => {
          const { _id, cardImg, title, seafront, parking, restaurant, bars, location, bookNow } = card;
          return (
            <Link to={`/stompdetails/${_id}`}>
              <div className="beach-stomps-card" key={idx}>
                {bookNow && (
                  <div className="badge-container">
                    <span className="badge-txt">book now</span>
                  </div>
                )}
                <img className="beach-img" src={cardImg} alt={title} />
                <div className="beachcard-info-container">
                  <h2 className="beach-title">{title}</h2>
                  {/* <span className="seafront-text">Seafront: {seafront} miles</span> */}
                  <div className="icon-container">
                    {parking && (
                      <span className="parking-icon beach-card-icon">
                        <FontAwesomeIcon icon={faCar} />
                      </span>
                    )}
                    {/* <span className="shops-icon beach-card-icon">
                    <FontAwesomeIcon icon={faShop} />
                  </span> */}
                    {restaurant && (
                      <span className="food-icon beach-card-icon">
                        <FontAwesomeIcon icon={faUtensils} />
                      </span>
                    )}
                    {bars && (
                      <span className="bars-icon beach-card-icon">
                        {" "}
                        <FontAwesomeIcon icon={faWineGlass} />
                      </span>
                    )}
                    <span className="bars-icon beach-card-icon">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
}
