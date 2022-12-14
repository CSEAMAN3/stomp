import React from "react";
import "./Form.css";

export default function EventForm({ handleChangeCreate, createForm, createNewStomp, handleCheck }) {
  return (
    <form onSubmit={createNewStomp}>
      <h3 className="form-heading">create your event stomp</h3>
      <input type="text" name="title" value={createForm.title} placeholder="Event name" onChange={handleChangeCreate} />
      <br />
      <input
        type="text"
        name="cardImg"
        value={createForm.cardImg}
        placeholder="Event image url"
        onChange={handleChangeCreate}
      />
      <br />
      <input
        type="text"
        name="eventDate"
        value={createForm.eventDate}
        placeholder="event date"
        onChange={handleChangeCreate}
      />
      <br />
      <input
        type="text"
        name="location"
        value={createForm.location}
        placeholder="event location link"
        onChange={handleChangeCreate}
      />
      <br />
      <label className="container" htmlFor="parking">
        available parking
        <input
          name="parking"
          value={createForm.parking}
          checked={createForm.parking}
          id="parking"
          type="checkbox"
          onChange={handleCheck}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container" htmlFor="book now">
        book now
        <input
          name="bookNow"
          value={createForm.bookNow}
          checked={createForm.bookNow}
          id="book now"
          type="checkbox"
          onChange={handleCheck}
        />
        <span className="checkmark"></span>
      </label>
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
      <input type="text" name="tags" value={createForm.tags} onChange={handleChangeCreate} placeholder="search terms" />
      <br />
      <button className="stomp-form-btn">Create Stomp</button>
    </form>
  );
}
