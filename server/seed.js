const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);
const Stomp = require("./models/stomp");

async function seed() {
  await Stomp.create({
    user: "christopherseaman1983@gmail.com",
    cardImg:
      "https://images.ctfassets.net/ob1psfsvxnrx/4eUaUN4XyJaUctMKjPZV6v/b2b491779737f17b7adf64e96a29392c/rf_norfolk_cromerbeach_01_2021_xl.jpg",
    title: "cromer",
    seafront: 5,
    parking: true,
    restaurant: true,
    bars: true,
    location: "https://goo.gl/maps/XCFUhSEwYcoAJxKw9",
    description:
      "Cromer is a popular seaside town on the north Norfolk coast and is proudly known as 'The Gem of the Norfolk Coast'. The town stands high and bracing on the wind swept cliffs, with several paths that zig and zag down from the town to the sandy beaches below.",
    tags: "norwich norfolk beach beaches pier cromer crabs",
    type: "beach",
    eventDate: "",
    bookNow: false,
  });
  await Stomp.create({
    user: "christopherseaman1983@gmail.com",
    cardImg: "https://www.holkham.co.uk/wp-content/uploads/2022/07/2018-Aug-c.-Georgia-DawsonIMG_0549-scaled.jpg",
    title: "holkham",
    seafront: 15,
    parking: true,
    restaurant: true,
    bars: false,
    location: "https://goo.gl/maps/156FMhVVSnYy1hwaA",
    description:
      "Holkham National Nature Reserve (3,706 hectares) stretches from Burnham Norton to Blakeney. Pinewoods: Most of the area can be explored by following footpaths from the main car parks. The core section of the reserve, from Wells to Holkham Bay, is crisscrossed by paths allowing access through the pine woodland.",
    tags: "norwich norfolk holkham beach beaches",
    type: "beach",
    eventDate: "",
    bookNow: false,
  });
  console.log("saved stomps");
}

seed();
