const express=require('express');
const router=express.Router();

const studentController=require('../controllers/student.controller');

/* A route for handling a POST request to the '/addstudent' endpoint. When a POST request is made to this endpoint, the
`studentController.addStudentData` function will be called to handle the request. */
router.post('/addstudent',studentController.addStudent);


router.get('/students',studentController.findAllStudents);


router.get('/student/:id',studentController.findStudentById);

module.exports=router;