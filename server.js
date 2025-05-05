const express = require("express");
const env = require("dotenv");
env.config();
const db = require("./db/connectDb");
const users = require("./routes/mainRouter");

const app = express();
app.use(express.json());
app.use("/", users);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server Listen To http://lochalhost:${port}`);
  db();
});
