const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Priyalaxmi@2008",
  database: "portfolio_db"
});

db.connect(err => {
  if (err) {
    console.log("❌ DB Error:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

// API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error");
    }
    res.send("Success");
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
if (response.ok) {
  document.getElementById("status").innerText = "✅ Message sent successfully!";
  this.reset();
} else {
  document.getElementById("status").innerText = "❌ Failed to send message";
}