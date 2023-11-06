const express = require("express");
const router = express.Router();

const promoController = require("./controllers/promoController.js");
const studentController = require("./controllers/studentController.js");
const mainController = require("./controllers/mainController.js");
const adminController = require("./controllers/adminController.js");
const authController = require("./controllers/authController.js");

//pour tester
// router.get("/", (req, res)=>{
//   console.log("router.get success");
//   res.write("hello world");
//   res.end();
// });

//Accueil
router.get("/", mainController.getHomePage);


// Liste des promos
router.get("/promos", promoController.getPromoList);


// détails d'une promo
router.get("/promos/:id", promoController.getPromo);


//liste des étudiants de chaque promo
router.get("/promos/:id/students", studentController.getStudentList);

//Détails d'un étudiant
router.get("/student/:id", studentController.getStudent);



// admin: afficher la fîche
router.get("/admin/addStudent", adminController.showAddStudentForm);

// envoie du formulaire d'uajout d'un étudiante
// Quand on clique sur ajouter/submit, on va prendre ce router pour executer la méthode addStudent (méthode du adminController)
router.post("/admin/addStudent", adminController.addStudent);


// login
router.get('/login', authController.showLoginForm);

// envoie du formulaire 
router.post('/login', authController.postLogin);


module.exports = router;