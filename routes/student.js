const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentcontroller')
router.use(express.urlencoded({extended: false}));
router.get('/',(req ,res)=>{
    res.render('home');
})

router.post('/add/student',(req ,res)=>{
    studentController.addStudent(req, res);
})

router.get('/students',(req, res)=>{
    studentController.getStudents(req, res);
})


router.get('/edit/student/page/:id',(req, res)=>{
    studentController.getStudentForEdit(req, res);
})

router.post('/update/student/:id',(req, res)=>{
    studentController.updateStudent(req, res);
})

router.get('/delete/student/page/:id',(req, res)=>{
    studentController.deleteStudent(req, res)
});

module.exports = router


//form se data bs get or post se hee a skta hai