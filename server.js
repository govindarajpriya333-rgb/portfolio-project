const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ FIX: Root route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// ✅ FIX: Contact route
app.post("/", (req, res) => {
  console.log(req.body);
res.json({ message: "Message received" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});