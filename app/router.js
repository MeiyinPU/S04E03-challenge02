const express = require("express");
const router = express.Router();

const promoController = require("./controllers/promoController.js");

//pour tester
// router.get("/", (req, res)=>{
//   console.log("router.get success");
//   res.write("hello world");
//   res.end();
// });


router.get("/promos", promoController.getPromoList);

module.exports = router;