const express=require('express');
/* `const router=express.Router();` is creating a new instance of the Express Router. The Router is a
middleware that allows you to define routes for your application. It provides methods for handling
different HTTP methods like GET, POST, PUT, DELETE, etc. By creating a new instance of the Router,
you can define routes specific to this router and then use it as middleware in your application. */
const router=express.Router();

const studentController=require('../controllers/student.controller');

/* A route for handling a POST request to the '/addstudent' endpoint. When a POST request is made to this endpoint, the
`studentController.addStudentData` function will be called to handle the request. */
router.post('/addstudent',studentController.addStudent);


router.get('/students',studentController.findAllStudents);


router.get('/student/:id',studentController.findStudentById);


// http://localhost:3000/api/addstudent
// http://localhost:3000/api/students
// http://localhost:3000/api/student/15
module.exports=router;