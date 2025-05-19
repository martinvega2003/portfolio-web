import express from "express";
import cors from "cors";
import pool from "./database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }
  try {
    await pool.query(
      "INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/", (req, res) => {
  res.send("Contact API is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});