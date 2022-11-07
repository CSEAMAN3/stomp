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

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
