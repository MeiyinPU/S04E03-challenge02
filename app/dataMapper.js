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
  }, 

  addStudentRequest : async (student)=> {

    // destrucuring 
    
    const { first_name, last_name, github_username, promo } = student;
    // au lieu de 
    // const first_name = student.first_name;
    // const last_name = student.last_name;.......


    // la reque préprarée conseillé par pg 
    const sqlQuery = {
      text:`
      INSERT INTO student 
      (first_name, last_name, github_username, profile_picture_url, promo_id) 
     VALUES ($1,$2,$3,$4,$5);
     `,
      values: [first_name, last_name, github_username, `https://github.com/${github_username}.png`, promo]

    };
    
    // console.log(sqlQuery);


    // const sql = {
    //   text: 'INSERT INTO student (first_name, last_name, github_username, promo_id) VALUES ($2, $3, $4, $1) RETURNING id;',
    //   values: [promo, first_name, last_name, github_username],
    // };
  
    // on envoie la requête à la db
    const result = await client.query(sqlQuery);
    console.log(result);
    // dans le result, rowCount nous intéresse car il indique combien de modification a été fait
    //on retoune l'info rowCount: peut être utile pour savoir si l'opération a bien réussi (nombre de ligne ajoutées)
    return result.rowCount;

  },
};

module.exports = dataMapper;