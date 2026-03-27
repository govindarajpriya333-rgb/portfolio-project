const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "https://govindarajpriya333-rgb.github.io"
}));

app.use(express.json());

app.post("/", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Message:");
  console.log(name, email, message);

  res.status(200).json({ message: "Success" });
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});