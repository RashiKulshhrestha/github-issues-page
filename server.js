const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require('cors');

app.use(cors());

connectDB();

app.use(express.json({ extended: true }));

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/", require("./api/issues"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
