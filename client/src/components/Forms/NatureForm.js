import React from "react";

export default function NatureForm({ handleChangeCreate, createForm, createNewStomp, handleCheck }) {
  return (
    <form onSubmit={createNewStomp}>
      <h3>create your beach stomp</h3>
      {/* <input value={stompType} placeholder="Stomp type" />
      <br /> */}
      <input name="title" value={createForm.title} placeholder="location name" onChange={handleChangeCreate} />
      <br />
      <input name="cardImg" value={createForm.CardImg} placeholder="location image url" onChange={handleChangeCreate} />
      <br />
      <input name="location" value={createForm.location} placeholder="location link" onChange={handleChangeCreate} />
      <br />
      <label htmlFor="parking">available parking</label>
      <input name="parking" value={createForm.parking} id="parking" type="checkbox" onChange={handleCheck} />
      <label htmlFor="restuarants">restuarants locally</label>
      <input name="restaurants" value={createForm.restaurants} id="restuarants" type="checkbox" onChange={handleCheck} />
      <label htmlFor="bars">bars locally</label>
      <input name="bars" value={createForm.bars} id="bars" type="checkbox" onChange={handleCheck} />
      <label htmlFor="shops">shops locally</label>
      <input name="shops" value={createForm.shops} id="shops" type="checkbox" onChange={handleCheck} />
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
