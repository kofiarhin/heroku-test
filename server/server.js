const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.json({ message: "this is to test continuos integration" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server started on:", port));
