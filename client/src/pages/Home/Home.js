import React from "react";
import "./Home.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Stomper from "../../components/Stomper/Stomper";
import Join from "../../components/Join/Join";

import heroImgBig from "../../images/woods.jpg";

export default function Home() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(location);
    navigate(`/search/${location.toLowerCase()}`);
  };

  return (
    <>
      <main className="main">
        <div className="main-container">
          <section className="hero-section">
            <div className="hero-img-container">
              <img className="hero-img" src={heroImgBig} alt="hero" />
              <div className="form-container">
                <h2 className="form-heading">Find places, go stomp</h2>
                <p className="form-info">Discover locations, events, places to shop, eat, drink and stomp the night away.</p>
                <form onSubmit={handleSearch}>
                  <input
                    onChange={handleLocation}
                    value={location}
                    className="location-input"
                    name="location"
                    placeholder="Anywhere"
                    required
                  />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Stomper />
      <Join />
    </>
  );
}
