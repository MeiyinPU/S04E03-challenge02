const session = require("express-session");

const authController = {

  showLoginForm: (req, res)=> {
    res.render('loginPage.ejs');
  },


  postLogin: (req, res)=> {
    // utilisateur nous a envoyé son login via un formulaire en POST
    // On va vouloir sauvegarder ce login dans une session
    // ! 1) récuperer les infos du formulaire
    console.log(req.body);
    const user = req.body.login;
    
    // ! 2) stocker ces infos dans une session
    // express-session nous mets à dispo une vatiable dans laquelle on peut stocker tout ce qu'on veut: request.session
    // j'ai créé la propriété "connectedUser" à laquelle j'atribue la valeur de "user"
    console.log(req.session);
    req.session.connectedUser = user;
    // l'objet request.session on l'organise comme on veut: c'est un simple objet auquel on peut ajouter autant de propiretés qu'on le souhaite
    // là j'y ai rangé mon nom d'utilisateur. l'intérêt c'est qu'il persiste peut importe sur quelle page je me trouve


    // ! 3) rediriger l'utilisateur sur la page d'accueil
     
  },

};

module.exports = authController; 