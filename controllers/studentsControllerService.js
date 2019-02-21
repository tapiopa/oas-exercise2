'use strict';
var students = require('./students');


module.exports.findStudents = function findStudents(req, res, next) {
  // console.log("students", students);
    res.status(200).json(students.getStudents());
};

module.exports.createStudents = function createStudents(req, res, next) {
  const student = req.undefined.value;
  if (students.addStudent(student)) {
    res.status(200).send("POST STUDENT OK");
  } else {
    res.status(404).send("POST STUDENT SERVER ERROR");
  }

};
