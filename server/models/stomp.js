const mongoose = require("mongoose");
const { Schema } = mongoose;
const stompSchema = new Schema({
  user: String,
  cardImg: String,
  title: String,
  seafront: Number,
  parking: Boolean,
  restaurant: Boolean,
  bars: Boolean,
  location: String,
  description: String,
  tags: String,
  type: String,
  eventDate: String,
  bookNow: Boolean,
});

const Stomp = mongoose.model("Stomp", stompSchema);
module.exports = Stomp;
