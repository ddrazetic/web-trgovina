const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

// Database
const db = require("./server/database/database.js");

// Test DB
db.authenticate()
  .then(() => console.log("Database connected.."))
  .catch((err) => console.log(err));

dotenv.config({ path: "config.env" });
const PORT = process.env.port || 8080;

// Log incoming requests
app.use(morgan("tiny"));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));
// Needed to get from data from requests
app.use(bodyparser.json());

// global allow cors
const corsOptions = {
  origin: ["http://localhost:3001", "http://localhost:3000"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Webshop app");
});

// Category routes
app.use("/categories", require("./server/routes/categories.js"));
app.use("/articles", require("./server/routes/articles.js"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
