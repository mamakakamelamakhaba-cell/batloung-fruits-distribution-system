// Batloung Fruits Distribution Management System - Express server
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use(express.json());

// Simple request logger
app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()}  ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.use('/api/auth',      require('./routes/auth'));
app.use('/api/fruits',    require('./routes/fruits'));
app.use('/api/boxsizes',  require('./routes/boxsizes'));
app.use('/api/products',  require('./routes/products'));
app.use('/api/suppliers', require('./routes/suppliers'));
app.use('/api/vendors',   require('./routes/vendors'));
app.use('/api/stock',     require('./routes/stock'));
app.use('/api/orders',    require('./routes/orders'));
app.use('/api/reports',   require('./routes/reports'));

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'Batloung Fruits API' }));

// 404
app.use((_req, res) => res.status(404).json({ message: 'Endpoint not found' }));

// Central error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '127.0.0.1', () => console.log(`Batloung Fruits API running on http://127.0.0.1:${PORT}`));
