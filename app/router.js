const express = require("express");
const router = express.Router();

const promoController = require("./controllers/promoController.js");

//pour tester
// router.get("/", (req, res)=>{
//   console.log("router.get success");
//   res.write("hello world");
//   res.end();
// });

// Liste des promos
router.get("/promos", promoController.getPromoList);


// détails d'une promo
router.get("/promos/:id", promoController.getPromo);


//liste des étudiants de chaque promo




module.exports = router;