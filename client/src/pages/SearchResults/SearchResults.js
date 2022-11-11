import React from "react";
import "./SearchResults.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import norwichMainImg from "../../images/norwich-main.jpg";

import Join from "../../components/Join/Join";
import StompCards from "../../components/StompCards/StompCards";
import { API_URL } from "../../api";

export default function SearchResults() {
  const { tag } = useParams();

  const [stomps, setStomps] = useState([]);

  //use effect is when the page loads or the dependencies change
  useEffect(() => {
    getStomps();
  }, []);

  const getStomps = async () => {
    const API = `${API_URL}/stomps/tags/${tag}`;
    const res = await axios.get(API);
    console.log(res.data);
    setStomps(res.data);
  };

  return (
    <>
      <main className="searchResults-main">
        <div className="searchResults-main-container">
          <div className="img-container">
            <img className="main-img" src={norwichMainImg} alt={tag} />
          </div>
          <div className="sr-content-container">
            <h1 className="searchResults-heading">{tag}</h1>
            <p className="sr-content">
              Norwich is a vibrant, yet safe city in the heart of the picturesque Norfolk countryside in the region of East
              Anglia. Norwich is within easy reach of London, Cambridge and the Norfolk coast.
            </p>
            <br />
            <p className="sr-content sr-content-wide">
              Its thriving medieval centre, rich in beautiful historic architecture, is a perfect blend between the past and
              the present.
            </p>
          </div>
        </div>
      </main>
      <section className="beach-stomps-section stomp-section">
        <div className="stomp-heading-container">
          <h2 className="stomp-heading">stomp beaches near {tag}</h2>
        </div>
        <div className="beach-stomps-container stomps-container">
          <StompCards stomps={stomps} filterAttr="type" filterValue="beach" />
        </div>
      </section>
      <section className="event-stomps-section stomp-section">
        <div className="stomp-heading-container">
          <h2 className="stomp-heading">stomp at events near {tag}</h2>
        </div>
        <div className="event-stomps-container stomps-container">
          <StompCards stomps={stomps} filterAttr="type" filterValue="event" />
        </div>
      </section>
      <section className="nature-stomps-section stomp-section">
        <div className="stomp-heading-container">
          <h2 className="stomp-heading">stomp in nature near {tag}</h2>
        </div>
        <div className="nature-stomps-container stomps-container">
          <StompCards stomps={stomps} filterAttr="type" filterValue="nature" />
        </div>
      </section>
      <section className="city-stomps-section stomp-section">
        <div className="stomp-heading-container">
          <h2 className="stomp-heading">stomp the city of {tag}</h2>
        </div>
        <div className="city-stomps-container stomps-container">
          <StompCards stomps={stomps} filterAttr="type" filterValue="city" />
        </div>
      </section>
      <Join />
    </>
  );
}
