'use strict';
var students = require('./students');
// const students = studs.students;

let s = 1;

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
//     studentName: "Jane Doe",
//     address: "Testikatu 2"
//   },
//   {
//     studentID: s++,
//     classID: "DIN",
//     studentName: "John Smith",
//     address: "Testikatu 3"
//   },
// ];

module.exports.findStudents = function findStudents(req, res, next) {
  // console.log("students", students);
    res.status(200).json(students.getStudents());
};

module.exports.createStudents = function createStudents(req, res, next) {
  // console.log("req ", req.undefined.value);
  // res.send({
  //   req.body;
  // });
  // console.log("post before students", students);
  const student = req.undefined.value;
  // newStudent.studentID = s++;
  // console.log("new student", newStudent);
  // students.push(newStudent);
  // console.log("post after students", students);
  // const added =
  if (students.addStudent(student)) {
    res.status(200).send("POST STUDENT OK");
  } else {
    res.status(404).send("POST STUDENT SERVER ERROR");
  }

};

// module.exports.getStudents = function getStudents(req, res, next) {
//   console.log("req", req.undefined.value);
//   if (req && req.params && req.params.studentID) {
//     const id = req.params.studentID;
//     console.log("req.params", req.params);
//     // console.log(`student id: ${id}`);
//     // console.log(`Students: ${students}`);
//     let foundStudent = null;
//     students.forEach(student => {
//
//       if (student && student.studentID == id) {
//         foundStudent = student;
//       }
//     });
//     if (foundStudent) {
//       res.json(foundStudent);
//     } else {
//       res.send('NOT FOUND');
//     }
//   } else {
//     res.send("SERVER ERROR");
//   }
//
// };

// module.exports.updateStudents = function updateStudents(req, res, next) {
//   let newStudent = req.undefined.value;
//   console.log("update student before", newStudent);
//   // let found = false;
//   students.map(student => {
//     if (student.studentID == newStudent.studentID) {
//       student.classID = newStudent.classID;
//       student.studentName = newStudent.studentName;
//       student.address = newStudent.address;
//       // found = true;
//     }
//   });
//   console.log("updated student", newStudent);
//   // if (found) {
//   //   res.send("UPDATE STUDENT OK");
//   // } else {
//   //   res.send("UPDATE STUDENT NOT FOUND");
//   // }
//   res.send("UPDATE STUDENT OK");
// };

// module.exports.deleteStudents = function deleteStudents(req, res, next) {
//   const deleteID = req.undefined.value.deleteID;
//   console.log("students delete id", deleteID);
//   let deleteIndex = null;
//   students.map((student, index) => {
//     if (student.studentID == deleteID) {
//       deleteIndex = index;
//     }
//   });
//   if (deleteIndex >= 0) {
//     grades.splice(deleteIndex, 1);
//     res.send('STUDENTS DELETE OK');
//   } else {
//     res.send('NOT FOUND');
//   }
// };