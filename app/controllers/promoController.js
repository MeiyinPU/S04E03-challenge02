const dataMapper = require("../dataMapper.js");

const promoController = {

  getPromoList: async (req, res)=> {

    try {
      console.log('controller sucess');
      const promoList = await dataMapper.getPromoListRequest();
      // console.log(promoList);
      res.render("promoList", {promoList});
    } catch(error){

      console.log(error);
      res.render('404.ejs');

    }

  },


};

module.exports = promoController;