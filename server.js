var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var tables = ["1", "2"];
var waitlist = ["wait"];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/makereservations", function(req, res) {
  res.sendFile(path.join(__dirname, "public/make-reservations.html"));
});

app.get("/viewtables", function(req, res) {
  res.sendFile(path.join(__dirname, "public/view-tables.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

app.post("/tables", function(req, res) {
  if (tables.length < 5) {
    const tableOrder = req.body;
    tables.push(tableOrder);
    return res.json(tables);
  } else throw new Error("All tabls are full");
});

app.post("/waitlist", function(req, res) {
  const reservation = req.body;
  reservations.push(reservations);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
