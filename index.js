const express = require('express');
const cors = require("cors");
const server = express();
server.use(cors())

server.get('/', (req,res) =>  {
  res.json({api: "running"})
})

const port = 9000;
server.listen(port, () => console.log("hello there"))