import express from "express";
const app = express();
import db from "./src/models/index";
const route = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var cors = require("cors");
// app.use(cors());
const main = async () => {
  await db.authenticate();

//   app.use("/",router);

  // app.listen();
};

main();

const port = 8000;
app.listen(8001, () => {
  console.log("App is running on port 8001 ");
});
