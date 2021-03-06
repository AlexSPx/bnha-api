const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const uri = process.env.MONGO_URI;
const port = process.env.PORT || 5050;

//Connect to DB
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => "Connected to DB"
);

// routes
app.use("/chapter", require("./routes/chapter"));
app.get("/", (req, res) => {
  res.json({ working: "yes" });
});

app.listen(port, () => console.log(`Running on port ${port}`));
