var express = require("express");
var fs = require("fs");
var path = require("path")


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'))



var tables {
table1:"firstTable"
table2:"secondTable"
table3:"3rdTable"
table4:"4thTable "
table5:"5thTable"

}

