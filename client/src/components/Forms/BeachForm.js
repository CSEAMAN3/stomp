import React from "react";
import "./Form.css";

export default function BeachForm({ handleChangeCreate, createForm, createNewStomp, handleCheck }) {
  return (
    <form className="beach-form" onSubmit={createNewStomp}>
      <h3 className="form-heading">create your beach stomp</h3>
      {/* <input value={stompType} placeholder="Stomp type" />
      <br /> */}
      <input type="text" name="title" value={createForm.title} onChange={handleChangeCreate} placeholder="beach name" />
      <br />
      <input
        type="text"
        name="cardImg"
        value={createForm.cardImg}
        onChange={handleChangeCreate}
        placeholder="beach image url"
      />
      <br />
      {/* <input
        name="seafront"
        value={createForm.seafront}
        onChange={handleChangeCreate}
        placeholder="beach length in miles"
        type="number"
      /> */}
      {/* <br /> */}
      <input
        type="text"
        name="location"
        value={createForm.location}
        onChange={handleChangeCreate}
        placeholder="beach location link"
      />
      <br />
      <label className="container" htmlFor="parking">
        parking available
        <input
          name="parking"
          value={createForm.parking}
          checked={createForm.parking}
          onChange={handleCheck}
          id="parking"
          type="checkbox"
        />
        <span className="checkmark"></span>
      </label>
      <label className="container" htmlFor="restuarants">
        restuarants locally
        <input
          name="restaurant"
          value={createForm.restaurant}
          checked={createForm.restaurant}
          onChange={handleCheck}
          id="restuarants"
          type="checkbox"
        />
        <span className="checkmark"></span>
      </label>
      <label className="container" htmlFor="bars">
        bars locally
        <input
          name="bars"
          value={createForm.bars}
          checked={createForm.bars}
          onChange={handleCheck}
          id="bars"
          type="checkbox"
        />
        <span className="checkmark"></span>
      </label>
      {/* <label className="container" htmlFor="shops">
        shops locally
        <input name="shops" value={createForm.shops} onChange={handleCheck} id="shops" type="checkbox" />
        <span className="checkmark"></span>
      </label> */}
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
