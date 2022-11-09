import React from "react";

export default function NatureForm() {
  return (
    <form onSubmit>
      <h3>create your beach stomp</h3>
      {/* <input value={stompType} placeholder="Stomp type" />
      <br /> */}
      <input placeholder="location name" />
      <br />
      <input placeholder="location image url" />
      <br />
      <input placeholder="location link" />
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
      <br />
      <button>Create Stomp</button>
    </form>
  );
}
