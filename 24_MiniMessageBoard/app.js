const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messageRouter = require("./routes/messageRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true })); // In order to get and use the data from the form

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/message", messageRouter);



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});