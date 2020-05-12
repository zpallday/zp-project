const express = require('express');

const server = express();

server.get('/', (req,res) =>  {
  res.json({api: "running"})
})

const port = 9000;
server.listen(port, () => console.log("hello there"))