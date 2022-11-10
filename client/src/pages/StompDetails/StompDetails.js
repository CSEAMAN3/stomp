import React from "react";
import "./StompDetails.css";

import { API_URL } from "../../api";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function StompDetails() {
  const { id } = useParams();
  const [stomp, setStomp] = useState({});

  useEffect(() => {
    getStompDetails();
  }, []);

  const getStompDetails = async () => {
    const API = `${API_URL}/stomps/${id}`;
    const res = await axios.get(API);
    console.log(res.data);
    setStomp(res.data);
  };

  if (!stomp) {
    <>
      <h1>Woops. Thats a 404</h1>
      <p>The book with {id} no longer exists</p>
      <Link to="/">Go Back to the home page</Link>
    </>;
  }

  return (
    <main className="stomp-details-main">
      <div className="stomp-details-main-container">
        <div className="img-container">
          <img className="stomp-img" src={stomp?.cardImg} alt={stomp.title} />
        </div>
      </div>
    </main>
  );
}
