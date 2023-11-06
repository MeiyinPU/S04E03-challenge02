// varialbes d'env
require('dotenv').config();

// package express
const express = require("express");


// reuquire le module express-session
const session = require("express-session");

// require router
const router = require("./app/router.js");

// execution d'express
const app = express();

// config views
app.set('view engine', 'ejs');
app.set('views', __dirname +'/app/views');


// config fichier statiques
app.use(express.static(__dirname + "/public"));

//ajout du body parser pour accès à request.body dans les controllers (faut mettre avant le router)
app.use(express.urlencoded({extended: true}));


// branche le MW express-session qui s'oocupe de gérer pour nous le système des sessions et des cookies
app.use(session({
  secret: 'une chaine de charactère aléatoire', // le "secret" qui sert à générer les identifiants de sessions uniques
  resave: true, // sauvegarde automatiquement de la session à la fin de la requête 
  saveUninitialized: true,  // créer une session pour l'internaute dans tous les cas. if false: on crée une session que une fois qu'on met quelques choses dedans
  cookie: {secure: false}  // if https: true http: false

}));


// MW custom àpres "session" et avant "router"
// app.use((req, res, next)=>{
//   res.locals.userName = req.session.connectedUser;
//   next();
// });

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