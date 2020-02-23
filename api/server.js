const express = require('express')
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const Database = require('./Database.js');

app.get('/', (req, res) => {
  const db = new Database();
  res.send('Hello World!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
