import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import Database from "better-sqlite3";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors({
    origin: [
      "https://cv1108.vercel.app"
    ],
    credentials: true
  }));
  app.use(express.json());



  // Database Initialization
  const MONGODB_URI = process.env.MONGODB_URI;
  let db: any = null;

  if (!MONGODB_URI) {
    console.log("No MONGODB_URI found. Using local SQLite database for preview.");
    db = new Database("portfolio.db");
    
    // Initialize tables
    db.exec(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        subject TEXT,
        message TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS analytics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        page TEXT,
        visits INTEGER DEFAULT 0,
        last_visited DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
  } else {
    console.log("MONGODB_URI found. Ready for MongoDB connection.");
    // In a real production environment, you would connect to MongoDB here.
  }

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      database: MONGODB_URI ? "mongodb" : "sqlite",
      timestamp: new Date().toISOString() 
    });
  });

  // Contact Form Submission
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    
    if (db) {
      try {
        const stmt = db.prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
        stmt.run(name, email, subject, message);
        res.status(201).json({ message: "Message stored locally in SQLite." });
      } catch (err) {
        res.status(500).json({ error: "Failed to store message." });
      }
    } else {
      // Mock success for MongoDB mode if not connected
      console.log("Contact submission (Mock):", { name, email, subject, message });
      res.status(201).json({ message: "Message received (Mock mode)." });
    }
  });

  // Simple Analytics
  app.post("/api/analytics/track", (req, res) => {
    const { page } = req.body;
    if (db) {
      db.prepare(`
        INSERT INTO analytics (page, visits) VALUES (?, 1)
        ON CONFLICT(id) DO UPDATE SET visits = visits + 1, last_visited = CURRENT_TIMESTAMP
      `).run(page);
    }
    res.sendStatus(200);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
