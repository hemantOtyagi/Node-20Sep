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


async function getStudentForEdit(req, res) {
   try{
        let id = req.params.id;
        console.log(id);
        let student = await Student.findOne({_id:id});
        console.log(student);
        res.render('studentforupdate',{
         student:student
        });

   }catch(err){
      console.log(err,'error');
   }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentForEdit
}