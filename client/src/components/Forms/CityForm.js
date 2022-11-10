import React from "react";
import "./Form.css";

export default function CityForm({ handleChangeCreate, createForm, createNewStomp, handleCheck }) {
  return (
    <form className="city-form" onSubmit={createNewStomp}>
      <h3 className="form-heading">Create your city stomp</h3>
      <input type="text" name="title" value={createForm.title} placeholder="city name" onChange={handleChangeCreate} />
      <br />
      <input
        type="text"
        name="cardImg"
        value={createForm.cardImg}
        placeholder="city image url"
        onChange={handleChangeCreate}
      />
      <br />
      <input
        type="text"
        name="location"
        value={createForm.location}
        placeholder="city location link"
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
      <label className="container" htmlFor="restuarants">
        restuarants locally
        <input
          name="restaurant"
          value="restaurant"
          checked={createForm.restaurant}
          id="restuarants"
          type="checkbox"
          onChange={handleCheck}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container" htmlFor="bars">
        bars locally
        <input
          name="bars"
          value={createForm.bars}
          checked={createForm.bars}
          id="bars"
          type="checkbox"
          onChange={handleCheck}
        />
        <span className="checkmark"></span>
      </label>
      {/* <label className="container" htmlFor="shops">
        shops locally
        <input name="shops" value={createForm.shops} id="shops" type="checkbox" onChange={handleCheck} />
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
