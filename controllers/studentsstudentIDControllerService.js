'use strict';
let students = require('./students');
// let students = studs.students;


// let s = 1;

// let students = [
//   {
//     studentID: s++,
//     classID: "DIN",
//     studentName: "John Doe",
//     address: "Testikatu 1"
//   },
//   {
//     studentID: s++,
//     classID: "DIN",
//     studentName: "John Doe",
//     address: "Testikatu 1"
//   },
//   {
//     studentID: s++,
//     classID: "DIN",
//     studentName: "John Doe",
//     address: "Testikatu 1"
//   },
// ];


module.exports.funcstudentsstudentIDPARAMETERS = function funcstudentsstudentIDPARAMETERS(req, res, next) {
    res.send({
        message: 'This is the mockup controller for funcstudentsstudentIDPARAMETERS'
    });
};

module.exports.getStudents = function getStudents(req, res, next) {
    // console.log("get student id", req);
    const id = req.studentID.value;
    console.log("get student id", id);
    // if (req && req.params && req.params.studentID) {
    //   const id = req.params.studentID;
    //   console.log("req.params", req.params);
    //   // console.log(`student id: ${id}`);
    //   // console.log(`Students: ${students}`);
    //   let foundStudent = null;
    //   students.forEach(student => {
    //
    //     if (student && student.studentID == id) {
    //       foundStudent = student;
    //     }
    //   });
    const student = students.getStudent(id);
    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).send('GET STUDENT NOT FOUND');
    }
};


module.exports.updateStudents = function updateStudents(req, res, next) {
    console.log("put students req", req);
    let student = req.undefined.value;
    console.log("put students", student);
    // // console.log("update student before", newStudent);
    // // let found = false;
    // // students.map(student => {
    // //   if (student.studentID == newStudent.studentID) {
    // //     student.classID = newStudent.classID;
    // //     student.studentName = newStudent.studentName;
    // //     student.address = newStudent.address;
    // //     found = true;
    // //   }
    // // });
    // // console.log("updated student", newStudent);
    if (students.putStudent(student)) {
      res.status(200).send("UPDATE STUDENT OK");
    } else {
      res.status(404).send("UPDATE STUDENT NOT FOUND");
    }
};

module.exports.deleteStudents = function deleteStudents(req, res, next) {
    // console.log("req", req);
    // console.log("delete before students", students);
    const deleteID = req.studentID.value;
    console.log("students delete id", deleteID);
    // let deleteIndex = null;
    // students.map((student, index) => {
    //   if (student.studentID == deleteID) {
    //     deleteIndex = index;
    //   }
    // });
    if (students.deleteStudent(deleteID)) {
        // students.splice(deleteIndex, 1);

        res.status(200).send('STUDENTS DELETE OK');
        // console.log("delete after students", students);
    } else {
        res.status(404).send('NOT FOUND');
    }
};