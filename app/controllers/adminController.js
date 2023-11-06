const dataMapper = require("../dataMapper.js");

const adminController = {

  showAddStudentForm: async (req,res)=> {
    console.log('adminController success');
    // Methode qui affiche la page contenant le formaulaire d'ajout d'un étudiant
    if (req.session.connectedUser !== "Nicole"){
      return res.status(403).send('Accès non autorisé');
    } else {

      try{
        // requête SQL pour demander la liste des promotions
        const promoList = await dataMapper.getPromoListRequest();
        res.render("addStudent.ejs", {promoList} );

      } catch(error){
        console.log(error);
        res.render('404.ejs');

      }

    }
  },

  addStudent: async (req, res)=> {
    // Méthode qui 
    // ! 1) récupère les infos envoyées via le formulaire

    // pour avoir accès à request.body, il fuat ajouter le bodyparser dans l'index
    // console.log('donné envoyé via le POST', req.body);
    const student = req.body;
    // ! 2) envoyer ces infos dans la base de données via dataMapper;
    // on place une constante "count" devant l'appel de la fonction = pour récupérer la valeur de retour de la fonction (le gant de baseball)
  
    try {
      const count = await dataMapper.addStudentRequest(student); 
      console.log(count);
      // ! 3) rediriger l'utilisateur sur une page (la liste des étudiants de la promo où il a été ajouté)
      // la méthode "redirect" sert à envoyer un appel sur une route déjà existante afin d'éviter de réimplémenter la logique une seconde fois
      // on passe en paramètre à "redirect" une chaine de caractère représentant une route

      if(count === 1){
        res.redirect(`/promos/${student.promo}/students`);
      } else {
        // il faut faire une page d'erreur, ou bien un message d'erreur sur le formulaire
        return res.status(500).send('Aucun enregistrement crée');
      }

    }catch(error){
      console.log(error);
      res.render('404.ejs');
    }
    


  }

};

module.exports = adminController;