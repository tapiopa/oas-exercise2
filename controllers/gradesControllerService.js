'use strict';
const grades = require('./grades');

module.exports.findGrades = function findGrades(req, res, next) {
  // console.log("findGrades req", req);
  res.status(200).json(grades.getAllGrades());
};

module.exports.createGrades = function createGrades(req, res, next) {
  console.log("CreateGrades req", req);
  const grade = req.undefined.value;
  if (grades.addGrade(grade)) {
    res.status(200).send("POST GRADE OK");
  } else {
    res.status(404).send("POST GRADE SERVER ERROR")
  }
};

