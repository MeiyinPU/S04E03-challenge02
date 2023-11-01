const client = require("./database.js");


const dataMapper =  {

  getPromoListRequest: async ()=> {

    const sqlQuery = "SELECT * FROM promo ORDER BY name;";
    const result = await client.query(sqlQuery);    
    return result.rows;

  },



};

module.exports = dataMapper;