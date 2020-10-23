
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next){
  const authHeader = req.headers['authorization']
  const token =authHeader && authHeader.split(' ')[1]
  if(token == null ) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
    if(err) return res.sendStatus(403)
    req.user = user
    next()
  })

}

const routes = app => {
  router.get("/", homeController.getHome,(req, res)=> {
    
  });

  router.post("/upload",authenticateToken,uploadController.uploadFile);

  return app.use("/", router);



};

module.exports = routes;