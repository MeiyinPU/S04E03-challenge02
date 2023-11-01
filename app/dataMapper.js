const client = require("./database.js");


const dataMapper =  {

  getPromoListRequest: async ()=> {

    const sqlQuery = "SELECT * FROM promo ORDER BY name;";
    const result = await client.query(sqlQuery);    
    return result.rows;

  },

  getPromoByIdRequest: async (promoId)=> {

    const sqlQuery = {
      text: 'SELECT * FROM promo WHERE id= $1;',
      values:[promoId],
    };
  
    const result = await client.query(sqlQuery);
    return result.rows[0];
  },
   
  getStudentListRequest: async (promoId)=> {

    const sqlQuery = {
      text: 'SELECT * FROM student WHERE promo_id= $1;',
      values:[promoId],
    };
  
    const result = await client.query(sqlQuery);
    return result.rows;
  },
  getStudentByIdRequest: async(studentId)=>{

    const sqlQuery = {
      text: 'SELECT * FROM student WHERE id= $1;',
      values:[studentId],
    };

    const result = await client.query(sqlQuery);
    return result.rows[0];
  }
 
    



};

module.exports = dataMapper;