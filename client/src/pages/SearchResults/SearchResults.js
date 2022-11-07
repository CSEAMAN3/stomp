import React from "react";
import "./SearchResults.css";
import { useParams } from "react-router-dom";

import norwichMainImg from "../../images/norwich-main.jpg";

import BeachStomps from "../../components/BeachStomps/BeachStomps";
import { beachdata } from "../../beachdata";
import EventStomps from "../../components/EventStomps/EventStomps";
import { eventsdata } from "../../eventsdata";
import NatureStomps from "../../components/NatureStomps/NatureStomps";
import { naturedata } from "../../naturedata";
import CityStomps from "../../components/CityStomps/CityStomps";
import { citydata } from "../../citydata";

export default function SearchResults() {
  const { location } = useParams();

  const beachcards = beachdata.map((card) => {
    return <BeachStomps key={card.id} {...card} />;
  });

  const eventcards = eventsdata.map((card) => {
    return <EventStomps key={card.id} {...card} />;
  });

  const naturecards = naturedata.map((card) => {
    return <NatureStomps key={card.id} {...card} />;
  });

  const citycards = citydata.map((card) => {
    return <CityStomps key={card.id} {...card} />;
  });

  return (
    <>
      <main className="searchResults-main">
        <div className="searchResults-main-container">
          <div className="img-container">
            <img className="main-img" src={norwichMainImg} alt={location} />
          </div>
          <div className="sr-content-container">
            <h1 className="searchResults-heading">{location}</h1>
            <p className="sr-content">
              Lorem ipsum dolor sit amet consect etur adipisi cing elit. Ducimus vero eveniet sequi aliquid sunt autem quidem
              earum suscip it magnam neque cumque, tempore, quae delectus explica bo officia.
            </p>
          </div>
        </div>
      </main>
      <section className="beach-stomps-section">
        <div className="stomp-heading-container">
          <h2 className="Beach-heading">stomp beaches near {location}</h2>
        </div>
        <div className="beach-stomps-container">{beachcards}</div>
      </section>
      <section className="event-stomps-section">
        <div className="stomp-heading-container">
          <h2>stomp to events near {location}</h2>
        </div>
        <div className="event-stomps-container">{eventcards}</div>
      </section>
      <section className="nature-stomps-section">
        <h2>stomp in nature near {location}</h2>
        <div className="nature-stomps-container">{naturecards}</div>
      </section>
      <section className="city-stomps-section">
        <h2>stomp the city of {location}</h2>
        <div className="city-stomps-container">{citycards}</div>
      </section>
    </>
  );
}
