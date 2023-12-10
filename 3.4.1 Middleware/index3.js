import express from "express";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("request Method :", req.method);
  console.log("request url :", req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
