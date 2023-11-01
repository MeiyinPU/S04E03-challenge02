// varialbes d'env
require('dotenv').config();

// package express
const express = require("express");


// reuquire le module express-session

// require router
const router = require("./app/router.js");

// execution d'express
const app = express();

// config views
app.set('view engine', 'ejs');
app.set('views', __dirname +'/app/views');


// config fichier statiques
app.use(express.static(__dirname + "/public"));

//accès à request.body dans les controllers


// branche le MW express-session 

// MW custom àpres "session" et avant "router"
app.use((req, res, next)=>{
  res.locals.userName = req.session.connectedUser,
  next();
});

// router
app.use(router);


// test
// app.get("/", (req, res)=>{
//   res.write("hello world");
//   res.end();
// }
// );

app.use((req, res) => {
  res.status(404).render('404');
});

// port à écouter
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST;

app.listen(PORT, ()=>{
  console.log(`App running at http://${HOST}:${PORT}`);
});