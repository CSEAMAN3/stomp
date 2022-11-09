import React from "react";
import "./Form.css";

export default function BeachForm({ handleChangeCreate, createForm, createNewStomp, handleCheck }) {
  return (
    <form className="beach-form" onSubmit={createNewStomp}>
      <h3>create your beach stomp</h3>
      {/* <input value={stompType} placeholder="Stomp type" />
      <br /> */}
      <input name="title" value={createForm.title} onChange={handleChangeCreate} placeholder="beach name" />
      <br />
      <input name="cardImg" value={createForm.cardImg} onChange={handleChangeCreate} placeholder="beach image url" />
      <br />
      <input
        name="seafront"
        value={createForm.seafront}
        onChange={handleChangeCreate}
        placeholder="beach length in miles"
        type="number"
      />
      <br />
      <input name="location" value={createForm.location} onChange={handleChangeCreate} placeholder="beach location link" />
      <br />
      <label htmlFor="parking">available parking</label>
      <input name="parking" value={createForm.parking} onChange={handleCheck} id="parking" type="checkbox" />
      <label htmlFor="restuarants">restuarants locally</label>
      <input name="restaurant" value={createForm.restaurant} onChange={handleCheck} id="restuarants" type="checkbox" />
      <label htmlFor="restuarants">bars locally</label>
      <input name="bars" value={createForm.bars} onChange={handleCheck} id="bars" type="checkbox" />
      <label htmlFor="shops">shops locally</label>
      <input name="shops" value={createForm.shops} onChange={handleCheck} id="shops" type="checkbox" />
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
