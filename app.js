const express = require("express");
const app = express();
// const port = process.env.PORT || 4400;
const mongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbname = "nodeExam";

mongoClient.connect(url, {}, (error, client) => {
  if (error) console.log("Can not connect to the database");

  const db = client.db(dbname);

  // db.collection("users").insertOne(
  //   {
  //     name: "Jan",
  //   },
  //   (error, result) => {
  //     if (error) console.log("Adding user error", error);

  //   console.log(result.ops);
  // }
  // );
  db.collection("users")
    .find({})
    .toArray((error, users) => {
      console.log(users);
    });
  console.log("Database connection is ok");
});

// const mongoose = require('mongoose');
// // mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// app.get("/", (req, res) => {
//   res.send("Witamy na stronie tablicy ogłoszeń.");
// });

// app.get("/board", (req, res) => {
//   res.send("Tablica ogłoszeń");
// });

// app.post("/", function (req, res) {
//   res.send("POST request to the homepage!!");
// });

// app.listen(port, () => console.log("Serwer działa"));
