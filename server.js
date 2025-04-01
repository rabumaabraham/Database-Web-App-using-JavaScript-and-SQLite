const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Use a persistent SQLite database file
const db = new sqlite3.Database("students.db");

// ✅ Create the table only if it doesn't already exist
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            age INTEGER,
            grade TEXT
        )
    `);
});

// ✅ API to fetch all students
app.get("/students", (req, res) => {
    db.all("SELECT * FROM students", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// ✅ API to add a student
app.post("/add", (req, res) => {
    const { name, age, grade } = req.body;
    db.run("INSERT INTO students (name, age, grade) VALUES (?, ?, ?)", [name, age, grade], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Student added", id: this.lastID });
    });
});

// ✅ Serve frontend files from "public"
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
