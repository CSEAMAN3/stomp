import React from "react";

export default function EventForm() {
  return (
    <form onSubmit>
      <h3>create your event stomp</h3>
      <input placeholder="Event name" />
      <br />
      <input placeholder="Event image url" />
      <br />
      <input placeholder="event date" />
      <br />
      <input placeholder="event location link" />
      <br />
      <label for="parking">available parking</label>
      <input id="parking" type="checkbox" />
      <label for="book now">book now</label>
      <input id="book now" type="checkbox" />
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
