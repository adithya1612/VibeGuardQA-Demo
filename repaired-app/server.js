const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Correlation ID helper middleware (VG-OPS-003)
app.use((req, res, next) => {
  req.correlationId = req.headers['x-correlation-id'] || `c-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  res.setHeader('x-correlation-id', req.correlationId);
  next();
});

// Securely loaded Stripe secret from environment (VG-SEC-001)
const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY;

// Connection Pool config using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Secure Parameterized Query implementation (VG-SEC-002)
app.get('/api/users', async (req, res) => {
  const searchTerm = req.query.username;
  
  if (!searchTerm) {
    return res.status(400).json({ error: "Username query parameter is required" });
  }

  // Structured Logging with correlation context (VG-OPS-002, VG-OPS-003)
  console.log(JSON.stringify({
    level: "info",
    message: `Searching for user: ${searchTerm}`,
    correlationId: req.correlationId,
    timestamp: new Date().toISOString()
  }));

  try {
    // Parameterized syntax to block SQL injection
    const query = 'SELECT id, username, email FROM users WHERE username = ?';
    const [rows] = await pool.execute(query, [searchTerm]);
    
    // Pool handles connections automatically - no leaks (VG-OPS-004)
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error(JSON.stringify({
      level: "error",
      message: `Database error: ${err.message}`,
      correlationId: req.correlationId,
      timestamp: new Date().toISOString()
    }));
    res.status(500).json({ error: "Internal Database Error" });
  }
});

// Active Health Endpoint implementation (VG-OPS-001)
app.get('/health', async (req, res) => {
  try {
    // Basic connectivity assertion
    const connection = await pool.getConnection();
    connection.release();
    res.json({ status: "healthy", database: "connected", timestamp: new Date().toISOString() });
  } catch (err) {
    res.status(503).json({ status: "unhealthy", reason: err.message });
  }
});

app.listen(port, () => {
  console.log(JSON.stringify({
    level: "info",
    message: `Server successfully started on port ${port}`,
    timestamp: new Date().toISOString()
  }));
});
