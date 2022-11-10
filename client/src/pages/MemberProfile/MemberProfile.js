import React, { useState } from "react";
import "./MemberProfile.css";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";

import StompCards from "../../components/StompCards/StompCards";
import { useEffect } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";
import BeachForm from "../../components/Forms/BeachForm";
import CityForm from "../../components/Forms/CityForm";
import EventForm from "../../components/Forms/EventForm";
import NatureForm from "../../components/Forms/NatureForm";

export default function MemberProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [stomps, setStomps] = useState([]);
  const [stompType, setstompType] = useState("");

  const [formType, setFormType] = useState("");
  const [createForm, setCreateForm] = useState({
    user: "",
    cardImg: "",
    title: "",
    seafront: 0,
    parking: false,
    restaurant: false,
    bars: false,
    location: "",
    description: "",
    tags: "",
    type: "",
    eventDate: "",
    bookNow: false,
  });

  useEffect(() => {
    getStomps();
  }, []);

  const handleChangeCreate = (event) => {
    setCreateForm({ ...createForm, [event.target.name]: event.target.value });
  };

  const handleCheck = (event) => {
    setCreateForm({ ...createForm, [event.target.name]: !createForm[event.target.name] });
  };

  const getStomps = async () => {
    const API = `http://localhost:8080/stomps`;
    const res = await axios.get(API);
    console.log(res.data);
    setStomps(res.data);
  };

  const handleFormType = (type) => {
    setFormType(type);
    setCreateForm({ ...createForm, type });
  };

  // create a new stomp
  const createNewStomp = async (event) => {
    event.preventDefault();
    const API = `http://localhost:8080/stomps`;
    const res = await axios.post(API, { ...createForm, user: user.email });
    setCreateForm({
      user: "",
      title: "",
      cardImg: "",
      location: "",
      type: "",
      description: "",
      parking: false,
      restaurant: false,
      bars: false,
      tags: "",
      seafront: 0,
      eventDate: "",
      bookNow: false,
    });
    setFormType("");
    setStomps([...stomps, res.data]);
  };

  return (
    <main className="member-profile-main">
      <div className="member-profile-container">
        <h1 className="welcome-member-heading">welcome amazing member</h1>
        <h2 className="member-section-heading">your stomps</h2>
        <div className="member-stomps-container">
          <StompCards stomps={stomps} filterAttr="user" filterValue={user?.email} />
        </div>
        <h2 className="member-section-heading">create new stomp</h2>
        <p className="select-type-text">Select which type of stomp would you like to create.</p>
        <div className="type-button-container">
          <button className={`type-button ${formType === "beach" ? "active" : ""}`} onClick={() => handleFormType("beach")}>
            Beach
          </button>
          <button className={`type-button ${formType === "city" ? "active" : ""}`} onClick={() => handleFormType("city")}>
            City
          </button>
          <button className={`type-button ${formType === "event" ? "active" : ""}`} onClick={() => handleFormType("event")}>
            Event
          </button>
          <button
            className={`type-button ${formType === "nature" ? "active" : ""}`}
            onClick={() => handleFormType("nature")}
          >
            Nature
          </button>
        </div>
        {formType === "beach" && (
          <BeachForm
            handleChangeCreate={handleChangeCreate}
            handleCheck={handleCheck}
            createForm={createForm}
            createNewStomp={createNewStomp}
          />
        )}
        {formType === "city" && (
          <CityForm
            handleChangeCreate={handleChangeCreate}
            createForm={createForm}
            createNewStomp={createNewStomp}
            handleCheck={handleCheck}
          />
        )}
        {formType === "event" && (
          <EventForm
            handleChangeCreate={handleChangeCreate}
            createForm={createForm}
            createNewStomp={createNewStomp}
            handleCheck={handleCheck}
          />
        )}
        {formType === "nature" && (
          <NatureForm
            handleChangeCreate={handleChangeCreate}
            createForm={createForm}
            createNewStomp={createNewStomp}
            handleCheck={handleCheck}
          />
        )}
      </div>
    </main>
  );
}

/** 
cardImg:
      "https://images.ctfassets.net/ob1psfsvxnrx/4eUaUN4XyJaUctMKjPZV6v/b2b491779737f17b7adf64e96a29392c/rf_norfolk_cromerbeach_01_2021_xl.jpg",
    title: "cromer",
    seafront: 5,
    parking: true,
    restaurant: true,
    bars: true,
    location: "https://goo.gl/maps/XCFUhSEwYcoAJxKw9",
    description:
      "Cromer is a popular seaside town on the north Norfolk coast and is proudly known as 'The Gem of the Norfolk Coast'. The town stands high and bracing on the wind swept cliffs, with several paths that zig and zag down from the town to the sandy beaches below.",
    tags: "norwich norfolk beach beaches pier cromer crabs",
    type: "beach",
    eventDate: "",
    bookNow: false,
  });
  await Stomp.create({
    cardImg: "https://www.holkham.co.uk/wp-content/uploads/2022/07/2018-Aug-c.-Georgia-DawsonIMG_0549-scaled.jpg",
    title: "holkham",
    seafront: 15,
    parking: true,
    restaurant: true,
    bars: false,
    location: "https://goo.gl/maps/156FMhVVSnYy1hwaA",
    description:
      "Holkham National Nature Reserve (3,706 hectares) stretches from Burnham Norton to Blakeney. Pinewoods: Most of the area can be explored by following footpaths from the main car parks. The core section of the reserve, from Wells to Holkham Bay, is crisscrossed by paths allowing access through the pine woodland.",
    tags: "norwich norfolk holkham beach beaches",
    type: "beach",
    eventDate: "",
    bookNow: false, 


 **/
