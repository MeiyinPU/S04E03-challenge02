const dataMapper = require("../dataMapper.js");

const promoController = {

  getPromoList: async (req, res)=> {

    try {
      // console.log('promoController sucess');
      const promoList = await dataMapper.getPromoListRequest();
      // console.log(promoList);
      res.render("promoList", {promoList});
    } catch(error){

      console.log(error);
      res.render('404.ejs');

    }

  },

  getPromo: async (req, res)=>{
    
    const promoId = req.params.id;
    
    try {
      console.log('promoController sucess');
      const promo = await dataMapper.getPromoByIdRequest(promoId);
      console.log(promo);     

      res.render("promoDetails", {promo});

    } catch(error){

      console.log(error);
      res.render('404.ejs');
    }

  },
};

module.exports = promoController;