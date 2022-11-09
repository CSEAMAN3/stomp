"use strict";
const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");

const Stomp = require("./models/stomp");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.json("Yo Mama");
});

//retrieve all stomps
app.get("/stomps", async (request, response) => {
  try {
    const allStomps = await Stomp.find();
    response.status(200).json(allStomps);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

//retrieve a specific stomp
app.get("/stomps/:id", async (request, response) => {
  try {
    const theStomp = await Stomp.find({ _id: request.params.id });
    response.status(200).json(theStomp);
  } catch (error) {
    console.log("error");
    response.status(500).json(error);
  }
});

//retrieve a specific stomp by tag
app.get("/stomps/tags/:tag", async (request, response) => {
  try {
    const theStomp = await Stomp.find({ tags: { $regex: request.params.tag, $options: "i" } });
    response.status(200).json(theStomp);
  } catch (error) {
    console.log("error");
    response.status(500).json(error);
  }
});
/**
 * Books.find(
    { "authors": { "$regex": "Alex", "$options": "i" } },
    function(err,docs) { 
    } 
);
 */
//add a new stomp
app.post("/stomps", async (request, response) => {
  try {
    const newStomp = await Stomp.create(request.body);
    response.status(200).json(newStomp);
  } catch (error) {
    console.log("error");
    response.status(500).json(error);
  }
});

//edit a stomp
app.put("/stomps/:id", async (request, response) => {
  try {
    const stompToUpdate = request.params.id;
    const updatedStomp = await Stomp.updateOne({ _id: stompToUpdate }, request.body);
    response.status(200).json(updatedStomp);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

//delete a stomp
app.delete("/stomps/:id", async (request, response) => {
  const stompToDelete = request.params.id;
  const deletedStomp = await Stomp.deleteOne({ _id: stompToDelete });
  response.status(200).json(deletedStomp);
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
