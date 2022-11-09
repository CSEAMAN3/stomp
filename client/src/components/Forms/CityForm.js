import React from "react";
import "./Form.css";

export default function CityForm() {
  return (
    <form className="city-form" onSubmit>
      <h3>Create your city stomp</h3>
      <input placeholder="city name" />
      <br />
      <input placeholder="city image url" />
      <br />
      <input placeholder="city location link" />
      <br />
      <label for="parking">available parking</label>
      <input id="parking" type="checkbox" />
      <label for="restuarants">restuarants locally</label>
      <input id="restuarants" type="checkbox" />
      <label for="restuarants">bars locally</label>
      <input id="bars" type="checkbox" />
      <label for="shops">shops locally</label>
      <input id="shops" type="checkbox" />
      <textarea
        className="stomp-description-box"
        maxLength="400"
        name="stomp-description"
        id="stompDescription"
        placeholder="stomp description"
      ></textarea>
      <button>Create Stomp</button>
    </form>
  );
}
