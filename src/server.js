const express = require("express");
const { db } = require("./models/db");
const linkRoute = require("./routes/links");
const redirectRoute = require("./routes/redirection");

const app = express();
app.use(express.json());

app.use("/api/links", linkRoute);
app.use("/", redirectRoute);

db.sync({ force: true })
  .then(() => console.log("DB works"))
  .catch((err) => console.error(err));
app.listen(4445, () => {
  console.log("Server started on http://localhost:4445");
});
