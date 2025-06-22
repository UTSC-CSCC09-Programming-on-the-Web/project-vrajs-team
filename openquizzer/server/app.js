const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("OpenQuizzer backend is up and running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
