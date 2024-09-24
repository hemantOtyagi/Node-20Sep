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


async function updateStudent(req, res) {
   try{
      let id = req.params.id;
      let student = await Student.findOne({_id:id});
      console.log(student,'student');
      student.rollNo=req.body.rollNo;
      student.firstName=req.body.firstName;
      student.lastName=req.body.lastName;
      student.fatherName=req.body.fatherName;
      student.adhrCardNo= req.body.adhrCardNo;
      student.mobileNo=req.body.mobileNo;
      await student.save();
      let students = await Student.find({});
        res.render('studentlist',{
         students: students
        });

   }catch(error){
      console.log(error,'error');
   }
}


async function deleteStudent(req, res) {
   try{
       let id = req.params.id;
       await Student.deleteOne({_id:id});
       let students = await Student.find({});
       res.render('studentlist',{
        students: students
       });
   }catch(error){
      console.log(error,'error');
   }
}



module.exports = {
    addStudent,
    getStudents,
    getStudentForEdit,
    updateStudent,
    deleteStudent
}