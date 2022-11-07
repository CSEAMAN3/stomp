const mongoose = require("mongoose");
const { Schema } = mongoose;
const stompSchema = new Schema({
  cardImg: String,
  title: String,
  seafront: Number,
  parking: Boolean,
  restaurant: Boolean,
  bars: Boolean,
  location: String,
  description: String,
  tags: String,
});

const Stomp = mongoose.model("Stomp", stompSchema);
module.exports = Stomp;
