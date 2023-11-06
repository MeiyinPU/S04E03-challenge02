
const mainController = {


  getHomePage: (req,res)=>{
  // response.render = s'occupe de récupérer le contenu d'un fichier ejs, de l'intépréter (remplacer les parties variables par leur contenu) et retourner le contenu interprété au client 
   
    res.render("home.ejs");
  }

};

module.exports = mainController;
