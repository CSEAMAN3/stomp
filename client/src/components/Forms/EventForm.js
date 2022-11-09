import React from "react";
import "./Form.css";

export default function EventForm({ handleChangeCreate, createForm, createNewStomp, handleCheck }) {
  return (
    <form onSubmit={createNewStomp}>
      <h3>create your event stomp</h3>
      <input name="title" value={createForm.title} placeholder="Event name" onChange={handleChangeCreate} />
      <br />
      <input name="cardImg" value={createForm.cardImg} placeholder="Event image url" onChange={handleChangeCreate} />
      <br />
      <input name="eventDate" value={createForm.eventDate} placeholder="event date" onChange={handleChangeCreate} />
      <br />
      <input name="location" value={createForm.location} placeholder="event location link" onChange={handleChangeCreate} />
      <br />
      <label htmlFor="parking">available parking</label>
      <input name="parking" value={createForm.parking} id="parking" type="checkbox" onChange={handleCheck} />
      <label htmlFor="book now">book now</label>
      <input name="bookNow" value={createForm.bookNow} id="book now" type="checkbox" onChange={handleCheck} />
      <textarea
        onChange={handleChangeCreate}
        className="stomp-description-box"
        maxLength="400"
        name="description"
        value={createForm.description}
        id="stompDescription"
        placeholder="stomp description"
      ></textarea>
      <br />
      <input name="tags" value={createForm.tags} onChange={handleChangeCreate} placeholder="search terms" />
      <br />
      <button>Create Stomp</button>
    </form>
  );
}
