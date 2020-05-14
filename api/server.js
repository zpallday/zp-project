const express = require("express");
const server = express();
const cors = require("cors");
const authRoute = require("./userRoute");
const auth = require('./middleware/auth')
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
  });




server.use("/api/auth", authRoute);



module.exports = server;