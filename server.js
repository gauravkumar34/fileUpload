require('dotenv').config()
const express = require("express");
const jwt = require('jsonwebtoken')
const app = express();

const initRoutes = require("./routes/web");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);
app.use(express.json())


app.post('/login', (req, res)=> {
  const username = req.body.username
  const user = {name: username}
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: accessToken})
})

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});