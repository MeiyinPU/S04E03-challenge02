const express = require("express");
const router = express.Router();

const promoController = require("./controllers/promoController.js");
const studentController = require("./controllers/studentController.js");
const mainController = require("./controllers/mainController.js");
const adminController = require("./controllers/adminController.js");

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

module.exports = router;

// admin
// router.get("/admin/addStudent", adminController.addStudent);
