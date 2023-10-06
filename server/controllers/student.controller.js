/* The line `const Student = require("../model/student.model");` is importing the `Student` model from
the `student.model.js` file located in the `../model/` directory. This allows the code to use the
`Student` model to create new instances of students and save them to the database. */
const Student = require("../model/student.model");

/**
 * The function `addStudentData` adds a new student to the database with the provided student ID,
 * student name, and college name.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters. It is typically
 * provided by the web framework or server handling the request.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, sending data, and setting headers.
 */
const addStudent = async (req, res) => {
  const { StudentId, StudentName, CollegeName } = req.body;
  try {
    const newStudent = new Student({
      StudentId,
      StudentName,
      CollegeName,
    });
    const savedStudent = await newStudent.save();
    res
      .status(200)
      .send(`Student ${savedStudent.StudentName} with id ${savedStudent.StudentId} is added`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

/**
 * The function `getAllStudents` retrieves all students from the database and sends them as a response.
 * @param req - The `req` parameter is the request object, which contains information about the
 * incoming HTTP request, such as the request headers, request parameters, and request body. It is used
 * to retrieve data from the client-side and pass it to the server-side.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It has methods like `status()` to set the status code of the response and `send()` to
 * send the response body.
 */
const findAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.find();
    res.status(200).send(allStudents);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};

/**
 * The function `findStudentById` is an asynchronous function that takes a request and response object
 * as parameters, and it tries to find a student by their ID and sends the student data as a response.
 * @param req - The req parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request parameters, request body, etc. It is used to
 * retrieve data from the client-side.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code and sending the response body.
 */
const findStudentById=async(req,res)=>{
    try{
        const Id=req.params.id;
        const student=await Student.find({StudentId:Id});
        res.status(200).send(student);
    }catch(err){
        res.status(err.status).send(err.message);
    }
}


/* `module.exports = { addStudentData };` is exporting the `addStudentData` function from the module.
This allows other modules or files to import and use the `addStudentData` function. */
module.exports = { addStudent, findAllStudents,findStudentById };
