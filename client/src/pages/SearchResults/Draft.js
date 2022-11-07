import React from "react";
import "./SearchResults.css";
import { useParams } from "react-router-dom";

import norwichMainImg from "../../images/norwich-main.jpg";
import norwichStreet from "../../images/norwich-street.jpg";
import norwichShop from "../../images/norwich-shop.jpg";

export default function SearchResults() {
  const { location } = useParams();

  return (
    <main className="searchResults-main">
      <div className="searchResults-main-container">
        <h1 className="searchResults-heading">{location}</h1>
        {/* <div className="sr-content-container">
          <p className="search-blurb">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, inventore iure. Beatae, dolore fuga fugit, sint
            esse quas dolor modi, laborum aspernatur iusto eum numquam sit nesciunt nostrum deserunt ea!
          </p>
          <div className="images-container">
            <div className="div1">
              <img className="main-img" src={norwichMainImg} alt="norwich cathedral" />
            </div>
            <div className="div2">
              <img className="secondary-img" src={norwichStreet} alt="norwich street" />
            </div>
            <div className="div3">
              <img className="third-img" src={norwichShop} alt="norwich shop" />
            </div>
          </div>
        </div> */}

        <div className="grid-container">
          <div className="div1">
            <img className="secondary-img" src={norwichStreet} alt={location} />
          </div>
          <div className="div2">
            <div className="grid-flex-container">
              <span>Go</span>
            </div>
          </div>
          <div className="div3"></div>
          <div className="div4">
            <div className="grid-flex-container">
              <span>Stomp</span>
            </div>
          </div>
          <div className="div5">
            <img className="main-img" src={norwichMainImg} alt={location} />
          </div>
          <div className="div6">
            <img className="third-img" src={norwichShop} alt={location} />
          </div>
          <div className="div7">
            <div className="grid-flex-container">
              <span className="rotate">Stomper</span>
            </div>
          </div>
          <div className="div8"></div>
          <div className="div9"></div>
        </div>
      </div>
    </main>
  );
}
