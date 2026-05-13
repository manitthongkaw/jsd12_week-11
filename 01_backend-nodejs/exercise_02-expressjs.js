const express = require("express");
const cors = require("cors");
const app = express();
const user = require("./data/user.js");

const port = 6768

app.use(cors());
app.get('/', (req, res) => {
  res.send("Hello JSD12");
})
app.get('/users', (req, res) => {
  res.send(user);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})