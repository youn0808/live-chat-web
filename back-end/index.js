const express = require("express");
const config = require("./config/app");
const router = require("./router");

const app = express();
const bodyParser = require("body-parser");
const port = config.appPort;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
