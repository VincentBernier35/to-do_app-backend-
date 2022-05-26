require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const router = require("./app/router");

const app = express();


// thoses 2 lines are for PUT and POST. Usefull for parsing data in req.body.
app.use(express.json()); // inbuilt express method. No need to require bodyparser.
app.use(express.urlencoded({ extended: true})); // this recognize incoming request object as strings or arrays.

app.use(cors()); // everyone can access the API

// Multer is used for handling multipart/form-data, which is primarily used for uploading files
const multipartParser = multer();
app.use(multipartParser.none());

app.use(router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`API démarrée sur http://localhost:${port}`);
});
