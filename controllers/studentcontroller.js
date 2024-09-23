const Student = require('../models/Student')
 async function addStudent(req, res){
     try{
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('studentinsert');
     }catch(err){
        console.log(err,"error")
     }
}

async function getStudents(req, res) {
   try{
        let students = await Student.find({});
        res.render('studentlist',{
         students: students
        });
   }catch(error){
      console.log(error,"error")
   }
}

module.exports = {
    addStudent,
    getStudents
}