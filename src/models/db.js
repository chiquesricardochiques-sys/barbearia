// src/models/db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

// Criar conexão com o MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'rick-456',
  database: process.env.DB_NAME || 'salao',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;
