const express = require("express");
const server = express();
const cors = require("cors");
const auth = require('./middleware/auth')
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
  });

module.exports = server;