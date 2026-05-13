const express = require("express");
const app = express()
const user = require("./data/genmate.js");

const port = 6767

app.get('/', (req, res) => {
  res.send("Hello gooes gooes duck");
})
app.get('/users', (req, res) => {
  res.send(user);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})