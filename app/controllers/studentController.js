
const dataMapper = require("../dataMapper.js");

const studentController = {

  getStudentList: async (req, res) =>{

    const promoId = Number(req.params.id);

    try {
      console.log('controller sucess');
      const studentList = await dataMapper.getStudentListRequest(promoId);
      const promo = await dataMapper.getPromoByIdRequest(promoId);

      res.render("studentList", {studentList, promo});


    } catch(error){
      console.log(error);
      res.render("404.ejs");
    }
  },

  getStudent: async (req, res)=>{
    const studentId = Number(req.params.id);

    try {
      console.log('controller sucess');
      const student = await dataMapper.getStudentByIdRequest(studentId);
      const promo = await dataMapper.getPromoByIdRequest(student.promo_id);
      student.promo_name = promo.name;
      res.render("studentDetails", {student});

    }catch(error){
      console.log(error);
      res.render("404.ejs");
    }

  }



};

module.exports = studentController;