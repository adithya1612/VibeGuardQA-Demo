const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = process.env.PORT || 3000;

// Hardcoded secret (VG-SEC-001)
const STRIPE_SECRET = "sk_test_FakeSecretKey000000000000";

// MySQL configuration with exposed password
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'super-secret-password-123',
  database: 'test_db'
};

// SQL Injection Vulnerability (VG-SEC-002) using backtick interpolation
app.get('/api/users', async (req, res) => {
  const searchTerm = req.query.username;
  
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.connect();
    // VibeGuard scan check should fire on backtick dynamic parameters
    const query = `SELECT * FROM users WHERE username = '${searchTerm}'`;
    const [rows] = await connection.execute(query);
    
    // Connection Leak: Missing connection.end() call (VG-OPS-004)
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Missing Health endpoint (VG-OPS-001) and correlation ID logging (VG-OPS-003)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
