const express = require("express");
const cors = require("cors");
const data = require("./data");

const app = express();
const port = 5000;
app.use(cors());

app.get("/ghibliData", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`This server is listened at ${port}`);
});
